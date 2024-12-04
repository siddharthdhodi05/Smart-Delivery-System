import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  // Assuming you will use Redux or context to manage authentication state
  const isAuthenticated = true; // Replace with your authentication logic

  const routes = [
    { name: 'Dashboard', path: '/' },
    { name: 'Partners', path: '/partner' },
    { name: 'Orders', path: '/order' },
    { name: 'Assignments', path: '/assignment' },
  ];

  // Logout handler
  const handleLogout = () => {
    // Perform logout logic, such as clearing tokens or calling an API
    // After logout, redirect to login page
    //navigate('/login');
  };

  return (
    <nav className="flex items-center justify-between p-4 bg-gray-800">
      {/* Heading */}
      <div className="text-white text-2xl font-bold">
        Smart Deliver System
      </div>

      {/* Navigation links */}
      <div className="flex space-x-6">
        {isAuthenticated ? (
          <>
            {routes.map((route) => (
              <Link
                key={route.path}
                to={route.path}
                className={`px-4 py-2 rounded-md text-sm font-medium text-gray-300 ${
                  window.location.pathname === route.path
                    ? 'bg-blue-600 text-white'
                    : 'hover:bg-gray-700 hover:text-white'
                }`}
              >
                {route.name}
              </Link>
            ))}
            <button
              onClick={handleLogout}
              className="px-4 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="px-4 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="px-4 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
