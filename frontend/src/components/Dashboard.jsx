import React from 'react';
import { useLocation } from 'react-router-dom';
import './Dashboard.css'; // Import your CSS file

const Dashboard = () => {
  const location = useLocation();
  const elementName = location.state ? location.state.name : null;

  return (
    <div className="dashboard-container">
      <h2>Welcome to the Dashboard, User! THIS IS DUMMY DASHBOARD</h2>
      
      {/* Other dashboard content */}
    </div>
  );
};

export default Dashboard;
