// components/store/StoreLayout.tsx
import React from "react";
import StoreNavbar from "./StoreNavbar";
import StoreSidebar from "./StoreSidebar";

interface StoreLayoutProps {
  children: React.ReactNode;
}

const StoreLayout: React.FC<StoreLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Navbar */}
      <StoreNavbar />

      <div className="flex">
        {/* Sidebar */}
        <StoreSidebar />

        {/* Main Content */}
        <main className="flex-1 p-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default StoreLayout;