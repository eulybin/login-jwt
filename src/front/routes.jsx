import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import Layout from './components/Layout';
import Signup from './pages/Signup';
import Login from './pages/Login';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
    </Route>
  )
);
