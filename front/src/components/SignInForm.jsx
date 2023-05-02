import React from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import { useState } from 'react';
import { Link } from 'react-router-dom';

function Login({ signInSubmit }) {
  const [showPassword, setShowPassword] = useState(false);
  const [inputValue, setInputValue] = useState({
    User: '',
    Password: '',
  });

  function userHandler(event) {
    setInputValue({ ...inputValue, User: event.target.value });
  }

  function passwordHandler(event) {
    setInputValue({ ...inputValue, Password: event.target.value });
  }

  function handleClickShowPassword() {
    setShowPassword(!showPassword);
  }

  return (
    <div>
      <form onSubmit={signInSubmit} className="signInForm">
        <TextField
          id="outlined-basic"
          className="textField"
          label="Login"
          variant="outlined"
          type="text"
          value={inputValue.User}
          onChange={userHandler}
        />
        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword} edge="end">
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            className="textField"
            label="Password"
            value={inputValue.Password}
            onChange={passwordHandler}
          />
        </FormControl>
      </form>
      <Link to={'/sign-up'}>Sign Up</Link>
    </div>
  );
}

export default Login;
