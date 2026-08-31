import React, { useEffect, useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaStar,
  FaShoppingCart,
  FaBolt,
} from "react-icons/fa";

import api from "../axios";



const banners = [
  {
    title: "Mega Electronics Sale",
    subtitle: "Up to 50% OFF",
    image:
      "https://images.unsplash.com/photo-1607082349566-187342175e2f?w=1400",
  },
  {
    title: "Latest Smartphones",
    subtitle: "Shop the newest collection",
    image:
      "https://images.unsplash.com/photo-1607083206968-13611e3d76db?w=1400",
  },
  {
    title: "Upgrade Your Setup",
    subtitle: "Best laptops & accessories",
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1400",
  },
];

const secondBanners = [
  {
    title: "Fashion Sale",
    subtitle: "Trendy styles at amazing prices",
    image:
      "https://images.unsplash.com/photo-1445205170230-053b83016050?w=1400",
  },
  {
    title: "Gaming Zone",
    subtitle: "Level up your gaming experience",
    image:
      "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=1400",
  },
  {
    title: "Home & Kitchen",
    subtitle: "Everything for your home",
    image:
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=1400",
  },
];

// ======================================================
// CATEGORIES
// ======================================================

const categories = [
  "Mobiles",
  "Laptops",
  "Electronics",
  "Fashion",
  "Gaming",
  "TVs",
  "Cameras",
  "Furniture",
  "Kitchen",
  "Sports",
];

// ======================================================
// PRODUCT CARD
// ======================================================

const ProductCard = ({ product, onAddToCart }) => {
  const productId = product._id || product.id;

  const title =
    product.title ||
    product.name ||
    "Product";

  const price = Number(product.price || 0);

  const oldPrice = Number(
    product.oldPrice ||
    product.originalPrice ||
    price
  );

  const rating = Number(product.rating || 4.5);

  const category =
    product.category ||
    "General";

  const image =
    product.image ||
    product.imageUrl ||
    product.images?.[0] ||
    "https://via.placeholder.com/500";

  return (
    <div className="min-w-[230px] max-w-[230px] bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl transition duration-300 group">

      {/* IMAGE */}

      <div className="h-52 bg-gray-100 overflow-hidden">

        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
          onError={(e) => {
            e.target.src =
              "https://via.placeholder.com/500";
          }}
        />

      </div>

      {/* CONTENT */}

      <div className="p-4">

        <p className="text-xs text-gray-500 mb-1">
          {category}
        </p>

        <h3 className="font-semibold text-gray-800 line-clamp-2 h-12">
          {title}
        </h3>

        {/* RATING */}

        <div className="flex items-center gap-1 mt-2">

          <div className="flex text-yellow-400 text-sm">

            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar key={star} />
            ))}

          </div>

          <span className="text-sm text-gray-500">
            {rating}
          </span>

        </div>

        {/* PRICE */}

        <div className="flex items-center gap-2 mt-3">

          <span className="text-xl font-bold text-gray-900">
            Rs. {price.toLocaleString()}
          </span>

        </div>

        {oldPrice > price && (
          <span className="text-sm text-gray-400 line-through">
            Rs. {oldPrice.toLocaleString()}
          </span>
        )}

        {/* CART BUTTON */}

        <button
          onClick={() => onAddToCart(productId)}
          className="w-full mt-4 bg-yellow-400 hover:bg-yellow-500 py-2.5 rounded-lg font-semibold flex items-center justify-center gap-2 transition"
        >

          <FaShoppingCart />

          Add to Cart

        </button>

      </div>

    </div>
  );
};

// ======================================================
// HOME
// ======================================================

const Home = () => {

  // ====================================================
  // STATES
  // ====================================================

  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  const [bannerIndex, setBannerIndex] =
    useState(0);

  const [secondBannerIndex, setSecondBannerIndex] =
    useState(0);

  // ====================================================
  // FETCH PRODUCTS
  // ====================================================

  useEffect(() => {

    const fetchProducts = async () => {

      try {

        setLoading(true);

        setError("");

        console.log(
          "Fetching products..."
        );

        const response =
          await api.get("/products");

        console.log(
          "PRODUCT API RESPONSE:",
          response.data
        );

        // ----------------------------------------------
        // HANDLE DIFFERENT BACKEND RESPONSE FORMATS
        // ----------------------------------------------

        let productData = [];

        if (Array.isArray(response.data)) {

          productData =
            response.data;

        } else if (
          Array.isArray(
            response.data.products
          )
        ) {

          productData =
            response.data.products;

        } else if (
          Array.isArray(
            response.data.data
          )
        ) {

          productData =
            response.data.data;

        }

        setProducts(productData);

      } catch (err) {

        console.error(
          "PRODUCT API ERROR:",
          err
        );

        if (err.response) {

          console.error(
            "STATUS:",
            err.response.status
          );

          console.error(
            "DATA:",
            err.response.data
          );

        }

        setError(
          "Products are not loading. Please check your backend API."
        );

      } finally {

        setLoading(false);

      }

    };

    fetchProducts();

  }, []);

  // ====================================================
  // BANNER FUNCTIONS
  // ====================================================

  const nextBanner = () => {

    setBannerIndex(
      (prev) =>
        (prev + 1) %
        banners.length
    );

  };

  const prevBanner = () => {

    setBannerIndex(
      (prev) =>
        (prev - 1 + banners.length) %
        banners.length
    );

  };

  const nextSecondBanner = () => {

    setSecondBannerIndex(
      (prev) =>
        (prev + 1) %
        secondBanners.length
    );

  };

  const prevSecondBanner = () => {

    setSecondBannerIndex(
      (prev) =>
        (prev - 1 + secondBanners.length) %
        secondBanners.length
    );

  };

  // ====================================================
  // PRODUCT SLIDER
  // ====================================================

  const scrollProducts = (
    id,
    direction
  ) => {

    const container =
      document.getElementById(id);

    if (container) {

      container.scrollBy({

        left:
          direction === "right"
            ? 700
            : -700,

        behavior: "smooth",

      });

    }

  };



const addToCart = async (productId) => {
  try {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Please login first.");
      return;
    }

    const response = await api.post(
      "/cart",              // ✅ correct path
      {
        productId,
        quantity: 1,
      }
    );

    alert(
      response.data?.message ||
      "Product added to cart successfully!"
    );
  } catch (error) {
    console.error("CART ERROR:", error.response?.data || error.message);

    alert(
      error.response?.data?.message ||
      "Unable to add product to cart."
    );
  }
};



  if (loading) {

    return (

      <main className="min-h-screen bg-gray-100 flex items-center justify-center">

        <div className="text-center">

          <div className="w-12 h-12 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>

          <h2 className="text-xl font-bold text-gray-700">

            Loading Products...

          </h2>

          <p className="text-gray-500 mt-2">

            Please wait...

          </p>

        </div>

      </main>

    );

  }


  if (error) {

    return (

      <main className="min-h-screen bg-gray-100 flex items-center justify-center px-5">

        <div className="bg-white rounded-xl shadow-lg p-8 text-center max-w-md">

          <h2 className="text-2xl font-bold text-red-500 mb-3">

            Products Not Loading

          </h2>

          <p className="text-gray-600">

            {error}

          </p>

          <button
            onClick={() =>
              window.location.reload()
            }
            className="mt-5 bg-yellow-400 hover:bg-yellow-500 px-6 py-3 rounded-lg font-bold"
          >

            Try Again

          </button>

        </div>

      </main>

    );

  }

  // ====================================================
  // MAIN UI
  // ====================================================

  return (

    <main className="bg-gray-100 min-h-screen">

      {/* =================================================
          HERO SLIDER
      ================================================= */}

      <section className="relative w-full h-[420px] overflow-hidden">

        <img
          src={
            banners[bannerIndex].image
          }
          alt="Banner"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40 flex items-center">

          <div className="max-w-7xl mx-auto w-full px-6 text-white">

            <h1 className="text-4xl md:text-6xl font-bold mb-4">

              {
                banners[
                  bannerIndex
                ].title
              }

            </h1>

            <p className="text-xl md:text-2xl mb-6">

              {
                banners[
                  bannerIndex
                ].subtitle
              }

            </p>

            <button className="bg-yellow-400 text-black px-8 py-3 rounded-lg font-bold hover:bg-yellow-500">

              Shop Now

            </button>

          </div>

        </div>

        <button
          onClick={prevBanner}
          className="absolute left-5 top-1/2 -translate-y-1/2 bg-white/80 p-4 rounded-full hover:bg-white"
        >

          <FaChevronLeft />

        </button>

        <button
          onClick={nextBanner}
          className="absolute right-5 top-1/2 -translate-y-1/2 bg-white/80 p-4 rounded-full hover:bg-white"
        >

          <FaChevronRight />

        </button>

      </section>

      {/* =================================================
          CATEGORIES
      ================================================= */}

      <section className="max-w-7xl mx-auto px-4 md:px-6 py-8">

        <div className="bg-white rounded-xl p-6">

          <h2 className="text-2xl font-bold mb-5">

            Shop by Category

          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-4">

            {categories.map(
              (category) => (

                <div
                  key={category}
                  className="bg-gray-50 hover:bg-yellow-100 rounded-lg p-5 text-center cursor-pointer transition"
                >

                  <div className="w-14 h-14 mx-auto rounded-full bg-yellow-400 flex items-center justify-center text-xl font-bold">

                    {category.charAt(0)}

                  </div>

                  <p className="mt-3 text-sm font-semibold">

                    {category}

                  </p>

                </div>

              )
            )}

          </div>

        </div>

      </section>



      <section className="max-w-7xl mx-auto px-4 md:px-6">

        <div className="relative rounded-xl overflow-hidden h-[320px]">

          <img
            src={
              secondBanners[
                secondBannerIndex
              ].image
            }
            alt="Second Banner"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/40 flex items-center px-8 md:px-14">

            <div className="text-white">

              <div className="flex items-center gap-2 mb-3">

                <FaBolt className="text-yellow-400 text-2xl" />

                <span className="font-bold">

                  LIMITED TIME DEAL

                </span>

              </div>

              <h2 className="text-3xl md:text-5xl font-bold">

                {
                  secondBanners[
                    secondBannerIndex
                  ].title
                }

              </h2>

              <p className="text-lg mt-3">

                {
                  secondBanners[
                    secondBannerIndex
                  ].subtitle
                }

              </p>

              <button className="mt-5 bg-yellow-400 text-black px-7 py-3 rounded-lg font-bold">

                Explore Deals

              </button>

            </div>

          </div>

          <button
            onClick={prevSecondBanner}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-3 rounded-full"
          >

            <FaChevronLeft />

          </button>

          <button
            onClick={nextSecondBanner}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-3 rounded-full"
          >

            <FaChevronRight />

          </button>

        </div>

      </section>



      {products.length === 0 ? (

        <section className="max-w-7xl mx-auto px-4 py-12">

          <div className="bg-white rounded-xl p-10 text-center">

            <h2 className="text-2xl font-bold">

              No Products Found

            </h2>

            <p className="text-gray-500 mt-2">

              Your database doesn't contain any products yet.

            </p>

          </div>

        </section>

      ) : (

        <>

          <section className="max-w-7xl mx-auto px-4 md:px-6 py-8">

            <div className="bg-white rounded-xl p-5">

              <div className="flex justify-between items-center mb-5">

                <div>

                  <h2 className="text-2xl font-bold">

                    Today's Deals

                  </h2>

                  <p className="text-gray-500 text-sm mt-1">

                    Great products at amazing prices

                  </p>

                </div>

              </div>

              <div className="relative">

                <button
                  onClick={() =>
                    scrollProducts(
                      "deals",
                      "left"
                    )
                  }
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg p-3 rounded-full"
                >

                  <FaChevronLeft />

                </button>

                <div
                  id="deals"
                  className="flex gap-5 overflow-x-auto scroll-smooth px-8 scrollbar-hide"
                >

                  {products
                    .slice(0, 50)
                    .map(
                      (product) => (

                        <ProductCard
                          key={
                            product._id ||
                            product.id
                          }
                          product={product}
                          onAddToCart={
                            addToCart
                          }
                        />

                      )
                    )}

                </div>

                <button
                  onClick={() =>
                    scrollProducts(
                      "deals",
                      "right"
                    )
                  }
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg p-3 rounded-full"
                >

                  <FaChevronRight />

                </button>

              </div>

            </div>

          </section>

          {/* =================================================
              ELECTRONICS
          ================================================= */}

          <section className="max-w-7xl mx-auto px-4 md:px-6 pb-8">

            <div className="bg-white rounded-xl p-5">

              <h2 className="text-2xl font-bold mb-5">

                Electronics

              </h2>

              <div className="relative">

                <button
                  onClick={() =>
                    scrollProducts(
                      "electronics",
                      "left"
                    )
                  }
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg p-3 rounded-full"
                >

                  <FaChevronLeft />

                </button>

                <div
                  id="electronics"
                  className="flex gap-5 overflow-x-auto scroll-smooth scrollbar-hide px-8"
                >

                  {products
                    .filter(
                      (product) => {

                        const category =
                          product.category;

                        return (
                          category ===
                            "Electronics" ||
                          category ===
                            "Mobiles" ||
                          category ===
                            "Laptops" ||
                          category ===
                            "Audio"
                        );

                      }
                    )
                    .map(
                      (product) => (

                        <ProductCard
                          key={
                            product._id ||
                            product.id
                          }
                          product={product}
                          onAddToCart={
                            addToCart
                          }
                        />

                      )
                    )}

                </div>

                <button
                  onClick={() =>
                    scrollProducts(
                      "electronics",
                      "right"
                    )
                  }
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg p-3 rounded-full"
                >

                  <FaChevronRight />

                </button>

              </div>

            </div>

          </section>


          <section className="max-w-7xl mx-auto px-4 md:px-6 pb-8">

            <div className="bg-white rounded-xl p-5">

              <h2 className="text-2xl font-bold mb-5">

                Fashion & Accessories

              </h2>

              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5">

                {products
                  .filter(
                    (product) => {

                      const category =
                        product.category;

                      return (
                        category ===
                          "Fashion" ||
                        category ===
                          "Accessories" ||
                        category ===
                          "Watches"
                      );

                    }
                  )
                  .slice(0, 10)
                  .map(
                    (product) => (

                      <ProductCard
                        key={
                          product._id ||
                          product.id
                        }
                        product={product}
                        onAddToCart={
                          addToCart
                        }
                      />

                    )
                  )}

              </div>

            </div>

          </section>


          <section className="max-w-7xl mx-auto px-4 md:px-6 pb-12">

            <div className="bg-white rounded-xl p-5">

              <h2 className="text-2xl font-bold mb-6">

                Explore All Products

              </h2>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">

                {products.map(
                  (product) => (

                    <ProductCard
                      key={
                        product._id ||
                        product.id
                      }
                      product={product}
                      onAddToCart={
                        addToCart
                      }
                    />

                  )
                )}

              </div>

            </div>

          </section>

        </>

      )}

    </main>

  );
};

export default Home;