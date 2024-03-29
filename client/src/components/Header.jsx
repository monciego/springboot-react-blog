import { useAuth } from '../contexts/AuthContext';

const Header = () => {
  const authContext = useAuth();
  const isAuthenticated = authContext.isAuthenticated;
  const logout = () => {
    authContext.logout();
  };
  return (
    <div>
      {isAuthenticated && (
        <div>
          you are logged in - <button onClick={logout}>logout</button>
        </div>
      )}
    </div>
  );
};

export default Header;
