export default function ProductCard() {

    return(
        <div className="bg-white rounded-xl shadow p-4 hover:shadow-lg transition">
            <img 
            src="https://via.placeholder.com/200"
            className="rounded-lg w-full h-40 object-cover" />

            <h2 className="mt-3 font-semibold"> Product Name </h2>
            <p className="mt-3 font-stretch-50%"> description </p>
            <p className="text-gray-500">₹999</p>

            <button className="mt-3 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700">
                Add to Cart
            </button>

        </div>
    )
}