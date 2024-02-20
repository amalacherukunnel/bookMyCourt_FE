import React, { useState } from 'react';
import './Authorization.css';
import axios from 'axios';

function SignUp({ toggleBox }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confpass, setConfPass] = useState('');

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleNumber = (e) => {
    setNumber(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleConfPass = (e) => {
    setConfPass(e.target.value);
  };

  const doSignUp = () => {
    if (name === '' || email === '' || number === '' || password === '') {
      return alert('Please fill all fields');
    } else if (password !== confpass) {
      return alert('Both passwords must be the same.');
    } else {
      axios
        .post('http://localhost:5000/auth/signup', { name, email, number, password })
        .then((res) => {
          console.log('Sign up successful:', res.data);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  return (
    <div className="signup-box d-flex flex-column p-3 rounded-3">
      <h3>Signup</h3>
      <label htmlFor="fullname">Name</label>
      <input type="text" name="fullname" value={name} onChange={handleName} />

      <label htmlFor="email">Email</label>
      <input type="email" name="email" value={email} onChange={handleEmail} />

      <label htmlFor="number">Mobile Number</label>
      <input
        type="tel"
        name="number"
        value={number}
        onChange={handleNumber}
        maxLength={10}
        pattern="^[0-9]+$"
      />

      <label htmlFor="password">Password</label>
      <input type="password" name="password" value={password} onChange={handlePassword} minLength={5} />

      <label htmlFor="confirm-password">Confirm Password</label>
      <input
        type="password"
        name="confirm-password"
        value={confpass}
        onChange={handleConfPass}
        minLength={5}
      />

      <p>
        Already registered user?{' '}
        <span>
          <i onClick={() => toggleBox('login')}>Login here</i>
        </span>
      </p>

      <button className="btn btn-primary mt-3" onClick={doSignUp}>
        Sign Up
      </button>
    </div>
  );
}

export default SignUp;
