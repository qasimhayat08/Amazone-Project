const Cart = require("../models/cart.model");

// ==========================================
// GET CART
// ==========================================

const getCart = async (req, res) => {
  try {
    const userId = req.user.id || req.user._id;

    const cart = await Cart.findOne({
      user: userId,
    }).populate("items.product");

    if (!cart) {
      return res.status(200).json({
        success: true,
        cart: [],
      });
    }

    res.status(200).json({
      success: true,
      cart: cart.items,
    });
  } catch (error) {
    console.error("GET CART ERROR:", error);

    res.status(500).json({
      success: false,
      message: "Failed to get cart",
      error: error.message,
    });
  }
};

// ==========================================
// ADD TO CART
// ==========================================

const addToCart = async (req, res) => {
  try {
    const userId = req.user.id || req.user._id;

    const { productId, quantity = 1 } = req.body;

    if (!productId) {
      return res.status(400).json({
        success: false,
        message: "Product ID is required",
      });
    }

    let cart = await Cart.findOne({
      user: userId,
    });

    // Create new cart
    if (!cart) {
      cart = new Cart({
        user: userId,
        items: [
          {
            product: productId,
            quantity: Number(quantity),
          },
        ],
      });

      await cart.save();

      await cart.populate("items.product");

      return res.status(201).json({
        success: true,
        message: "Product added to cart",
        cart: cart.items,
      });
    }

    // Check existing product
    const existingItem = cart.items.find(
      (item) => item.product.toString() === productId
    );

    if (existingItem) {
      existingItem.quantity += Number(quantity);
    } else {
      cart.items.push({
        product: productId,
        quantity: Number(quantity),
      });
    }

    await cart.save();

    await cart.populate("items.product");

    res.status(200).json({
      success: true,
      message: "Product added to cart",
      cart: cart.items,
    });
  } catch (error) {
    console.error("ADD TO CART ERROR:", error);

    res.status(500).json({
      success: false,
      message: "Failed to add product",
      error: error.message,
    });
  }
};

// ==========================================
// UPDATE CART
// ==========================================

const updateCart = async (req, res) => {
  try {
    const userId = req.user.id || req.user._id;

    const { productId } = req.params;
    const { quantity } = req.body;

    if (!quantity || Number(quantity) < 1) {
      return res.status(400).json({
        success: false,
        message: "Quantity must be at least 1",
      });
    }

    const cart = await Cart.findOne({
      user: userId,
    });

    if (!cart) {
      return res.status(404).json({
        success: false,
        message: "Cart not found",
      });
    }

    const item = cart.items.find(
      (item) => item.product.toString() === productId
    );

    if (!item) {
      return res.status(404).json({
        success: false,
        message: "Product not found in cart",
      });
    }

    item.quantity = Number(quantity);

    await cart.save();

    await cart.populate("items.product");

    res.status(200).json({
      success: true,
      message: "Cart updated",
      cart: cart.items,
    });
  } catch (error) {
    console.error("UPDATE CART ERROR:", error);

    res.status(500).json({
      success: false,
      message: "Failed to update cart",
      error: error.message,
    });
  }
};

// ==========================================
// REMOVE PRODUCT
// ==========================================

const removeFromCart = async (req, res) => {
  try {
    const userId = req.user.id || req.user._id;

    const { productId } = req.params;

    const cart = await Cart.findOne({
      user: userId,
    });

    if (!cart) {
      return res.status(404).json({
        success: false,
        message: "Cart not found",
      });
    }

    cart.items = cart.items.filter(
      (item) => item.product.toString() !== productId
    );

    await cart.save();

    await cart.populate("items.product");

    res.status(200).json({
      success: true,
      message: "Product removed from cart",
      cart: cart.items,
    });
  } catch (error) {
    console.error("REMOVE CART ERROR:", error);

    res.status(500).json({
      success: false,
      message: "Failed to remove product",
      error: error.message,
    });
  }
};

module.exports = {
  getCart,
  addToCart,
  updateCart,
  removeFromCart,
};