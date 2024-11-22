import React from 'react';
import './App.css';
import Login from './pages/loginPage';
import CreateAccountPage from './pages/createAccountPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
<div className="App">
<Router>
      <Routes>
        <Route path="/" element={<Login />} /> {/* Login page */}
        <Route path="/register" element={<CreateAccountPage />} /> {/* Register page */}
      </Routes>
    </Router>
    </div>
  );
}

export default App;
