import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logo from '../images/logo.jpeg';
import { useNavigate, Link } from 'react-router-dom';

const InquiryDetails = () => {
  const [inquiries, setInquiries] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchInquiries = async () => {
        try {
          const response = await axios.get('https://bookstore-backend-v7jm.onrender.com/api/inquiries'); 
          console.log('Response data:', response.data);
          if (Array.isArray(response.data)) {
            setInquiries(response.data);
          } else {
            console.error('Unexpected response data:', response.data);
          }
        } catch (error) {
          console.error('Error fetching inquiries:', error);
        }
      };
      
    fetchInquiries();
  }, []);
  

  return (
    <div className="min-h-screen bg-gray-100">
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

      <div className="container mx-auto mt-8">
        <h2 className="text-2xl font-bold mb-4">Inquiry Details</h2>
        {Array.isArray(inquiries) && inquiries.length > 0 ? (
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2">Name</th>
                <th className="py-2">Email</th>
                <th className="py-2">Message</th>
                <th className="py-2">Received At</th>
              </tr>
            </thead>
            <tbody>
              {inquiries.map(inquiry => (
                <tr key={inquiry._id}>
                  <td className="border px-4 py-2">{inquiry.name}</td>
                  <td className="border px-4 py-2">{inquiry.email}</td>
                  <td className="border px-4 py-2">{inquiry.message}</td>
                  <td className="border px-4 py-2">{new Date(inquiry.createdAt).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No inquiries found.</p>
        )}
      </div>
    </div>
  );
};

export default InquiryDetails;
