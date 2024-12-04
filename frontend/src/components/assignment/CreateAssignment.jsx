import React, { useState } from "react";

const CreateAssignment = () => {
  const [formData, setFormData] = useState({
    assignmentId: "",
    orderId: "",
    partnerId: "",
    status: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Assignment Data Submitted:", formData);
    // Add backend API call logic here
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Create Assignment
        </h1>
        <form onSubmit={handleSubmit}>
          {/* Assignment ID */}
          <div className="mb-4">
            <label
              htmlFor="assignmentId"
              className="block text-gray-700 font-medium mb-2"
            >
              Assignment ID
            </label>
            <input
              type="text"
              id="assignmentId"
              name="assignmentId"
              value={formData.assignmentId}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Assignment ID"
              required
            />
          </div>

          {/* Order ID */}
          <div className="mb-4">
            <label
              htmlFor="orderId"
              className="block text-gray-700 font-medium mb-2"
            >
              Order ID
            </label>
            <input
              type="text"
              id="orderId"
              name="orderId"
              value={formData.orderId}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Order ID"
              required
            />
          </div>

          {/* Partner ID */}
          <div className="mb-4">
            <label
              htmlFor="partnerId"
              className="block text-gray-700 font-medium mb-2"
            >
              Partner ID
            </label>
            <input
              type="text"
              id="partnerId"
              name="partnerId"
              value={formData.partnerId}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Partner ID"
              required
            />
          </div>

          {/* Status */}
          <div className="mb-6">
            <label
              htmlFor="status"
              className="block text-gray-700 font-medium mb-2"
            >
              Status
            </label>
            <select
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select Status</option>
              <option value="Pending">Pending</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Create Assignment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateAssignment;
