import React, { useEffect, useState } from "react";
import { FaTrash, FaMinus, FaPlus } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import api from "../axios";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();


  

  const fetchCart = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        setCart([]);
        setLoading(false);
        return;
      }

      const response = await api.get("/cart");

      console.log("========== CART RESPONSE ==========");
      console.log(response.data);
      console.log("===================================");

      setCart(response.data.cart || []);
    } catch (error) {
      console.error(
        "GET CART ERROR:",
        error.response?.data || error.message
      );

      setCart([]);
    } finally {
      setLoading(false);
    }
  };


  

  useEffect(() => {
    fetchCart();
  }, []);


  


  const increaseQuantity = async (productId, quantity) => {
    try {
      await api.put(`/cart/${productId}`, {
        quantity: quantity + 1,
      });

      await fetchCart();
    } catch (error) {
      console.error(
        "INCREASE ERROR:",
        error.response?.data || error.message
      );
    }
  };


  


  const decreaseQuantity = async (productId, quantity) => {
    if (quantity <= 1) {
      return;
    }

    try {
      await api.put(`/cart/${productId}`, {
        quantity: quantity - 1,
      });

      await fetchCart();
    } catch (error) {
      console.error(
        "DECREASE ERROR:",
        error.response?.data || error.message
      );
    }
  };


  


  const removeProduct = async (productId) => {
    try {
      await api.delete(`/cart/${productId}`);

      await fetchCart();
    } catch (error) {
      console.error(
        "REMOVE ERROR:",
        error.response?.data || error.message
      );
    }
  };


  


  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-10 rounded-lg shadow text-center">
          <div className="text-5xl mb-4">🛒</div>

          <h2 className="text-xl font-semibold">
            Loading Cart...
          </h2>
        </div>
      </div>
    );
  }


  


  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">

        <div className="bg-white p-10 rounded-lg shadow-lg text-center max-w-md w-full">

          <div className="text-7xl mb-5">
            🛒
          </div>

          <h1 className="text-3xl font-bold mb-4">
            Your Cart is Empty
          </h1>

          <p className="text-gray-600 mb-6">
            You haven't added any products to your cart yet.
          </p>

          <Link
            to="/shop"
            className="inline-block bg-yellow-400 hover:bg-yellow-500 px-8 py-3 rounded-md font-semibold"
          >
            Continue Shopping
          </Link>

        </div>

      </div>
    );
  }


  


  const subtotal = cart.reduce((total, item) => {
    const product = item.product;

    const price = Number(product?.price || 0);

    const quantity = Number(item.quantity || 1);

    return total + price * quantity;
  }, 0);


  


  const delivery = subtotal >= 100 ? 0 : 10;


  


  const total = subtotal + delivery;


  

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">

      <div className="max-w-7xl mx-auto">





        <div className="flex items-center justify-between mb-6">

          <h1 className="text-3xl font-bold">
            Shopping Cart
          </h1>

          <Link
            to="/shop"
            className="text-blue-600 hover:underline"
          >
            Continue Shopping
          </Link>

        </div>


        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">






          <div className="lg:col-span-2">

            <div className="bg-white rounded-lg shadow">

              {cart.map((item) => {

                console.log("CART ITEM:", item);

                const product = item.product;

                if (!product) {
                  return null;
                }

                const productId = product._id;

                const productName =
                  product.title ||
                  product.name ||
                  "Product";

                const price =
                  Number(product.price || 0);

                const quantity =
                  Number(item.quantity || 1);

                const image =
                  product.image ||
                  product.imageUrl ||
                  "";


                return (
                  <div
                    key={productId}
                    className="p-6 border-b last:border-b-0"
                  >

                    <div className="flex flex-col sm:flex-row gap-6">





                      <div className="w-full sm:w-40 h-40 bg-gray-50 flex items-center justify-center rounded">

                        {image ? (
                          <img
                            src={image}
                            alt={productName}
                            className="max-w-full max-h-full object-contain"
                          />
                        ) : (
                          <div className="text-5xl">
                            📦
                          </div>
                        )}

                      </div>






                      <div className="flex-1">

                        <h2 className="text-xl font-semibold mb-2">
                          {productName}
                        </h2>






                        <p className="text-xl font-bold text-gray-900 mb-4">
                          ${price.toFixed(2)}
                        </p>






                        <div className="flex items-center gap-3">

                          <button
                            onClick={() =>
                              decreaseQuantity(
                                productId,
                                quantity
                              )
                            }
                            className="w-9 h-9 border rounded flex items-center justify-center hover:bg-gray-100"
                          >
                            <FaMinus size={12} />
                          </button>


                          <span className="font-semibold text-lg w-8 text-center">
                            {quantity}
                          </span>


                          <button
                            onClick={() =>
                              increaseQuantity(
                                productId,
                                quantity
                              )
                            }
                            className="w-9 h-9 border rounded flex items-center justify-center hover:bg-gray-100"
                          >
                            <FaPlus size={12} />
                          </button>

                        </div>


                        {/* REMOVE */}

                        <button
                          onClick={() =>
                            removeProduct(productId)
                          }
                          className="flex items-center gap-2 text-red-600 hover:text-red-800 mt-4"
                        >

                          <FaTrash size={14} />

                          Remove

                        </button>

                      </div>






                      <div className="sm:text-right">

                        <p className="text-xl font-bold">
                          ${(price * quantity).toFixed(2)}
                        </p>

                      </div>

                    </div>

                  </div>
                );
              })}

            </div>

          </div>






          <div>

            <div className="bg-white rounded-lg shadow p-6 sticky top-5">

              <h2 className="text-2xl font-bold mb-6">
                Order Summary
              </h2>






              <div className="flex justify-between mb-4">

                <span className="text-gray-600">
                  Subtotal
                </span>

                <span className="font-semibold">
                  ${subtotal.toFixed(2)}
                </span>

              </div>






              <div className="flex justify-between mb-4">

                <span className="text-gray-600">
                  Delivery
                </span>

                <span className="font-semibold">

                  {delivery === 0
                    ? "FREE"
                    : `$${delivery.toFixed(2)}`}

                </span>

              </div>


              <hr className="my-5" />

              <div className="flex justify-between mb-6">

                <span className="text-xl font-bold">
                  Total
                </span>

                <span className="text-xl font-bold">
                  ${total.toFixed(2)}
                </span>

              </div>



              <button
                onClick={() =>
                  navigate("/checkout")
                }
                className="w-full bg-yellow-400 hover:bg-yellow-500 py-3 rounded-full font-semibold"
              >
                Proceed to Checkout
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Cart;