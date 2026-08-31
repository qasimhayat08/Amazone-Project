  const mongoose = require("mongoose");

  const productSchema = new mongoose.Schema(
    {
      title: {
        type: String,
        required: true,
        trim: true,
      },

      description: {
        type: String,
        required: true,
        trim: true,
      },

      price: {
        type: Number,
        required: true,
        min: 0,
      },

      category: {
        type: String,
        required: true,
        trim: true,
      },

      brand: {
        type: String,
        required: true,
        trim: true,
      },

      image: {
        type: String,
        required: true,
      },

      stock: {
        type: Number,
        required: true,
        default: 0,
        min: 0,
      },

      rating: {
        type: Number,
        required: true,
        default: 0,
        min: 0,
        max: 5,
      },

      reviews: {
        type: Number,
        default: 0,
        min: 0,
      },
    },
    {
      timestamps: true,
    }
  );

  const Product = mongoose.model("Product", productSchema);

  module.exports = Product;