import TextField from '@mui/material/TextField';
import { useState } from 'react';
import masks from '../utils/masks';
import { textField } from '../utils/styles';

function signUpForm({ SignUpSubmit }) {
  const [inputValue, setInputValue] = useState({
    Email: '',
    Username: '',
    Phone: '',
    Password: '',
    PasswordConf: '',
  });

  function emailHandler(event) {
    setInputValue({
      ...inputValue,
      Email: event.target.value,
    });
  }

  function usernameHandler(event) {
    setInputValue({
      ...inputValue,
      Username: event.target.value,
    });
  }

  function phoneHandler(event) {
    const maskedPhone = masks.maskPhone(event.target.value);

    setInputValue({
      ...inputValue,
      Phone: maskedPhone,
    });
  }

  function passwordHandler(event) {
    setInputValue({
      ...inputValue,
      Password: event.target.value,
    });
  }

  function passwordConfHandler(event) {
    setInputValue({
      ...inputValue,
      PasswordConfirmation: event.target.value,
    });
  }

  return (
    <form onSubmit={SignUpSubmit} className="signUpForm">
      <TextField
        id="outlined-basic"
        label="Email"
        variant="outlined"
        type="email"
        value={inputValue.Email}
        onChange={emailHandler}
        size="small"
      />
      <TextField
        id="outlined-basic"
        className="textField"
        label="Username"
        variant="outlined"
        type="text"
        value={inputValue.Username}
        onChange={usernameHandler}
        size="small"
      />
      <TextField
        id="outlined-basic"
        className="textField"
        label="Phone"
        variant="outlined"
        type="tel"
        value={inputValue.Phone}
        onChange={phoneHandler}
        size="small"
      />
      <TextField
        id="outlined-basic"
        className="textField"
        label="Password"
        variant="outlined"
        type="password"
        value={inputValue.Password}
        onChange={passwordHandler}
        size="small"
      />
      <TextField
        id="outlined-basic"
        className="textField"
        label="Password Confirmation"
        variant="outlined"
        type="text"
        value={inputValue.PasswordConf}
        onChange={passwordConfHandler}
        size="small"
      />
    </form>
  );
}

export default signUpForm;
