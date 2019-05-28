import { useState } from 'react';
import Router from 'next/router';
import db, { auth } from '../db/firestore';
import {
  FormStyles,
  FormSubmitButtonStyles,
  ErrorMessageStyles
} from '../components/styles/FormStyles';
import Input from '../components/Input';

const redirectToHome = () => {
  Router.push('/');
};

const Register = () => {
  const [userInput, setUserInput] = useState({
    user: '',
    password: '',
    password2: ''
  });

  const [errorMessage, setErrorMessage] = useState('');

  const createNewUser = e => {
    if (
      !userInput.password.length > 5 &&
      userInput.password === userInput.password2
    ) {
      throw new Error('Passwords do not match');
    }
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(userInput.user, userInput.password)
      .then(cred => {
        db.collection('users').doc(cred.user.uid);
        redirectToHome();
      })
      .catch(error => {
        // Handle Errors here.
        const { code, message } = error;
        console.log(message);
        setErrorMessage(message);
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
        <ErrorMessageStyles>{errorMessage}</ErrorMessageStyles>
        <FormSubmitButtonStyles onClick={createNewUser}>
          Register
        </FormSubmitButtonStyles>
      </FormStyles>
    </div>
  );
};

export default Register;
