import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Suspense, lazy, useEffect } from 'react';
import './App.css';
import PrivateRoute from './Components/PrivateRoute';
import Join from './Page/Join';
import Main from './Page/Main';
import Login from './Page/Login';
import Loading from './Page/Loading';
import ErrorBoundary from './Components/ErrorBoundary';
import Stages from './Page/Quiz/Stages';
import ProblemDetail from './Page/Admin/ProblemDetail';
import ClassRoom from './Page/Admin/ClassRoom';
import Store from './Page/Admin/Store';
import Question from './Page/Admin/Question';
import ClassDetail from './Page/Admin/ClassDetail';
import Incorrect from './Page/Admin/Incorrect';

import axios from 'axios';
import config from './config';
import Maximun from './Page/Admin/Maximum';

const Sea = lazy(() => import('./Page/Quiz/Sea'));
const Volcano = lazy(() => import('./Page/Quiz/Volcano'));
const Plant = lazy(() => import('./Page/Quiz/Plant'));
const LandingPage = lazy(() => import('./Page/LandingPage'));

const App = () => {
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`${config.api}/users`, {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        });

        const username = response.data.username;
        localStorage.setItem('username', username);
      } catch (error) {
        console.error('실패:', error);
      }
    };

    fetchUser();
  }, []);

  return (
    <ErrorBoundary>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/join" element={<Join />} />
          <Route path="/login" element={<Login />} />
          {/* <Route element={<PrivateRoute />}> */}
            <Route path="/main" element={<Main />} />
            <Route path="/sea/:id" element={<Sea />} />
            <Route path="/volcano/:id" element={<Volcano />} />
            <Route path="/plant/:id" element={<Plant />} />
            <Route path="/loading" element={<Loading />} />
            <Route path="/stages/:id" element={<Stages />} />
            <Route path="/admin/problem" element={<ProblemDetail />} />
            <Route path="/admin/class" element={<ClassRoom />} />
            <Route path="/admin/class/:id" element={<ClassDetail />} />
            <Route path="/admin/store" element={<Store />} />
            <Route path="/admin/question" element={<Question />} />
            <Route path="/admin/incorrect" element={<Incorrect />} />
            <Route path="/admin/maximun" element={<Maximun />} />
          {/* </Route> */}
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
