import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import '../Login.css';

const AdminLogin = ({ authenticate }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/auth/Admin/login`, {
        email,
        password,
      });

      if (response.status === 200) {
        const data = response.data;
        authenticate(data.token);
        NotificationManager.success('Login Successful', 'Success', 2000);
        navigate('/Admin/dashboard');
      } else {
        NotificationManager.error('Login Failed', 'Error', 2000);
        console.error('Authentication failed:', response.status, response.data);
      }
    } catch (error) {
      NotificationManager.error('Error during authentication', 'Error', 2000);
      console.error('Error during authentication', error);
    }
  };

  const handleSignupClick = () => {
    // Navigate to the signup page
    navigate('/Admin/signup');
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    handleLogin(); // Call your login logic
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <h2>Admin Login</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Email:
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button type="submit">Login</button>
        </form>
        <p>
          Don't have an account? <span onClick={handleSignupClick}>Signup here</span>.
        </p>
        <NotificationContainer />
      </div>
    </div>
  );
};

export default AdminLogin;
