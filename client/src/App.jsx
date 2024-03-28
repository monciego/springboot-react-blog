import './App.css';
import Login from './components/auth/Login';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import Fallback from './components/Fallback';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='*' element={<Fallback />} />
      </Routes>
    </>
  );
}

export default App;
