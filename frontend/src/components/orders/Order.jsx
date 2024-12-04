import React from "react";
import { useNavigate } from "react-router-dom";

const orders = [
  {
    id: "ORD001",
    customer: "Alice Johnson",
    status: "Completed",
    date: "2024-12-01",
  },
  {
    id: "ORD002",
    customer: "David Brown",
    status: "Pending",
    date: "2024-12-02",
  },
  {
    id: "ORD003",
    customer: "Michael Green",
    status: "In Progress",
    date: "2024-12-03",
  },
];

const Order = () => {
  const navigate = useNavigate()
  return (
    <div className="container mx-auto p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Order Management</h1>
        <button onClick={()=>navigate("/addOrder")} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all">
          Add Order
        </button>
      </div>

      {/* Orders List */}
      <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                Order ID
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                Customer
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                Status
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                Date
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-800">
            {orders.map((order) => (
              <tr
                key={order.id}
                className="hover:bg-gray-50 transition-all border-b last:border-none"
              >
                <td className="px-4 py-3">{order.id}</td>
                <td className="px-4 py-3">{order.customer}</td>
                <td className="px-4 py-3">
                  <span
                    className={`px-2 py-1 rounded-lg text-xs font-semibold ${
                      order.status === "Completed"
                        ? "bg-green-100 text-green-800"
                        : order.status === "Pending"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="px-4 py-3">{order.date}</td>
                <td className="px-4 py-3">
                  <button className="text-blue-600 hover:underline mr-2">
                    Edit
                  </button>
                  <button className="text-red-600 hover:underline">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Order;
