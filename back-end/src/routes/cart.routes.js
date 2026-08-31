const express = require("express");

const router = express.Router();

const {
  getCart,
  addToCart,
  updateCart,
  removeFromCart,
} = require("../controllers/cart.controller");

const authMiddleware = require("../middleware/auth.middleware");


router.get("/", authMiddleware, getCart);

router.post("/", authMiddleware, addToCart);

router.put("/:productId", authMiddleware, updateCart);

router.delete("/:productId", authMiddleware, removeFromCart);


module.exports = router;