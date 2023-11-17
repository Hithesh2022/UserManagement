import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const [name, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phonenumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (authenticated) {
      // If authenticated, redirect to login page
      // ... redirect logic
    }
  }, [authenticated]); // Run useEffect whenever authenticated state changes

  const handleSignup = async (e) => {
    e.preventDefault();

 
    try {
      const response = await axios.post('http://localhost:5000/auth/signup', {
        name,
        email,
        phonenumber,
        password,
      });

      if (response.status===200) {
        // Registration successful, you might want to redirect to login or another page
        console.log('Registration successful');
        // ... handle successful registration
        navigate('/');
      } else {
        // Handle registration error
        console.error('Registration failed');
      }
    } catch (error) {
      console.error('Error during registration', error);
    }
  };

  return (
    <div className="signup-container">
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
        <label>Username:</label>
        <input type="text" name="name" value={name} onChange={(e) => setUsername(e.target.value)} />

        <label>Email:</label>
        <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <label>Mobile Number:</label>
        <input type="tel" name="phonenumber" value={phonenumber} onChange={(e) => setMobileNumber(e.target.value)} />

        <label>Password:</label>
        <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
