import { ShoppingCart, Search } from "lucide-react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Navbar() {

  const { cartCount } = useContext(CartContext);

  return (
    <nav className="bg-white px-6 py-3 flex items-center justify-between shadow-sm">
      
      <div className="text-2xl font-bold flex items-center gap-1">
        <span className="text-green-500">Market</span>
        <span className="text-gray-800">Hub</span>
        <span className="text-green-500">.</span>
      </div>

      <div className="hidden lg:flex items-center bg-gray-100 rounded-full px-4 py-2 w-80">
        <Search size={18} className="text-gray-500" />
        <input
          placeholder="Search products"
          className="bg-transparent outline-none ml-2 w-full text-sm"
        />
      </div>

      <div className="hidden md:flex gap-8 text-gray-700 font-medium ml-50">
        <button className="hover:text-indigo-600">Home</button>
        <button className="hover:text-indigo-600">Shop</button>
        <button className="hover:text-indigo-600">Vendor</button>
        <button className="hover:text-indigo-600">About</button>
        <button className="hover:text-indigo-600">Contact</button>
      </div>

      <div className="flex items-center gap-5">

        <button className="flex items-center gap-1 text-gray-700 hover:text-indigo-600">
          <ShoppingCart size={20} />
          <span className="hidden sm:block">
            Cart ({cartCount})
          </span>
        </button>

        <button className="bg-indigo-600 text-white px-5 py-2 rounded-full hover:bg-indigo-700">
          Login
        </button>

      </div>
    </nav>
  );
}