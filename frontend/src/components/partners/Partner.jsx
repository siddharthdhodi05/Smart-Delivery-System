import React from "react";
import { useNavigate } from "react-router-dom";

const partners = [
  { id: 1, name: "John Doe", email: "john@example.com", phone: "123-456-7890" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", phone: "987-654-3210" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com", phone: "456-789-0123" },
];


const Partner = () => {
  const navigate = useNavigate()
  return (
    <div className="container mx-auto p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Partner Management</h1>
        <button onClick={()=>navigate("/addpart")} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all">
          Add Partner
        </button>
      </div>

      {/* Partners List */}
      <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Name</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Email</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Phone</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-800">
            {partners.map((partner) => (
              <tr
                key={partner.id}
                className="hover:bg-gray-50 transition-all border-b last:border-none"
              >
                <td className="px-4 py-3">{partner.name}</td>
                <td className="px-4 py-3">{partner.email}</td>
                <td className="px-4 py-3">{partner.phone}</td>
                <td className="px-4 py-3">
                  <button className="text-blue-600 hover:underline mr-2">Edit</button>
                  <button className="text-red-600 hover:underline">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Partner;
