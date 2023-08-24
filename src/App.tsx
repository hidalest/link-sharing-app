import { Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar/Navbar';
import Home from './assets/layout/Home';

import { useEffect, useState } from 'react';
import { mobileSize } from './globals';
import data from './data.json';

import './App.scss';

function App() {
  const { navbarProps } = data;
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkForMobile = () => {
      setIsMobile(window.innerWidth <= mobileSize);
    };
    window.addEventListener('resize', checkForMobile);

    return () => {
      window.removeEventListener('resize', checkForMobile);
    };
  }, []);
  return (
    <>
      <Navbar navbarProps={navbarProps} isMobile={isMobile} />
      <Routes>
        <Route path='/home' element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
