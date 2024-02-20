import React, { useState } from 'react';
import './LoginPage.css';
import SignUp from '../../components/Authorization/SignUp';
import Login from '../../components/Authorization/Login';

function LoginPage() {
  const [boxType, setBoxType] = useState('signup');

  return (
    <div className='login-container d-flex justify-content-center align-items-center'>
      {boxType === 'signup' && <SignUp toggleBox={setBoxType} />}
      {boxType === 'login' && <Login toggleBox={setBoxType} />}
    </div>
  );
}

export default LoginPage;
