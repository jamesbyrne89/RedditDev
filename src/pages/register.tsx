import { useState } from 'react';
import { auth } from '../db/firestore';
import {
  FormStyles,
  FormSubmitButtonStyles
} from '../components/styles/FormStyles';
import Input from '../components/Input';

const Register = () => {
  const [userInput, setUserInput] = useState({
    user: '',
    password: '',
    password2: ''
  });

  const createNewUser = e => {
    if (
      !userInput.password.length > 5 &&
      userInput.password === userInput.password2
    ) {
      throw new Error('Passwords do not match');
      return;
    }
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(userInput.user, userInput.password)
      .catch(error => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(error);
        // ...
      });
  };

  const onInputChange = e => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <FormStyles onSubmit={createNewUser}>
        <h2>Register</h2>
        <Input
          name="user"
          onChange={onInputChange}
          value={userInput.user}
          type="email"
          placeholder="Email"
        />
        <Input
          name="password"
          onChange={onInputChange}
          value={userInput.password}
          type="password"
          placeholder="Password"
        />
        <Input
          name="password2"
          onChange={onInputChange}
          value={userInput.password2}
          type="password"
          placeholder="Retype password"
        />
        <FormSubmitButtonStyles onClick={createNewUser}>
          Register
        </FormSubmitButtonStyles>
      </FormStyles>
    </div>
  );
};

export default Register;
