import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Home.css'; // Create a new CSS file for styling

const Home = () => {
  const navigate = useNavigate();

  const handleUserClick = () => {
    navigate('/login');
  };

  const handleAdminClick = () => {
    navigate('/Admin/login');
  };

  return (
    <div className="home-container">
      <h2 className="home-title">Home Page</h2>
      <div className="button-container">
        <button className="user-button" onClick={handleUserClick}>
          User
        </button>
        <button className="admin-button" onClick={handleAdminClick}>
          Admin
        </button>
      </div>
    </div>
  );
};

export default Home;
