import { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = () => {
    if (username === 'monciego' && password === 'password') {
      setShowSuccessMessage(true);
      setShowErrorMessage(false);
    } else {
      setShowSuccessMessage(false);
      setShowErrorMessage(true);
    }
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
