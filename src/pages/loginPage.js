// Login.js
import React from 'react';

function Login() {
  return (
    <div className="loginPage">
      <h1>Welcome to Hurricane Helper</h1>
      <h2>Login</h2>
      
      <label htmlFor="username">Username:</label>
      <input type="text" id="username" name="username" />
      <br />

      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" />
      <br />

      <label>
        Don’t have an account? <button>Register</button>
      </label>
    </div>
  );
}

export default Login;
