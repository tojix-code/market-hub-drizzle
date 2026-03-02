// components/admin/AdminNavbar.tsx
import React from "react";

const AdminNavbar: React.FC = () => {
  return (
    <div className="bg-white shadow-sm px-6 py-4 flex justify-between items-center border-b">
      
      {/* Title */}
      <h1 className="text-xl font-semibold text-gray-700">
        Admin Dashboard
      </h1>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        
        {/* Notification Icon */}
        <button className="relative text-gray-600 hover:text-green-600 transition">
          🔔
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1 rounded-full">
            3
          </span>
        </button>

        {/* Profile */}
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-semibold">
            A
          </div>
          <span className="text-sm font-medium text-gray-700">
            Admin
          </span>
        </div>
      </div>
    </div>
  );
};

export default AdminNavbar;