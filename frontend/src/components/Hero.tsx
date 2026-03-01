import heroImg1 from "../assets/hero_product_img1.png";
import heroImg2 from "../assets/hero_product_img2.png";


export default function Hero() {
  return (
    <section className="bg-gray-100 py-10 px-6">
      <div className="max-w-7xl mx-auto grid gap-6 lg:grid-cols-3">

        {/* LEFT MAIN HERO */}
        <div className="lg:col-span-2 bg-[#a7e3c3] rounded-3xl p-10 relative overflow-hidden flex items-center">

          {/* CONTENT */}
          <div className="z-10 max-w-lg">

            {/* Badge */}
            <div className="flex items-center gap-3 bg-green-200 text-green-800 px-4 py-2 rounded-full w-fit text-sm font-medium mb-6">
              <span className="bg-green-500 text-white px-2 py-0.5 rounded-full text-xs">
                NEWS
              </span>
              Free Shipping on Orders Above $50!
            </div>

            {/* Heading */}
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
              Gadgets you'll love.
              <br />
              <span className="text-green-600">Prices you'll trust.</span>
            </h1>

            {/* Price */}
            <div className="mt-8">
              <p className="text-gray-700">Starts from</p>
              <h2 className="text-4xl font-bold text-gray-900">€4.90</h2>
            </div>

            {/* Button */}
            <button className="mt-8 bg-[#1f2a44] text-white px-8 py-3 rounded-xl font-medium hover:bg-[#141c2f] transition">
              LEARN MORE
            </button>
          </div>

          {/* IMAGE */}
          <img
            src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519"
            alt="hero"
            className="absolute right-0 bottom-0 h-full object-contain hidden md:block"
          />
        </div>


        {/* RIGHT SIDE */}
        <div className="flex flex-col gap-6">

          {/* TOP CARD */}
          <div className="bg-[#efc89a] rounded-3xl p-8 flex justify-between items-center relative overflow-hidden">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">
                Best products
              </h2>
              <p className="text-gray-700 mt-2">
                View more →
              </p>
            </div>

            <img
              src={heroImg1}
              alt="earbuds"
              className="w-28 object-contain"
            />
          </div>


          {/* BOTTOM CARD */}
          <div className="bg-[#9fb5d1] rounded-3xl p-8 flex justify-between items-center relative overflow-hidden">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">
                20% discounts
              </h2>
              <p className="text-gray-700 mt-2">
                View more →
              </p>
            </div>

            <img
              src={heroImg2}
              alt="watch"
              className="w-28 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}