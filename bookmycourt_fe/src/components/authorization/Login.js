import React, { useState } from 'react';
import './Authorization.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../../toolkit/userSlice';

function Login({ toggleBox }) {
  const [logCre, setLogCre] = useState({ email: '', password: '' });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setLogCre({ ...logCre, [e.target.name]: e.target.value });
  };

  const doLogin = () => {
    axios
      .post(`${process.env.REACT_APP_BE_URL}/auth/login`, logCre)
      .then((res) => {
        if (res.data.message === 'Login Successful') {
          localStorage.setItem('token', res.data.token);
          dispatch(setUser(res.data.userDetails));
          navigate('/home');
        }
      })
      .catch((err) => {
        if (err.response.data.message === 'Invalid credentials') {
          alert(err.response.data.message);
        } else {
          alert('Something went wrong');
        }
      });
  };

  return (
    <div className="signup-box d-flex flex-column p-3 rounded-3">
      <h3>Login</h3>
      <label htmlFor="email">Email</label>
      <input type="email" name="email" value={logCre.email} onChange={handleChange} />
      <label htmlFor="password">Password</label>
      <input type="password" name="password" value={logCre.password} onChange={handleChange} minLength={5} />
      <p>
        Not Registered?{' '}
        <span>
          <i onClick={() => toggleBox('signup')}>Signup</i>
        </span>
      </p>
      <button className="btn btn-primary mt-3" onClick={doLogin}>
        Login
      </button>
    </div>
  );
}

export default Login;
