import { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const navigate = useNavigate();

  const authContext = useAuth();

  const handleSubmit = () => {
    if (authContext.login(username, password)) {
      navigate('/home');
    } else {
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
    <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
      <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
        <svg
          width='100%'
          height='100%'
          viewBox='-10.5 -9.45 21 18.9'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className='mx-auto h-10 w-auto text-indigo-600'
        >
          <circle cx='0' cy='0' r='2' fill='currentColor'></circle>
          <g stroke='currentColor' strokeWidth='1' fill='none'>
            <ellipse rx='10' ry='4.5'></ellipse>
            <ellipse rx='10' ry='4.5' transform='rotate(60)'></ellipse>
            <ellipse rx='10' ry='4.5' transform='rotate(120)'></ellipse>
          </g>
        </svg>
        <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
          Sign in to your account
        </h2>
      </div>

      <div className='mt-6 sm:mx-auto sm:w-full sm:max-w-sm'>
        {showErrorMessage && (
          <div className='bg-red-600 text-white py-1.5 px-4 rounded mb-4'>
            Incorrect username or password. Please try again.
          </div>
        )}
        <form className='space-y-6' action='#' method='POST'>
          <div>
            <label
              htmlFor='username'
              className='block text-sm font-medium leading-6 text-gray-900'
            >
              Username
            </label>
            <div className='mt-2'>
              <input
                id='username'
                name='username'
                type='text'
                value={username}
                onChange={handleUsernameChange}
                className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
              />
            </div>
          </div>

          <div>
            <div className='flex items-center justify-between'>
              <label
                htmlFor='password'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Password
              </label>
              <div className='text-sm'>
                <a
                  href='#'
                  className='font-semibold text-indigo-600 hover:text-indigo-500'
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <div className='mt-2'>
              <input
                id='password'
                name='password'
                type='password'
                value={password}
                onChange={handlePasswordChange}
                className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              />
            </div>
          </div>

          <div>
            <button
              type='button'
              onClick={handleSubmit}
              className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
            >
              Sign in
            </button>
          </div>
        </form>

        <p className='mt-10 text-center text-sm text-gray-500'>
          Not a member?{' '}
          <a
            href='#'
            className='font-semibold leading-6 text-indigo-600 hover:text-indigo-500'
          >
            Start a 14 day free trial
          </a>
        </p>
      </div>
    </div>

    // <form>
    //   <div>{showErrorMessage && 'error'}</div>
    //   <div>
    //     <label htmlFor='username'>Username</label>
    //     <input
    //       type='text'
    //       id='username'
    //       name='username'
    //       value={username}
    //       onChange={handleUsernameChange}
    //     />
    //   </div>
    //   <div>
    //     <label htmlFor='password'>Password</label>
    //     <input
    //       type='password'
    //       id='password'
    //       name='password'
    //       value={password}
    //       onChange={handlePasswordChange}
    //     />
    //   </div>
    //   <button type='button' onClick={handleSubmit}>
    //     Login
    //   </button>
    // </form>
  );
};

export default Login;
