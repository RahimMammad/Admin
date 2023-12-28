import React from 'react';
import "./App.scss";
import { Route, Routes } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import UserModel from '../../server/src/models/UserModel';
import AdminProfile from './pages/AdminProfile';
import SuperAdminProfile from './pages/SuperAdminProfile';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/profile/admin/' element={<UserModel />} />
          <Route path='/profile/user' element={<AdminProfile />} />
          <Route path='/profile/superadmin' element={<SuperAdminProfile />} />
        </Route>
      </Routes>
    </>
  )
}

export default App