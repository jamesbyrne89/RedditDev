import { useState } from 'react';
import { auth } from '../db/firestore';
import { FormStyles } from '../components/styles/FormStyles';
import Input from '../components/Input';

const Login = () => {
  const [userInput, setUserInput] = useState({ user: '', password: '' });

  const createNewUser = e => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(userInput.user, userInput.password)
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
        <button onClick={createNewUser}>Log in</button>
      </FormStyles>
    </div>
  );
};

export default Login;
