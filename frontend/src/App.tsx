import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

import AdminLayout from "./components/Admin/AdminLayout";
import StoreLayout from "./components/Store/StoreLayout";

import CategoriesMarquee from "./components/CategoriesMarquee";


function HomePage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />

      <main className="flex-grow">
        <Hero />

        <CategoriesMarquee /> 

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

      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<div>Admin Dashboard</div>} />
      </Route>

      <Route path="/store" element={<StoreLayout />}>
        <Route index element={<div>Store Dashboard</div>} />
      </Route>
    </Routes>
  );
}