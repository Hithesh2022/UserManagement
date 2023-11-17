import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import './Dashboard.css'; // Import your CSS file

const Dashboard = () => {
  const location = useLocation();
  const elementName = location.state ? location.state.name : null;
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('authToken');

      try {
        const response = await axios.get('http://localhost:5000/auth/login/getdetails', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        console.log(response);

        if (Array.isArray(response.data)) {
          setUsers(response.data.map((user) => ({ ...user, showDetails: false })));
        } else {
          console.error('Invalid user details response:', response);
        }
      } catch (error) {
        console.error('Error during user details fetch', error);
      }
    };

    fetchData();
  }, []); // No dependency array for now

  const handleToggleDetails = (index) => {
    setUsers((prevUsers) => {
      return prevUsers.map((user, i) => {
        if (i === index) {
          return { ...user, showDetails: !user.showDetails };
        }
        return user;
      });
    });
  };

  return (
    <div className="dashboard-container">
      <h2>Welcome to the Dashboard!</h2>
      {elementName && <p>Element Name: {elementName}</p>}
      {/* Render user details in a table format */}
      <table>
        <thead>
          <tr>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.email}</td>
              <td>
                <button onClick={() => handleToggleDetails(index)}>
                  {user.showDetails ? 'Hide Details' : 'Show Details'}
                </button>
                {/* Render additional user details if showDetails is true */}
                {user.showDetails && (
                  <div className="user-details">
                    <p>Name: {user.name || 'N/A'}</p>
                    <p>Phone Number: {user.phonenumber || 'N/A'}</p>
                    {/* Other user details */}
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Other dashboard content */}
    </div>
  );
};

export default Dashboard;
