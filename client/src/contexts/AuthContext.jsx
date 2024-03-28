import { useContext, useState, createContext } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = (username, password) => {
    const isValidCredentials =
      username === 'monciego' && password === 'password';
    setIsAuthenticated(isValidCredentials);
    return isValidCredentials;
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  const authValues = {
    isAuthenticated,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={authValues}>{children}</AuthContext.Provider>
  );
};
