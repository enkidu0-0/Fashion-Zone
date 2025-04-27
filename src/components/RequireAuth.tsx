import { useNavigate, useLocation } from 'react-router-dom';
import { isAuthenticated, setReturnPath } from '@/utils/auth';

interface RequireAuthProps {
  children: React.ReactNode;
  onAuthRequired?: () => void;
}

export const RequireAuth = ({ children, onAuthRequired }: RequireAuthProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleAction = (e: React.MouseEvent) => {
    if (!isAuthenticated()) {
      e.preventDefault();
      // Store current path for return after login
      setReturnPath(location.pathname);
      // Call optional callback
      if (onAuthRequired) {
        onAuthRequired();
      }
      // Redirect to login
      navigate('/login');
      return;
    }
  };

  return (
    <div onClick={handleAction}>
      {children}
    </div>
  );
}; 