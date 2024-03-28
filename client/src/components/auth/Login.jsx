const Login = ({
  username,
  setUsername,
  password,
  setPassword,
  showSuccessMessage,
  showErrorMessage,
  handleSubmit,
}) => {
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
