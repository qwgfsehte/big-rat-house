import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import { Home } from './homePage/home';
import { Layout } from './layout';
import { OurPetsPage } from './ourPetsPage/ourPetsPage';

export function App() {
  return (
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/our-pets"
          element={
            <Layout>
              <OurPetsPage />
            </Layout>
          }
        />
      </Routes>
    </HashRouter>
  );
}
