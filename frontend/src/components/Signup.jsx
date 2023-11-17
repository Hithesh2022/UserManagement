import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import './Signup.css'; // Import your CSS file

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phonenumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/auth/signup', {
        name,
        email,
        phonenumber,
        password,
      });

      if (response.status === 200) {
        console.log('Registration successful');
        navigate('/');
      } else {
        console.error('Registration failed');
      }
    } catch (error) {
      console.error('Error during registration', error);
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign up</h2>
      <form onSubmit={handleSignup}>
        <label>Username:</label>
        <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />

        <label>Email:</label>
        <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <label>Mobile Number:</label>
        <input type="tel" name="phonenumber" value={phonenumber} onChange={(e) => setMobileNumber(e.target.value)} />

        <label>Password:</label>
        <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
