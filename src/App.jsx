import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import './App.css';
import Join from './Page/Join';
import Main from './Page/Main';
import Login from './Page/Login';
import Loading from './Page/Loading';
import ErrorBoundary from './Components/ErrorBoundary';
import Stages from './Page/Quiz/Stages';

import PrivateRoute from './Components/PrivateRoute';

const Sea = lazy(() => import('./Page/Quiz/Sea'));
const Volcano = lazy(() => import('./Page/Quiz/Volcano'));
const Plant = lazy(() => import('./Page/Quiz/Plant'));
const LandingPage = lazy(() => import('./Page/LandingPage'));

const App = () => {
  return (
    <ErrorBoundary>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/join" element={<Join />} />
          <Route path="/login" element={<Login />} />
          <Route element={<PrivateRoute />}>
            <Route path="/main" element={<Main />} />
            <Route path="/sea/:id" element={<Sea />} />
            <Route path="/volcano/:id" element={<Volcano />} />
            <Route path="/plant/:id" element={<Plant />} />
            <Route path="/loading" element={<Loading />} />
            <Route path="/stages/:id" element={<Stages />} />
          </Route>
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
};

export default function RootApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
