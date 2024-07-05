import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import AdminDashboard from './components/AdminDashboard';
import CustomerDashboard from './components/CustomerDashboard';
import AddBook from './components/AddBook';
import BookRecords from './components/BookRecords';
import Wishlist from './components/Wishlist';
import OrderRecords from './components/OrderRecords';
import Feedback from './components/Feedback';
import InquiryDetails from './components/InquiryDetails';
import FeedbackDetails from './components/FeedbackDetails';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/customer-dashboard" element={<CustomerDashboard />} />
        <Route path="/add-book" element={<AddBook />} />
        <Route path="/book-records" element={<BookRecords />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/order-records" element={<OrderRecords />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/inquiry-details" element={<InquiryDetails />} />
        <Route path="/feedback-details" element={<FeedbackDetails />} />
      </Routes>
    </div>
  );
}

export default App;
