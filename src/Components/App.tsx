import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import { Home } from './home-page';
import { Layout } from './layout';
import { OurPetsPage } from './our-pets-page';

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
