import { Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar/Navbar';
import HomeLinks from './layout/HomeLinks/HomeLinks';

import data from './data.json';

import './App.scss';
import Button from './components/UI/Button';

function App() {
  const { navbarProps, homeLinksData, saveButton } = data;
  const { btnCopy } = saveButton;

  return (
    <>
      <Navbar navbarProps={navbarProps} />
      <main className={'main'}>
        <Routes>
          <Route
            path='/home'
            element={<HomeLinks homeLinksData={homeLinksData} />}
          />
        </Routes>
        <section className={'buttonSave--container'}>
          <Button priority={'primary'}>{btnCopy}</Button>
        </section>
      </main>
    </>
  );
}

export default App;
