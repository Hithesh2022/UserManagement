import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { Routes, Route, Link, BrowserRouter as Router, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import AdminLogin from './components/Admin/AdminLogin'; // Update import
import AdminSignup from './components/Admin/AdminSignup'; // Update import
import Home from './components/Home';
import AdminDashboard from './components/Admin/AdminDashboard'; // Update import

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
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login authenticate={authenticate} />} />
        <Route path="/admin/login" element={<AdminLogin authenticate={authenticate} />} />
        <Route path="/admin/signup" element={<AdminSignup />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
