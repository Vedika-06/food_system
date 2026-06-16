const express = require("express");

const router = express.Router();

const {
  placeOrder,
  getOrders,
  getOrderById,
  updateOrderStatus,
  deleteOrder
} = require("../controllers/orderController");


router.post("/place-order", placeOrder);

router.get("/get-orders", getOrders);

router.get("/:id", getOrderById);

router.put("/update-order/:id", updateOrderStatus);

router.delete("/cancel-order/:id", deleteOrder);

module.exports = router;