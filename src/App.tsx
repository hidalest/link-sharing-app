import { Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar/Navbar';
import HomeLinks from './layout/HomeLinks/HomeLinks';

import data from './data.json';

import './App.scss';

function App() {
  const { navbarProps, homeLinksData } = data;

  return (
    <>
      <main className={'main'}>
        <Routes>
          <Route
            path='/home'
            element={<HomeLinks homeLinksData={homeLinksData} />}
          />
        </Routes>
      </main>
    </>
  );
}

export default App;
