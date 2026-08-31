const express = require("express");

const router = express.Router();

// Create order
router.post("/", (req, res) => {
  res.json({ message: "Order created" });
});

// Get user's orders
router.get("/", (req, res) => {
  res.json({ message: "Get all orders" });
});

// Get single order
router.get("/:id", (req, res) => {
  res.json({
    message: "Get single order",
    id: req.params.id,
  });
});

// Update order status
router.patch("/:id/status", (req, res) => {
  res.json({
    message: "Order status updated",
    id: req.params.id,
  });
});

// Cancel order
router.patch("/:id/cancel", (req, res) => {
  res.json({
    message: "Order cancelled",
    id: req.params.id,
  });
});

module.exports = router;