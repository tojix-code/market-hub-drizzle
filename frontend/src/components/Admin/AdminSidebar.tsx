// components/admin/AdminSidebar.tsx
import React from "react";
import { NavLink } from "react-router-dom";

const AdminSidebar: React.FC = () => {
  const linkStyle =
    "block px-4 py-2 rounded-md text-sm font-medium transition";

  return (
    <aside className="w-64 bg-white shadow-md p-6">
      
      {/* Logo */}
      <h2 className="text-2xl font-bold text-green-600 mb-8">
        marketHub
      </h2>

      {/* Navigation Links */}
      <nav className="space-y-3">
        
        <NavLink
          to="/admin"
          className={({ isActive }) =>
            `${linkStyle} ${
              isActive
                ? "bg-green-100 text-green-600"
                : "text-gray-600 hover:bg-gray-100"
            }`
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/admin/stores"
          className={({ isActive }) =>
            `${linkStyle} ${
              isActive
                ? "bg-green-100 text-green-600"
                : "text-gray-600 hover:bg-gray-100"
            }`
          }
        >
          Stores
        </NavLink>

        <NavLink
          to="/admin/approve"
          className={({ isActive }) =>
            `${linkStyle} ${
              isActive
                ? "bg-green-100 text-green-600"
                : "text-gray-600 hover:bg-gray-100"
            }`
          }
        >
          Approve Stores
        </NavLink>

        <NavLink
          to="/admin/coupons"
          className={({ isActive }) =>
            `${linkStyle} ${
              isActive
                ? "bg-green-100 text-green-600"
                : "text-gray-600 hover:bg-gray-100"
            }`
          }
        >
          Coupons
        </NavLink>

        <NavLink
          to="/admin/users"
          className={({ isActive }) =>
            `${linkStyle} ${
              isActive
                ? "bg-green-100 text-green-600"
                : "text-gray-600 hover:bg-gray-100"
            }`
          }
        >
          Users
        </NavLink>
      </nav>
    </aside>
  );
};

export default AdminSidebar;