import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/auth/Login';
import SignUp from './pages/auth/SignUp';
import ResetPassword from './pages/auth/ResetPassword';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/sign-up' element={<SignUp />} />
      <Route path='/reset-password' element={<ResetPassword />} />
    </Routes>
  );
}

export default App;
