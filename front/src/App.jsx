import React from 'react';
import { useState } from 'react';
import './App.css';

import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';

function App() {
  const [isSignForm, setIsSignForm] = useState(true);

  const changeForm = isSignForm ? 'Sign In' : 'Sign Up';
  const changeFormText = isSignForm ? 'Already have an account?' : "Don't have an account?";

  function changeSignForm() {
    setIsSignForm(!isSignForm);
  }

  return (
    <div className="App">
      <div className="form">
        {isSignForm ? <SignUpForm /> : <SignInForm />}
        <div className="changeForm">
          <p>{changeFormText}</p>
          <button onClick={changeSignForm}>{changeForm}</button>
        </div>
      </div>
    </div>
  );
}

export default App;
