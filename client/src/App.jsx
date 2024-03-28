import { useState } from 'react';
import './App.css';
import Login from './components/auth/Login';
import Home from './pages/Home';
import { Routes, Route, useNavigate } from 'react-router-dom';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = () => {
    if (username === 'monciego' && password === 'password') {
      setShowSuccessMessage(true);
      setShowErrorMessage(false);
      navigate('/home');
    } else {
      setShowSuccessMessage(false);
      setShowErrorMessage(true);
    }
  };

  return (
    <>
      <Routes>
        <Route
          path='/'
          element={
            <Login
              username={username}
              setUsername={setUsername}
              setPassword={setPassword}
              password={password}
              showSuccessMessage={showSuccessMessage}
              showErrorMessage={showErrorMessage}
              setShowSuccessMessage={setShowSuccessMessage}
              setShowErrorMessage={setShowErrorMessage}
              handleSubmit={handleSubmit}
            />
          }
        />

        <Route path='/home' element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
