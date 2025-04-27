// Store the return path
export const setReturnPath = (path: string) => {
  sessionStorage.setItem('returnPath', path);
};

// Get and clear the return path
export const getAndClearReturnPath = () => {
  const path = sessionStorage.getItem('returnPath');
  sessionStorage.removeItem('returnPath');
  return path || '/';
};

// Check if user is authenticated
export const isAuthenticated = () => {
  return localStorage.getItem('isLoggedIn') === 'true';
}; 