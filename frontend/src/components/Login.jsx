import React, { useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import './Login.css'; // Import your CSS file for styling

const Login = ({ authenticate }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/auth/login', {
        email,
        password,
      });

      if (response.status === 200) {
        const data = response.data;
        authenticate(data.token);
        setAuthenticated(true);
      } else {
        console.error('Authentication failed:', response.status, response.data);
      }
    } catch (error) {
      console.error('Error during authentication', error);
    }
  };

  if (authenticated) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="login-container">
      <div className="login-content">
        <h2>Login</h2>
        <form>
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
          <button type="button" onClick={handleLogin}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
