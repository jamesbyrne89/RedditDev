import { useState } from 'react';
import { auth } from '../db/firestore';

const Login = () => {
  const [ userInput, setUserInput ] = useState({});

  const createNewUser = () => {
    auth.createUserWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
  };

  const onInputChange = e => {
    setUserInput({ [e.target.name]: e.target.value });
  };

  return (
    <div>
      <p>Login page</p>
      <input name="user" onChange={onInputChange} />
      <input name="password" onChange={onInputChange} />
    </div>
  );
};

export default Login;
