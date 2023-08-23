import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Navbar from './components/NavBar/Navbar';
import Home from './assets/layout/Home';

import data from './data.json';

function App() {
  const { navbarProps } = data;
  return (
    <>
      <Navbar navbarProps={navbarProps} />
      <Routes>
        <Route path='/home' element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
