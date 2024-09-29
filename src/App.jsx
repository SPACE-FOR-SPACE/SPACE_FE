import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import './App.css'
import Join from './Page/Join'
import Main from './Page/Main'
import Login from './Page/Login'
import Loading from './Page/Loading'

import Sorry from './Page/Sorry'

const Sea = lazy(() => import('./Page/Quiz/Sea'));
const Volcano = lazy(() => import('./Page/Quiz/Volcano'));
const Plant = lazy(() => import('./Page/Quiz/Plant'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Main />} />
          <Route path='/join' element={<Join />} />
          <Route path='/login' element={<Login />} />
          <Route path='/sea/:id' element={<Sea />} />
          <Route path='/volcano/:id' element={<Volcano />} />
          <Route path='/plant/:id' element={<Plant />} />
          <Route path='/loading' element={<Loading />} />
          <Route path='/sorry/1' element={<Sorry />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}

export default App
