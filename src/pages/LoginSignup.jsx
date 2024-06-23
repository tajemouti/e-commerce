import React from 'react';
import './css/login_signup.css';

const LoginSignup = () => (
  <div className="loginsignup">
    <div className="loginsignup-container">
      <h1>Sign Up</h1>
      <div className="loginsignup-fields">
        <input type="text" placeholder="Your name" />
        <input type="email" placeholder="E-mail address" />
        <input type="password" placeholder="Password" />
      </div>
      <button type="button">Continue</button>
      <p className="loginsignup-login">
        Already have an account?
        {' '}
        <span>Log in here</span>
      </p>
      <div className="loginsignup-agree">
        <input type="checkbox" name="" id="" />
        <p>By continuing, I agree to the terms of use & privacy policy.</p>
      </div>
    </div>
  </div>
);

export default LoginSignup;
