import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleUserClick = () => {
    navigate('/login');
  };

  const handleAdminClick = () => {
    navigate('/Admin/login');
  };

  return (
    <div>
      <h2>Home Page</h2>
      <button onClick={handleUserClick}>User</button>
      <button onClick={handleAdminClick}>Admin</button>
    </div>
  );
};

export default Home;
