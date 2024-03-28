import { useAuth } from '../contexts/AuthContext';

const Header = () => {
  const authContext = useAuth();
  const isAuthenticated = authContext.isAuthenticated;
  return (
    <div>
      {isAuthenticated ? 'header (logged in): create post' : 'please log in'}
    </div>
  );
};

export default Header;
