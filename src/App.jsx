import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import './App.css';
import Join from './Page/Join';
import Main from './Page/Main';
import Login from './Page/Login';
import Loading from './Page/Loading';
import Inventory from './Page/Inventory';
import ErrorBoundary from './Components/ErrorBoundary';
import Stages from './Page/Quiz/Stages';

const Sea = lazy(() => import('./Page/Quiz/Sea'));
const Volcano = lazy(() => import('./Page/Quiz/Volcano'));
const Plant = lazy(() => import('./Page/Quiz/Plant'));
const PlantStage = lazy(() => import('./Page/Quiz/Plant/Stage'));
const LandingPage = lazy(() => import('./Page/LandingPage'));
const App = () => {
  return (
    <ErrorBoundary>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/main" exact element={<Main />} />
          <Route path="/join" element={<Join />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sea/:id" element={<Sea />} />
          <Route path="/volcano/:id" element={<Volcano />} />
          <Route path="/plant" element={<PlantStage />} />
          <Route path="/plant/:id" element={<Plant />} />
          <Route path="/loading" element={<Loading />} />
          {/* <Route path="/inventory" element={<Inventory />} /> */}
          <Route path="/stages" element={<Stages />} />

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
