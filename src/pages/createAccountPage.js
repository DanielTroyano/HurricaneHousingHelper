import React, { useState } from 'react';
import { firestore } from '../firebase'; // Import Firestore from your firebase.js file
import { collection, addDoc } from 'firebase/firestore'; // Firestore functions

import { useNavigate } from 'react-router-dom'; // Import useNavigate


function CreateAccountPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleCreateAccount = async () => {
    if (!username || !password) {
      alert('Please fill out all fields');
      return;
    }

    try {
      // Add a new document to the Firestore "users" collection
      const usersCollectionRef = collection(firestore, 'users');
      await addDoc(usersCollectionRef, {
        username,
        password,
      });

      alert('Account created successfully!');
      // Optionally navigate to the login page or clear the form
      setUsername('');
      setPassword('');
      navigate('/landing');
    } catch (error) {
      console.error('Error creating account:', error);
      alert('Failed to create account. Please try again.');
    }
  };

  return (
    <div className="createAccountPage">
      <h1>Create an Account</h1>
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        name="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)} // Update username state
      />
      <br />

      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)} // Update password state
      />
      <br />

      <button onClick={handleCreateAccount}>Create Account</button>
    </div>
  );
}

export default CreateAccountPage;

