import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import logo from '../images/logo.jpeg';

const OrderRecords = () => {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const navigate = useNavigate();
  const ordersPerPage = 8;

  useEffect(() => {
    const fetchOrders = async (page) => {
      try {
        const response = await axios.get(`https://bookstore-backend-v7jm.onrender.com/api/orders?page=${page}&limit=${ordersPerPage}`);
        setOrders(response.data.orders);
        setTotalPages(response.data.totalPages);
      } catch (err) {
        setError(err.message || 'Error fetching orders');
      }
    };

    fetchOrders(currentPage);
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderPagination = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }

    return (
      <div className="flex justify-center mt-4">
        {pageNumbers.map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`mx-1 px-3 py-1 border rounded ${currentPage === page ? 'bg-indigo-500 text-white' : 'bg-white text-indigo-500'}`}
          >
            {page}
          </button>
        ))}
      </div>
    );
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
          <button onClick={() => navigate('/')} className="bg-red-500 text-white px-4 py-2 rounded">Logout</button>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
          <div className="p-6 bg-white border-b border-gray-200">
            <h1 className="text-2xl font-semibold mb-4">Orders</h1>

            {error && <p className="text-red-500">{error}</p>}

            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="text-left py-2 px-4">Customer Name</th>
                    <th className="text-left py-2 px-4">Customer Phone</th>
                    <th className="text-left py-2 px-4">Customer Email</th>
                    <th className="text-left py-2 px-4">Book Name</th>
                    <th className="text-left py-2 px-4">Price</th>
                    <th className="text-left py-2 px-4">Copies Purchased</th>
                    <th className="text-left py-2 px-4">Order Date</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map(order => (
                    <tr key={order._id} className="border-b border-gray-200">
                      <td className="py-2 px-4">{order.customer}</td>
                      <td className="py-2 px-4">{order.customerPhone}</td>
                      <td className="py-2 px-4">{order.customerEmail}</td>
                      <td className="py-2 px-4">{order.bookName}</td>
                      <td className="py-2 px-4">{order.price}</td>
                      <td className="py-2 px-4">{order.copiesPurchased}</td>
                      <td className="py-2 px-4">{new Date(order.orderDate).toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {renderPagination()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderRecords;
