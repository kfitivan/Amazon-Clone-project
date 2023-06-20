import React, { useState } from 'react';
import './loginstyles.css';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../firebase';
import { useNavigate } from 'react-router-dom';

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const signIn = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        const user = auth.currentUser;
        console.log(user);

        onLogin(); // Call the onLogin function passed from the parent component
        navigate('/checkout');
      })
      .catch((error) => {
        if (error.code === 'auth/user-not-found') {
          alert('User does not exist');
        } else {
          alert(error.message);
        }
      });
  };

  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        onLogin(); // Call the onLogin function passed from the parent component
        navigate('/products');
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <h1>Login Page</h1>
      <div className="login__container">
        <form>
          <h1>Sign In</h1>

          <h5>E-mail</h5>
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />

          <h5>Password</h5>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

          <button type="submit" onClick={signIn} className="login__signInButton">
            Sign In
          </button>
        </form>
        <p>
          By signing in, you agree to Amazon's Terms and Conditions of Use and Sale. Please see our privacy policy.
        </p>
        <button onClick={register} className="login__registerButton">
          Create Account
        </button>
      </div>
    </div>
  );
}

export default Login;
