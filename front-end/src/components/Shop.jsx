import React, { useState } from "react";

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("Featured");

  const products = [
    {
      id: 1,
      name: "Wireless Bluetooth Headphones",
      category: "Electronics",
      price: 2499,
      oldPrice: 3999,
      rating: 4.5,
      reviews: 245,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600",
    },
    {
      id: 2,
      name: "Smart Watch Series 8",
      category: "Electronics",
      price: 3999,
      oldPrice: 6999,
      rating: 4.4,
      reviews: 189,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600",
    },
    {
      id: 3,
      name: "Premium Running Shoes",
      category: "Fashion",
      price: 2999,
      oldPrice: 5499,
      rating: 4.6,
      reviews: 321,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
    },
    {
      id: 4,
      name: "Modern Travel Backpack",
      category: "Fashion",
      price: 1799,
      oldPrice: 2999,
      rating: 4.3,
      reviews: 156,
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600",
    },
    {
      id: 5,
      name: "Gaming Keyboard",
      category: "Computers",
      price: 2299,
      oldPrice: 3999,
      rating: 4.7,
      reviews: 412,
      image:
        "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600",
    },
    {
      id: 6,
      name: "Wireless Gaming Mouse",
      category: "Computers",
      price: 1599,
      oldPrice: 2799,
      rating: 4.5,
      reviews: 278,
      image:
        "https://images.unsplash.com/photo-1527814050087-3793815479db?w=600",
    },
    {
      id: 7,
      name: "Men's Casual Jacket",
      category: "Fashion",
      price: 3499,
      oldPrice: 5999,
      rating: 4.4,
      reviews: 198,
      image:
        "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600",
    },
    {
      id: 8,
      name: "Bluetooth Portable Speaker",
      category: "Electronics",
      price: 1999,
      oldPrice: 3499,
      rating: 4.6,
      reviews: 367,
      image:
        "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600",
    },
  ];

  const categories = [
    "All",
    "Electronics",
    "Fashion",
    "Computers",
  ];

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter(
          (product) => product.category === selectedCategory
        );

  return (
    <div className="min-h-screen bg-gray-100">

      {/* ================= SHOP HEADER ================= */}
      <section className="bg-[#131921] text-white py-10 px-6">
        <div className="max-w-7xl mx-auto">

          <p className="text-orange-400 font-semibold uppercase tracking-wide">
            Amazon Store
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mt-2">
            Shop
          </h1>

          <p className="text-gray-300 mt-3 max-w-2xl">
            Discover amazing products at great prices. Shop electronics,
            fashion, computers and more.
          </p>

        </div>
      </section>


      {/* ================= MAIN CONTENT ================= */}
      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="flex flex-col lg:flex-row gap-8">

          {/* ================= SIDEBAR ================= */}
          <aside className="w-full lg:w-64">

            <div className="bg-white border border-gray-200 rounded-lg p-5 sticky top-5">

              <h2 className="text-xl font-bold text-gray-800 mb-5">
                Categories
              </h2>

              <div className="space-y-2">

                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`w-full text-left px-4 py-3 rounded-md transition ${
                      selectedCategory === category
                        ? "bg-[#ff9900] text-black font-semibold"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    {category}
                  </button>
                ))}

              </div>


              {/* PRICE FILTER */}
              <div className="border-t border-gray-200 mt-6 pt-6">

                <h3 className="font-bold text-gray-800 mb-4">
                  Price
                </h3>

                <label className="flex items-center gap-2 mb-3 text-gray-600">
                  <input type="checkbox" />
                  Under Rs. 2,000
                </label>

                <label className="flex items-center gap-2 mb-3 text-gray-600">
                  <input type="checkbox" />
                  Rs. 2,000 - 4,000
                </label>

                <label className="flex items-center gap-2 text-gray-600">
                  <input type="checkbox" />
                  Rs. 4,000 - 6,000
                </label>

                <label className="flex items-center gap-2 text-gray-600">
                  <input type="checkbox" />
                  Above Rs. 6,000
                </label>

              </div>


              {/* CUSTOMER RATING */}
              <div className="border-t border-gray-200 mt-6 pt-6">

                <h3 className="font-bold text-gray-800 mb-4">
                  Customer Rating
                </h3>

                <button className="block text-yellow-500 mb-2">
                  ★★★★★
                </button>

                <button className="block text-yellow-500 mb-2">
                  ★★★★☆ & Up
                </button>

                <button className="block text-yellow-500">
                  ★★★☆☆ & Up
                </button>

              </div>

            </div>

          </aside>


          {/* ================= PRODUCTS ================= */}
          <main className="flex-1">

            {/* TOP BAR */}
            <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6">

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">

                <div>
                  <h2 className="text-xl font-bold text-gray-800">
                    All Products
                  </h2>

                  <p className="text-sm text-gray-500 mt-1">
                    {filteredProducts.length} products found
                  </p>
                </div>


                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-gray-300 rounded-md px-4 py-2 outline-none text-sm"
                >
                  <option>Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Customer Rating</option>
                </select>

              </div>

            </div>


            {/* PRODUCT GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">

              {filteredProducts.map((product) => (

                <div
                  key={product.id}
                  className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-xl transition duration-300 group"
                >

                  {/* PRODUCT IMAGE */}
                  <div className="relative h-64 bg-gray-50 overflow-hidden">

                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />

                    {/* DISCOUNT */}
                    <span className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded">
                      Deal
                    </span>

                  </div>


                  {/* PRODUCT DETAILS */}
                  <div className="p-5">

                    <p className="text-xs text-gray-500 uppercase">
                      {product.category}
                    </p>

                    <h3 className="font-semibold text-gray-800 text-lg mt-2 min-h-[56px]">
                      {product.name}
                    </h3>


                    {/* RATING */}
                    <div className="flex items-center gap-2 mt-3">

                      <span className="text-yellow-500">
                        ★★★★★
                      </span>

                      <span className="text-sm text-gray-500">
                        {product.rating}
                      </span>

                      <span className="text-sm text-blue-600">
                        ({product.reviews})
                      </span>

                    </div>


                    {/* PRICE */}
                    <div className="mt-4">

                      <span className="text-2xl font-bold text-gray-900">
                        Rs. {product.price.toLocaleString()}
                      </span>

                      <span className="ml-3 text-sm text-gray-400 line-through">
                        Rs. {product.oldPrice.toLocaleString()}
                      </span>

                    </div>


                    {/* FREE DELIVERY */}
                    <p className="text-green-600 text-sm font-medium mt-2">
                      ✓ Free Delivery
                    </p>


                    {/* BUTTONS */}
                    <div className="flex gap-2 mt-5">

                      <button className="flex-1 bg-[#ff9900] hover:bg-[#e88b00] text-black font-semibold py-2.5 rounded-md transition">
                        Add to Cart
                      </button>

                      <button className="px-4 border border-gray-300 rounded-md hover:bg-gray-100 transition">
                        ♡
                      </button>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          </main>

        </div>

      </div>


      {/* ================= BOTTOM BANNER ================= */}
      <section className="bg-[#232f3e] text-white py-12 px-6">

        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-3xl font-bold">
            Shop With Confidence
          </h2>

          <p className="text-gray-300 mt-3">
            Great prices, quality products and reliable delivery.
          </p>

          <button className="mt-6 bg-[#ff9900] hover:bg-[#e88b00] text-black font-bold px-8 py-3 rounded-md transition">
            Explore More Products
          </button>

        </div>

      </section>

    </div>
  );
};

export default Shop;