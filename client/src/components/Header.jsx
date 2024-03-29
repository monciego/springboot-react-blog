import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const navigation = [{ name: 'Home', href: '/home' }];

const Header = () => {
  const authContext = useAuth();
  const isAuthenticated = authContext.isAuthenticated;
  const logout = () => {
    authContext.logout();
  };
  return (
    <>
      {isAuthenticated && (
        <nav className='bg-gray-800'>
          <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
            <div className='relative flex h-16 items-center justify-between'>
              <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
                <div className='flex flex-shrink-0 items-center'>
                  <svg
                    width='100%'
                    height='100%'
                    viewBox='-10.5 -9.45 21 18.9'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    className='mx-auto h-8 w-auto text-indigo-600'
                  >
                    <circle cx='0' cy='0' r='2' fill='currentColor'></circle>
                    <g stroke='currentColor' strokeWidth='1' fill='none'>
                      <ellipse rx='10' ry='4.5'></ellipse>
                      <ellipse
                        rx='10'
                        ry='4.5'
                        transform='rotate(60)'
                      ></ellipse>
                      <ellipse
                        rx='10'
                        ry='4.5'
                        transform='rotate(120)'
                      ></ellipse>
                    </g>
                  </svg>
                </div>
                <div className='hidden sm:ml-6 sm:block'>
                  <div className='flex space-x-4'>
                    {navigation.map((item) => (
                      // active: bg-gray-900
                      <Link
                        href={item.href}
                        key={item.name}
                        className='text-gray-300 bg-gray-900 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
                <button
                  onClick={logout}
                  className='bg-red-600 hover:bg-red-500 flex items-center gap-2 text-white px-3 py-1.5 text-sm rounded'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    className='w-5 h-5'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75'
                    />
                  </svg>
                  Logout
                </button>
              </div>
            </div>
          </div>
        </nav>
      )}
    </>
  );
};

export default Header;
