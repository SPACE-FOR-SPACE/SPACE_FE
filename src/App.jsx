import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import './App.css';
import Join from './Page/Join';
import Main from './Page/Main';
import Login from './Page/Login';
import Loading from './Page/Loading';
import Inventory from './Page/Inventory';

const Sea = lazy(() => import('./Page/Quiz/Sea'));
const Volcano = lazy(() => import('./Page/Quiz/Volcano'));
const Plant = lazy(() => import('./Page/Quiz/Plant'));

const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" exact element={<Main />} />
        <Route path="/join" element={<Join />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sea/:id" element={<Sea />} />
        <Route path="/volcano/:id" element={<Volcano />} />
        <Route path="/plant/:id" element={<Plant />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/inventory" element={<Inventory />} />
      </Routes>
    </Suspense>
  );
};

export default function RootApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
