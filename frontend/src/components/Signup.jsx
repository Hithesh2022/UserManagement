import 'react-notifications/lib/notifications.css'; // Import the CSS file
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import React from 'react';

import './Signup.css'; // Import your CSS file

const Signup = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phonenumber, setMobileNumber] = React.useState('');
  const [password, setPassword] = React.useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/auth/signup`, {
        name,
        email,
        phonenumber,
        password,
      });

      if (response.status === 200) {
        console.log('Registration successful');
        NotificationManager.success('Registration Successful', 'Success', 2000);
        navigate('/login');
      } else {
        console.error('Registration failed');
      }
    } catch (error) {
      console.error('Error during registration', error);
      NotificationManager.error('Error during registration', 'Error', 2000);
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign up</h2>
      <NotificationContainer />
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
