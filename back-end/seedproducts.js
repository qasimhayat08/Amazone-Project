require("dotenv").config();

const mongoose = require("mongoose");
const Product = require("./src/models/product.model");
const products = require("./src/data/products");

const seedProducts = async () => {
  try {
    console.log("Connecting to MongoDB...");

    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected");

    console.log("Products in file:", products.length);

    // Delete old products
    await Product.deleteMany({});

    console.log("Old products deleted");

    // Insert all products
    const insertedProducts = await Product.insertMany(products);

    console.log(
      "Products inserted:",
      insertedProducts.length
    );

    // Check database
    const totalProducts = await Product.countDocuments();

    console.log(
      "Products currently in database:",
      totalProducts
    );

    await mongoose.connection.close();

    console.log("MongoDB connection closed");

    process.exit(0);

  } catch (error) {

    console.error("SEED ERROR:", error);

    process.exit(1);
  }
};

seedProducts();