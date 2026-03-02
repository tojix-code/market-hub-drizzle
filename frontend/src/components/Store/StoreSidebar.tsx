// components/store/StoreSidebar.tsx
import React from "react";
import { NavLink } from "react-router-dom";

const StoreSidebar: React.FC = () => {
  const linkStyle =
    "flex items-center gap-3 px-4 py-2 rounded-md text-sm font-medium transition";

  return (
    <aside className="w-64 bg-white border-r min-h-screen p-6">
      
      {/* Store Profile */}
      <div className="flex flex-col items-center mb-8">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold text-xl">
          🛍
        </div>
        <h3 className="mt-3 font-semibold text-gray-700">
          Happy Shop
        </h3>
      </div>

      {/* Navigation */}
      <nav className="space-y-3">

        <NavLink
          to="/store"
          className={({ isActive }) =>
            `${linkStyle} ${
              isActive
                ? "bg-green-100 text-green-600"
                : "text-gray-600 hover:bg-gray-100"
            }`
          }
        >
          🏠 Dashboard
        </NavLink>

        <NavLink
          to="/store/add-product"
          className={({ isActive }) =>
            `${linkStyle} ${
              isActive
                ? "bg-green-100 text-green-600"
                : "text-gray-600 hover:bg-gray-100"
            }`
          }
        >
          ➕ Add Product
        </NavLink>

        <NavLink
          to="/store/manage-product"
          className={({ isActive }) =>
            `${linkStyle} ${
              isActive
                ? "bg-green-100 text-green-600"
                : "text-gray-600 hover:bg-gray-100"
            }`
          }
        >
          📝 Manage Product
        </NavLink>

        <NavLink
          to="/store/orders"
          className={({ isActive }) =>
            `${linkStyle} ${
              isActive
                ? "bg-green-100 text-green-600"
                : "text-gray-600 hover:bg-gray-100"
            }`
          }
        >
          📦 Orders
        </NavLink>

      </nav>
    </aside>
  );
};

export default StoreSidebar;