// components/store/StoreLayout.tsx

import { Outlet } from "react-router-dom";
import StoreNavbar from "./StoreNavbar";
import StoreSidebar from "./StoreSidebar";

const StoreLayout = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Navbar */}
      <StoreNavbar />

      <div className="flex">
        {/* Sidebar */}
        <StoreSidebar />

        {/* Main Content */}
        <main className="flex-1 p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default StoreLayout;