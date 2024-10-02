import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { useState, useEffect, lazy, Suspense } from 'react';
import './App.css';
import Join from './Page/Join';
import Main from './Page/Main';
import Login from './Page/Login';
import Loading from './Page/Loading';

const Sea = lazy(() => import('./Page/Quiz/Sea'));
const Volcano = lazy(() => import('./Page/Quiz/Volcano'));
const Plant = lazy(() => import('./Page/Quiz/Plant'));

const App = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeout); 
  }, [location]);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" exact element={<Main />} />
            <Route path="/join" element={<Join />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sea/:id" element={<Sea />} />
            <Route path="/volcano/:id" element={<Volcano />} />
            <Route path="/plant/:id" element={<Plant />} />
            <Route path="/loading" element={<Loading />} />
          </Routes>
        </Suspense>
      )}
    </div>
  );
};

export default function RootApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}