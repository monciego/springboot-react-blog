import './App.css';
import Login from './components/auth/Login';
import Home from './pages/Home';
import { Routes, Route, Navigate } from 'react-router-dom';
import Fallback from './components/Fallback';
import Header from './components/Header';
import { useAuth } from './contexts/AuthContext';

const AuthenticatedRoute = ({ children }) => {
  const authContext = useAuth();
  if (authContext.isAuthenticated) return children;

  return <Navigate to='/' />;
};

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route
          path='/home'
          element={
            <AuthenticatedRoute>
              <Home />
            </AuthenticatedRoute>
          }
        />
        <Route path='*' element={<Fallback />} />
      </Routes>
    </>
  );
}

export default App;
