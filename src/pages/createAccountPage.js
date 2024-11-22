import React from 'react';

function createAccountPage() {
  return (
    <div className="createAccountPage">
      <h1>Create an Account</h1>
      <label htmlFor="username">Username:</label>
      <input type="text" id="username" name="username" />
      <br />

      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" />
      <br />

      <button>Create Account</button>
    </div>
  );
}

export default createAccountPage;
