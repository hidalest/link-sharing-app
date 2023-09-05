import { Route, Routes } from 'react-router-dom';
import HomeLinks from './layout/HomeLinks/HomeLinks';

import data from './data.json';

import './App.scss';

function App() {
  const { homeLinksData } = data;

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
