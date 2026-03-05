import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function ProductCard() {

    const { addToCart, cartCount } = useContext(CartContext);

    return(
        <div className="bg-white rounded-xl shadow p-4 hover:shadow-lg transition">

            <img 
            src="https://via.placeholder.com/200"
            className="rounded-lg w-full h-40 object-cover" />

            <h2 className="mt-3 font-semibold">Product Name</h2>

            <p className="mt-3">Description</p>

            <p className="text-gray-500">₹999</p>

            <button 
            onClick={addToCart}
            className="mt-3 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700">
                Add to Cart
            </button>

            <p className="mt-2 text-sm text-gray-600">
                Added to cart: {cartCount}
            </p>

        </div>
    )
}