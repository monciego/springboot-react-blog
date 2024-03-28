import { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const navigate = useNavigate();

  const authContext = useAuth();

  const handleSubmit = () => {
    if (username === 'monciego' && password === 'password') {
      authContext.setIsAuthenticated(true);
      setShowSuccessMessage(true);
      setShowErrorMessage(false);
      navigate('/home');
    } else {
      authContext.setIsAuthenticated(false);
      setShowSuccessMessage(false);
      setShowErrorMessage(true);
    }
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <form>
      <div>{showSuccessMessage && 'success'}</div>
      <div>{showErrorMessage && 'error'}</div>
      <div>
        <label htmlFor='username'>Username</label>
        <input
          type='text'
          id='username'
          name='username'
          value={username}
          onChange={handleUsernameChange}
        />
      </div>
      <div>
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          id='password'
          name='password'
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <button type='button' onClick={handleSubmit}>
        Login
      </button>
    </form>
  );
};

export default Login;
