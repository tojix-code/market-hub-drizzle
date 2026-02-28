export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid gap-8 md:grid-cols-4">

        {/* Company */}
        <div>
          <h2 className="text-white text-lg font-bold mb-3">Market Hub</h2>
          <p className="text-sm">
            Multi-vendor marketplace where customers can explore products from
            different stores and vendors.
          </p>
        </div>

        {/* Customer Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Customer</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Browse Products</li>
            <li className="hover:text-white cursor-pointer">Stores</li>
            <li className="hover:text-white cursor-pointer">Orders</li>
            <li className="hover:text-white cursor-pointer">Wishlist</li>
          </ul>
        </div>

        {/* Vendor Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Vendors</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Become a Seller</li>
            <li className="hover:text-white cursor-pointer">Vendor Dashboard</li>
            <li className="hover:text-white cursor-pointer">Add Products</li>
            <li className="hover:text-white cursor-pointer">Sales Reports</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-white font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-3">
            <button className="bg-indigo-600 px-3 py-2 rounded text-white">
              Facebook
            </button>
            <button className="bg-pink-600 px-3 py-2 rounded text-white">
              Instagram
            </button>
            <button className="bg-blue-500 px-3 py-2 rounded text-white">
              Twitter
            </button>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 text-center py-4 text-sm">
        © {new Date().getFullYear()} Market Hub. All rights reserved.
      </div>
    </footer>
  );
}