import React from 'react';
import { Link } from 'react-router-dom';

const Dash = () => {
  return (
    <div className="container mx-auto p-6">

      {/* Dashboard Header */}
      <h1 className="text-4xl font-extrabold text-gray-900 mb-8">Dashboard</h1>

      {/* Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Total Orders Card */}
        <div className="bg-white shadow-xl rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-blue-50">
          <div className="p-8">
            <h2 className="text-2xl font-semibold text-gray-800">Total Orders</h2>
            <p className="text-5xl font-bold text-gray-900 mt-4">120</p>
          </div>
        </div>

        {/* Active Partners Card */}
        <div className="bg-white shadow-xl rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-green-50">
          <div className="p-8">
            <h2 className="text-2xl font-semibold text-gray-800">Active Partners</h2>
            <p className="text-5xl font-bold text-gray-900 mt-4">15</p>
          </div>
        </div>

        {/* Pending Assignments Card */}
        <div className="bg-white shadow-xl rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-yellow-50">
          <div className="p-8">
            <h2 className="text-2xl font-semibold text-gray-800">Pending Assignments</h2>
            <p className="text-5xl font-bold text-gray-900 mt-4">8</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dash;
