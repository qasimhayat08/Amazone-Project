const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/auth.routes");
const productRoutes = require("./routes/product.routes");
const cartRoutes = require("./routes/cart.routes");

const app = express();

app.use(cors());

app.use(express.json());


// HOME
app.get("/", (req, res) => {
  res.json({
    message: "Amazon Clone API is running",
  });
});


// AUTH
app.use("/api/auth", authRoutes);


// PRODUCTS
app.use("/api/products", productRoutes);


// CART
app.use("/api/cart", cartRoutes);


module.exports = app;