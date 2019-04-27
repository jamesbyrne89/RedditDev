import { useState } from 'react';
import { auth } from '../db/firestore';
import {
  FormStyles,
  FormSubmitButtonStyles
} from '../components/styles/FormStyles';
import Input from '../components/Input';

const Login = () => {
  const [userInput, setUserInput] = useState({ user: '', password: '' });

  const signInUser = e => {
    e.preventDefault();
    const { user, password } = userInput;
    auth.signInWithEmailAndPassword(user, password).catch(error => {
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
      <FormStyles onSubmit={signInUser}>
        <h2>Log in</h2>
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
        <FormSubmitButtonStyles onClick={signInUser}>
          Log in
        </FormSubmitButtonStyles>
      </FormStyles>
    </div>
  );
};

export default Login;
