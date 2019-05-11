import { useState, useEffect } from 'react';
import Router from 'next/router';
import { auth } from '../db/firestore';
import {
  FormStyles,
  FormSubmitButtonStyles
} from '../components/styles/FormStyles';
import Input from '../components/Input';
import Loader from '../components/Loader';

const Login = ({ isAuthenticated, loading }) => {
  const [userInput, setUserInput] = useState({ user: '', password: '' });
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    console.log(isAuthenticated);
    if (isAuthenticated) {
      Router.push('/');
    }
  }, [isAuthenticated]);

  const signInUser = e => {
    e.preventDefault();
    const { user, password } = userInput;
    auth.signInWithEmailAndPassword(user, password).catch(error => {
      console.error(error.code);
      setErrorMessage(error.message);
    });
  };

  const onInputChange = e => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
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
          <div>{errorMessage}</div>
          <FormSubmitButtonStyles onClick={signInUser}>
            Log in
          </FormSubmitButtonStyles>
        </FormStyles>
      )}
    </div>
  );
};

export default Login;
