import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { verifyTOTP, getTOTPSecret } from '@/utils/totp';

interface TOTPVerifyProps {
  onVerified: () => void;
  onCancel: () => void;
}

const TOTPVerify = ({ onVerified, onCancel }: TOTPVerifyProps) => {
  const [token, setToken] = useState('');
  const { toast } = useToast();

  const handleVerify = () => {
    const secret = getTOTPSecret();
    if (!secret) {
      toast({
        title: "Verification Failed",
        description: "2FA is not set up properly",
        variant: "destructive",
      });
      return;
    }

    if (verifyTOTP(token, secret)) {
      onVerified();
    } else {
      toast({
        title: "Verification Failed",
        description: "Invalid code. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <h3 className="text-lg font-medium mb-4">Two-Factor Authentication</h3>
      
      <div className="space-y-4">
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
            autoFocus
          />
        </div>

        <div className="flex gap-3">
          <Button 
            onClick={handleVerify} 
            className="flex-1"
            disabled={token.length !== 6}
          >
            Verify
          </Button>
          <Button 
            onClick={onCancel}
            variant="outline"
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TOTPVerify; 