import React from "react";

const Deals = () => {
  const deals = [
    {
      id: 1,
      name: "Wireless Bluetooth Headphones",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
      price: 2499,
      oldPrice: 4999,
      discount: "50% OFF",
      rating: "4.5",
    },
    {
      id: 2,
      name: "Smart Watch Series 8",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
      price: 3999,
      oldPrice: 7999,
      discount: "50% OFF",
      rating: "4.4",
    },
    {
      id: 3,
      name: "Premium Running Shoes",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
      price: 2999,
      oldPrice: 5999,
      discount: "50% OFF",
      rating: "4.6",
    },
    {
      id: 4,
      name: "Modern Backpack",
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
      price: 1799,
      oldPrice: 3499,
      discount: "49% OFF",
      rating: "4.3",
    },
    {
      id: 5,
      name: "Gaming Keyboard",
      image:
        "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500",
      price: 2299,
      oldPrice: 4499,
      discount: "49% OFF",
      rating: "4.7",
    },
    {
      id: 6,
      name: "Men's Casual Jacket",
      image:
        "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500",
      price: 3499,
      oldPrice: 6999,
      discount: "50% OFF",
      rating: "4.5",
    },
    {
      id: 7,
      name: "Wireless Gaming Mouse",
      image:
        "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500",
      price: 1599,
      oldPrice: 2999,
      discount: "47% OFF",
      rating: "4.4",
    },
    {
      id: 8,
      name: "Portable Bluetooth Speaker",
      image:
        "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500",
      price: 1999,
      oldPrice: 3999,
      discount: "50% OFF",
      rating: "4.6",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">




      <section className="bg-[#131921] text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">

          <p className="text-orange-400 font-semibold uppercase tracking-wide">
            Limited Time Offers
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mt-2">
            Today's Deals
          </h1>

          <p className="text-gray-300 mt-4 max-w-2xl">
            Save big on your favorite products. Discover amazing deals
            and limited-time discounts before they're gone.
          </p>

          <button className="mt-6 bg-[#ff9900] hover:bg-[#e88b00] text-black font-bold px-6 py-3 rounded-md transition">
            Shop All Deals
          </button>

        </div>
      </section>





      <section className="max-w-7xl mx-auto px-6 py-8">

        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">

          <div className="flex flex-col md:flex-row items-center justify-between gap-6">

            <div>
              <h2 className="text-2xl font-bold text-gray-800">
                🔥 Deal of the Day
              </h2>

              <p className="text-gray-500 mt-2">
                Grab these offers before they're gone!
              </p>
            </div>

            <div className="flex items-center gap-3">

              <div className="bg-gray-900 text-white px-4 py-3 rounded-md text-center">
                <span className="block text-xl font-bold">08</span>
                <span className="text-xs text-gray-300">Hours</span>
              </div>

              <span className="text-xl font-bold">:</span>

              <div className="bg-gray-900 text-white px-4 py-3 rounded-md text-center">
                <span className="block text-xl font-bold">45</span>
                <span className="text-xs text-gray-300">Minutes</span>
              </div>

              <span className="text-xl font-bold">:</span>

              <div className="bg-gray-900 text-white px-4 py-3 rounded-md text-center">
                <span className="block text-xl font-bold">32</span>
                <span className="text-xs text-gray-300">Seconds</span>
              </div>

            </div>

          </div>

        </div>

      </section>





      <section className="max-w-7xl mx-auto px-6 pb-12">

        <div className="flex items-center justify-between mb-6">

          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              All Deals
            </h2>

            <p className="text-gray-500 text-sm mt-1">
              Explore our best offers
            </p>
          </div>

          <select className="border border-gray-300 bg-white px-4 py-2 rounded-md text-sm outline-none">
            <option>Sort by: Featured</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Discount</option>
          </select>

        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {deals.map((deal) => (

            <div
              key={deal.id}
              className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-xl transition duration-300 group"
            >



              <div className="relative bg-gray-50 h-64 flex items-center justify-center overflow-hidden">

                <img
                  src={deal.image}
                  alt={deal.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />

                {/* DISCOUNT */}
                <span className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded">
                  {deal.discount}
                </span>

              </div>


              {/* CONTENT */}
              <div className="p-5">

                <h3 className="font-semibold text-gray-800 text-lg line-clamp-2 min-h-[56px]">
                  {deal.name}
                </h3>


                {/* RATING */}
                <div className="flex items-center gap-2 mt-3">

                  <div className="text-yellow-500 text-sm">
                    ★★★★★
                  </div>

                  <span className="text-gray-500 text-sm">
                    {deal.rating}
                  </span>

                </div>


                {/* PRICE */}
                <div className="flex items-center gap-3 mt-4">

                  <span className="text-2xl font-bold text-gray-900">
                    Rs. {deal.price.toLocaleString()}
                  </span>

                </div>

                <div className="text-gray-400 line-through text-sm mt-1">
                  Rs. {deal.oldPrice.toLocaleString()}
                </div>


                {/* BUTTON */}
                <button className="w-full mt-5 bg-[#ff9900] hover:bg-[#e88b00] text-black font-semibold py-2.5 rounded-md transition">
                  Add to Cart
                </button>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* ================= BOTTOM BANNER ================= */}
      <section className="bg-[#232f3e] py-12 px-6">

        <div className="max-w-7xl mx-auto text-center text-white">

          <h2 className="text-3xl font-bold">
            Don't Miss Our Best Deals!
          </h2>

          <p className="text-gray-300 mt-3">
            New offers are added every day. Check back regularly
            for more amazing discounts.
          </p>

          <button className="mt-6 bg-[#ff9900] hover:bg-[#e88b00] text-black font-bold px-8 py-3 rounded-md transition">
            Start Shopping
          </button>

        </div>

      </section>

    </div>
  );
};

export default Deals;