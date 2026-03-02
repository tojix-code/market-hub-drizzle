// components/store/StoreNavbar.tsx
import React from "react";

const StoreNavbar: React.FC = () => {
  return (
    <header className="bg-white border-b px-8 py-4 flex items-center">
      <h1 className="text-2xl font-bold">
        <span className="text-green-600">market</span>
        <span className="text-gray-800">Hub</span>
        <span className="ml-2 bg-green-600 text-white text-sm px-3 py-1 rounded-full">
          Store
        </span>
      </h1>
    </header>
  );
};

export default StoreNavbar;