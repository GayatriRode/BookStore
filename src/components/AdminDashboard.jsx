import React, { useEffect, useState } from 'react';
import logo from '../images/logo.jpeg';
import { useNavigate, Link } from 'react-router-dom';

const AdminDashboard = () => {
  const navigate = useNavigate();
  
  return (
    <div>
      <nav className="sticky top-0 z-50 flex justify-between items-center w-full py-4 px-6 bg-indigo-500 text-gray-100 shadow-md">
        <div className="flex items-center">
          <img className="h-10" src={logo} alt="logo" />
          <h4 className="ml-4 text-lg px-4">Digital Library</h4>
        </div>
        <div className="flex items-center space-x-4">
          <Link className="text-sm hover:text-gray-400" to="/admin-dashboard">Home</Link>
          <Link className="text-sm hover:text-gray-400" to="/add-book">Add Book</Link>
          <Link className="text-sm hover:text-gray-400" to="/book-records">Book Records</Link>
          <Link className="text-sm hover:text-gray-400" to="/order-records">Order Records</Link>
          <Link className="text-sm hover:text-gray-400" to="/inquiry-details">Inquiry Details</Link>
          <Link className="text-sm hover:text-gray-400" to="/feedback-details">Feedback Details</Link>
          <button onClick={() => navigate('/')} className="bg-red-500 text-white px-4 py-2 rounded">Logout</button>
        </div>
      </nav>

      <div className="flex justify-center items-center h-screen">
        <div className="text-center">
          <h2 className="text-2xl mb-4">Welcome to Admin Dashboard</h2>
          
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
