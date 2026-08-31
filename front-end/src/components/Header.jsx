import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaSearch,
  FaShoppingCart,
  FaBars,
  FaMapMarkerAlt,
  FaUser,
  FaChevronDown,
  FaTimes,
} from "react-icons/fa";

import api from "../axios";

const Header = () => {
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);

  // login / register modal
  const [authOpen, setAuthOpen] = useState(false);

  const [isRegister, setIsRegister] = useState(false);

  // form data
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // loading / error
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // logged in user
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  // =====================================================
  // OPEN LOGIN
  // =====================================================

  const openLogin = () => {
    setIsRegister(false);
    setAuthOpen(true);

    setError("");
    setSuccess("");
  };

  // =====================================================
  // OPEN REGISTER
  // =====================================================

  const openRegister = () => {
    setIsRegister(true);
    setAuthOpen(true);

    setError("");
    setSuccess("");
  };

  // =====================================================
  // CLOSE AUTH
  // =====================================================

  const closeAuth = () => {
    setAuthOpen(false);

    setName("");
    setEmail("");
    setPassword("");

    setError("");
    setSuccess("");
  };

  // =====================================================
  // LOGIN / REGISTER
  // =====================================================

  const handleAuth = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");
    setSuccess("");

    try {
      // =================================================
      // REGISTER
      // =================================================

      if (isRegister) {
        const response = await api.post("/auth/register", {
          name,
          email,
          password,
        });

        console.log("REGISTER RESPONSE:", response.data);

        setSuccess(
          response.data.message ||
            "Account created successfully!"
        );

        // Registration ke baad login screen
        setTimeout(() => {
          setIsRegister(false);
          setSuccess("");
        }, 1500);
      }

      // =================================================
      // LOGIN
      // =================================================

      else {
        const response = await api.post("/auth/login", {
          email,
          password,
        });

        console.log("LOGIN RESPONSE:", response.data);

        // ===============================================
        // TOKEN
        // ===============================================

        const token =
          response.data.token ||
          response.data.accessToken ||
          response.data.data?.token;

        // ===============================================
        // USER
        // ===============================================

        const loggedInUser =
          response.data.user ||
          response.data.data?.user ||
          response.data.data;

        // ===============================================
        // SAVE TOKEN
        // ===============================================

        if (token) {
          localStorage.setItem("token", token);
        }

        // ===============================================
        // SAVE USER
        // ===============================================

        if (loggedInUser) {
          localStorage.setItem(
            "user",
            JSON.stringify(loggedInUser)
          );

          setUser(loggedInUser);
        }

        setSuccess("Login successful!");

        // close modal
        setTimeout(() => {
          closeAuth();
        }, 1000);
      }
    } catch (err) {
      console.error("AUTH ERROR:", err);

      setError(
        err.response?.data?.message ||
          err.response?.data?.error ||
          "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  // =====================================================
  // LOGOUT
  // =====================================================

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setUser(null);

    navigate("/");
  };

  // =====================================================
  // CART COUNT
  // =====================================================

  const cartCount = 0;

  return (
    <header className="w-full">

      {/* =================================================
          TOP HEADER
      ================================================= */}

      <div className="bg-[#131921] text-white">

        <div className="max-w-[1500px] mx-auto px-3 sm:px-4 py-2 md:py-3">

          <div className="flex items-center flex-wrap md:flex-nowrap gap-2 sm:gap-3 md:gap-4">

            {/* LOGO */}

            <Link
              to="/"
              className="order-1 text-xl sm:text-2xl md:text-3xl font-bold whitespace-nowrap hover:border hover:border-white px-2 py-1"
            >
              amazon
              <span className="text-orange-400">
                .clone
              </span>
            </Link>


            {/* LOCATION */}

            <div className="order-3 hidden lg:flex items-center gap-2 px-3 py-2 hover:border hover:border-white cursor-pointer">

              <FaMapMarkerAlt className="text-lg" />

              <div>

                <p className="text-xs text-gray-300">
                  Deliver to
                </p>

                <p className="font-bold text-sm">
                  Pakistan
                </p>

              </div>

            </div>


            {/* SEARCH */}

            <div className="order-5 md:order-4 flex w-full md:w-auto h-10 md:h-11 md:flex-1 md:max-w-4xl">

              <button className="hidden sm:flex items-center gap-2 bg-gray-200 text-gray-700 px-3 md:px-4 rounded-l-md text-sm shrink-0">

                All

                <FaChevronDown className="text-xs" />

              </button>


              <input
                type="text"
                placeholder="Search Amazon"
                className="flex-1 min-w-0 px-3 md:px-4 text-gray-900 outline-none rounded-l-md sm:rounded-l-none"
              />


              <button className="bg-orange-400 hover:bg-orange-500 text-gray-900 px-4 md:px-5 rounded-r-md flex items-center justify-center shrink-0">

                <FaSearch className="text-lg md:text-xl" />

              </button>

            </div>


            {/* LANGUAGE */}

            <div className="order-6 hidden xl:flex items-center gap-1 px-2 py-2 hover:border hover:border-white cursor-pointer">

              <span>EN</span>

              <FaChevronDown className="text-xs" />

            </div>


            {/* =================================================
                ACCOUNT
            ================================================= */}

            <div className="order-7 hidden md:block">

              {user ? (

                <div className="relative group">

                  <button className="px-2 py-1 hover:border hover:border-white text-left">

                    <p className="text-xs">
                      Hello, {user.name || "User"}
                    </p>

                    <p className="font-bold text-sm flex items-center gap-1 whitespace-nowrap">

                      Account & Lists

                      <FaChevronDown className="text-xs" />

                    </p>

                  </button>


                  {/* DROPDOWN */}

                  <div className="hidden group-hover:block absolute right-0 top-full mt-1 bg-white text-gray-900 w-48 rounded-md shadow-xl z-50">

                    <button
                      onClick={() => navigate("/profile")}
                      className="w-full text-left px-4 py-3 hover:bg-gray-100"
                    >
                      My Profile
                    </button>

                    <button
                      onClick={() =>
                        navigate("/orders")
                      }
                      className="w-full text-left px-4 py-3 hover:bg-gray-100"
                    >
                      My Orders
                    </button>

                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-3 hover:bg-gray-100 text-red-500"
                    >
                      Logout
                    </button>

                  </div>

                </div>

              ) : (

                <button
                  onClick={openLogin}
                  className="px-2 py-1 hover:border hover:border-white text-left"
                >

                  <p className="text-xs">
                    Hello, sign in
                  </p>

                  <p className="font-bold text-sm flex items-center gap-1 whitespace-nowrap">

                    Account & Lists

                    <FaChevronDown className="text-xs" />

                  </p>

                </button>

              )}

            </div>


            {/* ORDERS */}

            <Link
              to="/orders"
              className="order-8 hidden lg:block px-2 py-1 hover:border hover:border-white"
            >

              <p className="text-xs">
                Returns
              </p>

              <p className="font-bold text-sm whitespace-nowrap">
                & Orders
              </p>

            </Link>


            {/* CART */}

            <Link
              to="/cart"
              className="order-2 md:order-9 relative flex items-end gap-1 px-2 py-1 ml-auto md:ml-0 hover:border hover:border-white"
            >

              <FaShoppingCart className="text-2xl sm:text-3xl" />

              <span className="hidden sm:block font-bold text-sm">
                Cart
              </span>

              <span className="absolute -top-1 left-4 sm:left-5 bg-orange-400 text-black text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">

                {cartCount}

              </span>

            </Link>

          </div>

        </div>

      </div>


      {/* =================================================
          SECOND NAVBAR
      ================================================= */}

      <div className="bg-[#232f3e] text-white">

        <div className="max-w-[1500px] mx-auto px-2 sm:px-4 flex items-center h-11 md:h-12">

          {/* ALL */}

          <button
            onClick={() =>
              setMenuOpen(!menuOpen)
            }
            className="flex items-center gap-2 font-bold px-2 sm:px-3 py-2 hover:border hover:border-white shrink-0"
          >

            <FaBars />

            <span>
              All
            </span>

          </button>


          {/* LINKS */}

          <div className="hidden md:flex items-center gap-1">

            <Link
              to="/deals"
              className="px-2 lg:px-3 py-2 text-sm font-medium hover:border hover:border-white whitespace-nowrap"
            >
              Today's Deals
            </Link>

            <Link
              to="/customer-service"
              className="px-2 lg:px-3 py-2 text-sm font-medium hover:border hover:border-white whitespace-nowrap"
            >
              Customer Service
            </Link>

            <Link
              to="/registry"
              className="px-2 lg:px-3 py-2 text-sm font-medium hover:border hover:border-white whitespace-nowrap"
            >
              Registry
            </Link>

            <Link
              to="/gift-cards"
              className="px-2 lg:px-3 py-2 text-sm font-medium hover:border hover:border-white whitespace-nowrap"
            >
              Gift Cards
            </Link>

            <Link
              to="/sell"
              className="px-2 lg:px-3 py-2 text-sm font-medium hover:border hover:border-white whitespace-nowrap"
            >
              Sell
            </Link>

          </div>


          {/* MOBILE SIGN IN */}

          {!user && (
            <button
              onClick={openLogin}
              className="ml-auto md:hidden flex items-center gap-2 px-2 py-2 shrink-0"
            >

              <FaUser />

              <span className="text-sm">
                Sign In
              </span>

            </button>
          )}

        </div>

      </div>


      {/* =================================================
          MOBILE MENU
      ================================================= */}

      {menuOpen && (

        <div className="md:hidden bg-white shadow-lg border-b text-gray-900">

          <div className="p-4 sm:p-5">

            <div className="flex items-center gap-3 pb-5 border-b">

              <div className="bg-gray-300 rounded-full p-3">

                <FaUser className="text-gray-700" />

              </div>

              <div>

                {user ? (

                  <>
                    <p className="font-bold">
                      Hello, {user.name}
                    </p>

                    <button
                      onClick={handleLogout}
                      className="text-sm text-red-500"
                    >
                      Logout
                    </button>
                  </>

                ) : (

                  <button
                    onClick={openLogin}
                    className="font-bold hover:text-orange-500"
                  >
                    Hello, sign in
                  </button>

                )}

                <p className="text-sm text-gray-500">
                  Account & Lists
                </p>

              </div>

            </div>


            <nav className="flex flex-col">

              <Link
                to="/"
                className="py-4 border-b hover:text-orange-500"
                onClick={() =>
                  setMenuOpen(false)
                }
              >
                Home
              </Link>

              <Link
                to="/deals"
                className="py-4 border-b hover:text-orange-500"
                onClick={() =>
                  setMenuOpen(false)
                }
              >
                Today's Deals
              </Link>

              <Link
                to="/products"
                className="py-4 border-b hover:text-orange-500"
                onClick={() =>
                  setMenuOpen(false)
                }
              >
                Products
              </Link>

              <Link
                to="/orders"
                className="py-4 border-b hover:text-orange-500"
                onClick={() =>
                  setMenuOpen(false)
                }
              >
                Orders
              </Link>

              <Link
                to="/cart"
                className="py-4 hover:text-orange-500"
                onClick={() =>
                  setMenuOpen(false)
                }
              >
                Shopping Cart
              </Link>

            </nav>

          </div>

        </div>

      )}


      {/* =================================================
          LOGIN / REGISTER MODAL
      ================================================= */}

      {authOpen && (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">

          <div className="relative w-full max-w-md bg-white rounded-xl shadow-2xl p-6 sm:p-8">


            {/* CLOSE */}

            <button
              onClick={closeAuth}
              className="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-xl"
            >
              <FaTimes />
            </button>


            {/* LOGO */}

            <div className="text-center mb-6">

              <h2 className="text-3xl font-bold text-gray-900">

                amazon
                <span className="text-orange-500">
                  .clone
                </span>

              </h2>

              <p className="text-gray-500 mt-2">

                {isRegister
                  ? "Create your account"
                  : "Sign in to your account"}

              </p>

            </div>


            {/* ERROR */}

            {error && (

              <div className="bg-red-100 border border-red-300 text-red-600 px-4 py-3 rounded-md mb-4 text-sm">

                {error}

              </div>

            )}


            {/* SUCCESS */}

            {success && (

              <div className="bg-green-100 border border-green-300 text-green-600 px-4 py-3 rounded-md mb-4 text-sm">

                {success}

              </div>

            )}


            {/* FORM */}

            <form onSubmit={handleAuth}>


              {/* NAME - REGISTER ONLY */}

              {isRegister && (

                <div className="mb-4">

                  <label
                    htmlFor="name"
                    className="block text-sm font-bold text-gray-700 mb-2"
                  >
                    Full Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) =>
                      setName(e.target.value)
                    }
                    placeholder="Enter your full name"
                    required
                    className="w-full border border-gray-400 rounded-md px-4 py-3 outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                  />

                </div>

              )}


              {/* EMAIL */}

              <div className="mb-4">

                <label
                  htmlFor="email"
                  className="block text-sm font-bold text-gray-700 mb-2"
                >
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                  placeholder="Enter your email"
                  required
                  className="w-full border border-gray-400 rounded-md px-4 py-3 outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                />

              </div>


              {/* PASSWORD */}

              <div className="mb-5">

                <div className="flex justify-between items-center mb-2">

                  <label
                    htmlFor="password"
                    className="text-sm font-bold text-gray-700"
                  >
                    Password
                  </label>


                  {!isRegister && (

                    <button
                      type="button"
                      className="text-sm text-blue-600 hover:text-orange-500"
                    >
                      Forgot password?
                    </button>

                  )}

                </div>


                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                  placeholder="Enter your password"
                  required
                  className="w-full border border-gray-400 rounded-md px-4 py-3 outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                />

              </div>


              {/* SUBMIT */}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-orange-400 hover:bg-orange-500 disabled:bg-gray-300 text-gray-900 font-semibold py-3 rounded-md transition"
              >

                {loading
                  ? "Please wait..."
                  : isRegister
                  ? "Create Account"
                  : "Sign In"}

              </button>

            </form>


            {/* TERMS */}

            <p className="text-xs text-gray-500 mt-5 leading-5">

              By continuing, you agree to our
              Conditions of Use and Privacy Notice.

            </p>


            {/* SWITCH LOGIN / REGISTER */}

            <div className="flex items-center gap-3 my-6">

              <div className="flex-1 h-px bg-gray-300"></div>

              <span className="text-sm text-gray-500">
                {isRegister
                  ? "Already have an account?"
                  : "New to Amazon Clone?"}
              </span>

              <div className="flex-1 h-px bg-gray-300"></div>

            </div>


            {/* SWITCH BUTTON */}

            <button
              type="button"
              onClick={() => {

                setIsRegister(!isRegister);

                setError("");
                setSuccess("");

              }}
              className="w-full border border-gray-400 hover:bg-gray-100 py-3 rounded-md font-medium transition"
            >

              {isRegister
                ? "Sign in to your account"
                : "Create your Amazon Clone account"}

            </button>

          </div>

        </div>

      )}

    </header>
  );
};

export default Header;