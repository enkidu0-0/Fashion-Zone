import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { generateTOTPSecret, generateQRCode, verifyTOTP, saveTOTPSecret } from '@/utils/totp';

interface TOTPSetupProps {
  username: string;
  onSetupComplete: () => void;
}

const TOTPSetup = ({ username, onSetupComplete }: TOTPSetupProps) => {
  const [secret, setSecret] = useState('');
  const [qrCode, setQrCode] = useState('');
  const [token, setToken] = useState('');
  const { toast } = useToast();

  const handleSetup = async () => {
    try {
      const { secret: newSecret, otpauthUrl } = generateTOTPSecret(username);
      setSecret(newSecret);
      const qrCodeUrl = await generateQRCode(otpauthUrl);
      setQrCode(qrCodeUrl);
    } catch (error) {
      toast({
        title: "Setup Failed",
        description: "Failed to generate 2FA credentials",
        variant: "destructive",
      });
    }
  };

  const handleVerify = () => {
    if (!token || !secret) return;

    if (verifyTOTP(token, secret)) {
      saveTOTPSecret(secret);
      toast({
        title: "Setup Complete",
        description: "Two-factor authentication has been enabled",
      });
      onSetupComplete();
    } else {
      toast({
        title: "Verification Failed",
        description: "Invalid code. Please try again.",
        variant: "destructive",
      });
    }
  };

  if (!qrCode) {
    return (
      <div className="text-center">
        <h3 className="text-lg font-medium mb-4">Enable Two-Factor Authentication</h3>
        <p className="text-gray-500 mb-4">
          Secure your admin account with Google Authenticator
        </p>
        <Button onClick={handleSetup}>
          Set up 2FA
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto">
      <h3 className="text-lg font-medium mb-4">Set up Google Authenticator</h3>
      
      <div className="space-y-4">
        <div className="bg-white p-4 rounded-lg border text-center">
          <img src={qrCode} alt="QR Code" className="mx-auto mb-4" />
          <p className="text-sm text-gray-500">
            Scan this QR code with Google Authenticator
          </p>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">
            Enter the 6-digit code from your authenticator app
          </label>
          <Input
            type="text"
            maxLength={6}
            value={token}
            onChange={(e) => setToken(e.target.value)}
            placeholder="Enter code"
            className="text-center text-2xl tracking-wide"
          />
        </div>

        <Button 
          onClick={handleVerify} 
          className="w-full"
          disabled={token.length !== 6}
        >
          Verify and Enable
        </Button>

        <p className="text-sm text-gray-500 text-center">
          Make sure to save your backup codes in a secure location
        </p>
      </div>
    </div>
  );
};

export default TOTPSetup; 