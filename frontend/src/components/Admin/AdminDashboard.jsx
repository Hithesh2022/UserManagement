import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import '../Dashboard.css'; // Import your CSS file

const Dashboard = () => {
  const location = useLocation();
  const elementName = location.state ? location.state.name : null;
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('authToken');

      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/auth/Admin/login/getdetails`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

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

  useEffect(() => {
    // Filter the users based on the search term
    const filteredList = users.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(filteredList);
  }, [searchTerm, users]);

  const handleToggleDetails = (index) => {
    setFilteredUsers((prevUsers) => {
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
      <h2>Welcome to the Dashboard ADMIN !</h2>
      {elementName && <p>Element Name: {elementName}</p>}
      {/* Search input */}
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {/* Render user details in a table format */}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>
                <button onClick={() => handleToggleDetails(index)}>
                  {user.showDetails ? 'Hide Details' : 'Show Details'}
                </button>
                {/* Render additional user details if showDetails is true */}
                {user.showDetails && (
                  <div className="user-details">
                    <p>Email: {user.email || 'N/A'}</p>
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
