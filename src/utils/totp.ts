import { authenticator } from 'otplib';
import QRCode from 'qrcode';

// Generate a new secret key for a user
export const generateTOTPSecret = (username: string) => {
  const secret = authenticator.generateSecret();
  const otpauthUrl = authenticator.keyuri(username, 'Fashion Zone Admin', secret);
  return { secret, otpauthUrl };
};

// Verify a TOTP token
export const verifyTOTP = (token: string, secret: string) => {
  return authenticator.verify({ token, secret });
};

// Generate QR code for the TOTP secret
export const generateQRCode = async (otpauthUrl: string): Promise<string> => {
  try {
    return await QRCode.toDataURL(otpauthUrl);
  } catch (err) {
    throw new Error('Error generating QR code');
  }
};

// Save TOTP secret for admin
export const saveTOTPSecret = (secret: string) => {
  localStorage.setItem('admin_totp_secret', secret);
};

// Get TOTP secret for admin
export const getTOTPSecret = () => {
  return localStorage.getItem('admin_totp_secret');
};

// Check if TOTP is set up
export const isTOTPSetup = () => {
  return !!getTOTPSecret();
}; 