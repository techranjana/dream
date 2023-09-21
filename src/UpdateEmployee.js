import React, { useState } from 'react';
import axios from 'axios';

function UpdateEmployee() {
  const [employeeData, setEmployeeData] = useState({
    id: '', // Employee ID you want to update
    name: '',
    email: '',
    // Add more fields as needed
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEmployeeData({
      ...employeeData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Send an HTTP PUT or PATCH request to update the employee record
    axios
      .put(`https://api.example.com/employees/${employeeData.id}`, employeeData)
      .then((response) => {
        console.log('Employee updated successfully:', response.data);
        // Handle success, e.g., display a success message or redirect
      })
      .catch((error) => {
        console.error('Error updating employee:', error);
        // Handle errors, e.g., display an error message
      });
  };

  return (
    <div>
      <h1>Update Employee</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Employee ID:
          <input
            type="text"
            name="id"
            value={employeeData.id}
            onChange={handleChange}
          />
        </label>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={employeeData.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={employeeData.email}
            onChange={handleChange}
          />
        </label>
        {/* Add more form fields for other employee attributes */}
        <button type="submit">Update Employee</button>
      </form>
    </div>
  );
}

export default UpdateEmployee;
