import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

import AdminLayout from "./components/admin/AdminLayout";
import StoreLayout from "./components/store/StoreLayout";


function HomePage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />

      <main className="flex-grow">
        <Hero />

        <div className="p-6 grid gap-6 md:grid-cols-3">
          <ProductCard />
          <ProductCard />
          <ProductCard />

          <ProductCard />
          <ProductCard />
          <ProductCard />

          <ProductCard />
          <ProductCard />
          <ProductCard />
          const products = useProducts();
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/admin" element={<AdminLayout />} />
      <Route path="/store" element={<StoreLayout />} />
    </Routes>
  );
}