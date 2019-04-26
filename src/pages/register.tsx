import { useState } from 'react';
import { auth } from '../db/firestore';

const Register = () => {
  const [userInput, setUserInput] = useState({ user: '', password: '' });

  const createNewUser = e => {
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
      <p>Register page</p>
      <form onSubmit={createNewUser}>
        <input name="user" onChange={onInputChange} value={userInput.user} />
        <input
          name="password"
          type="password"
          onChange={onInputChange}
          value={userInput.password}
        />
        <button onClick={createNewUser}>Log in</button>
      </form>
    </div>
  );
};

export default Register;
