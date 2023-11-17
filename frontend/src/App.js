import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { Routes, Route, Link, BrowserRouter as Router, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  const authenticate = (token) => {
    // Set authentication status and save token to localStorage or other storage mechanism
    setAuthenticated(true);
    // You may want to store the token in localStorage or a secure storage method
    localStorage.setItem('authToken', token);
  };
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Login authenticate={authenticate}/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/signup" element={<Signup/>} />
    </Routes>
  </Router>
  );
}

export default App;
