import React, { useState, useEffect } from 'react';
import logo from '../images/logo.jpeg';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const FeedbackDetails = () => {
  const navigate = useNavigate();
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const fetchFeedbacks = async () => {
    try {
      const response = await axios.get('https://bookstore-backend-v7jm.onrender.com/api/feedbacks'); // Replace with your actual endpoint
      console.log('Fetched feedbacks:', response.data); // Log the response data
      setFeedbacks(response.data);
    } catch (error) {
      console.error('Error fetching feedbacks:', error);
      setFeedbacks([]); // Initialize feedbacks as empty array on error
    }
  };

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
        <h2 className="text-2xl font-bold mb-4">Feedback Details</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border rounded-lg shadow-md">
            <thead className="bg-gray-800 text-white">
              <tr className="text-left">
                <th className="py-2 px-4">Name</th>
                <th className="py-2 px-4">Email</th>
                <th className="py-2 px-4">Message</th>
                <th className="py-2 px-4">Date</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {Array.isArray(feedbacks) && feedbacks.map((feedback) => (
                <tr key={feedback._id} className="hover:bg-gray-200">
                  <td className="py-2 px-4">{feedback.name}</td>
                  <td className="py-2 px-4">{feedback.email}</td>
                  <td className="py-2 px-4">{feedback.message}</td>
                  <td className="py-2 px-4">{new Date(feedback.createdAt).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FeedbackDetails;
