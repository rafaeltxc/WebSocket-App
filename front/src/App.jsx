import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';
import Chat from './components/Chat';

function App() {
  let navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('user')) {
      return navigate('/sign-up');
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Chat />} />
      <Route path="/sign-up" element={<SignUpForm />} />
      <Route path="/sign-in" element={<SignInForm />} />
    </Routes>
  );
}

export default App;