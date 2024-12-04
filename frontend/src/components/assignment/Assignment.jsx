import React from "react";
import { useNavigate } from "react-router-dom";

const assignments = [
  {
    id: "ASM001",
    orderId: "ORD001",
    partnerId: "PRT001",
    status: "Completed",
  },
  {
    id: "ASM002",
    orderId: "ORD002",
    partnerId: "PRT002",
    status: "Pending",
  },
  {
    id: "ASM003",
    orderId: "ORD003",
    partnerId: "PRT003",
    status: "In Progress",
  },
];

const Assignment = () => {
  const navigate = useNavigate();
  return (
    <div className="container mx-auto p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Assignment Management</h1>
        <button onClick={()=>navigate("/createAssign")} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all">
          Add Assignment
        </button>
      </div>

      {/* Assignments List */}
      <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                Assignment ID
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                Order ID
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                Partner ID
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                Status
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-800">
            {assignments.map((assignment) => (
              <tr
                key={assignment.id}
                className="hover:bg-gray-50 transition-all border-b last:border-none"
              >
                <td className="px-4 py-3">{assignment.id}</td>
                <td className="px-4 py-3">{assignment.orderId}</td>
                <td className="px-4 py-3">{assignment.partnerId}</td>
                <td className="px-4 py-3">
                  <span
                    className={`px-2 py-1 rounded-lg text-xs font-semibold ${
                      assignment.status === "Completed"
                        ? "bg-green-100 text-green-800"
                        : assignment.status === "Pending"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    {assignment.status}
                  </span>
                </td>
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

export default Assignment;
