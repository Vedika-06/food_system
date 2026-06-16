const Order = require("../models/Order");


// PLACE ORDER
const placeOrder = async (req, res) => {
  try {

    const order = await Order.create(req.body);

    res.status(201).json({
      success: true,
      message: "Order Placed Successfully",
      order
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};


// GET ALL ORDERS
const getOrders = async (req, res) => {
  try {

    const orders = await Order.find()
      .populate("user", "name email")
      .populate("foodItems");

    res.status(200).json(orders);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};


// GET ORDER BY ID
const getOrderById = async (req, res) => {
  try {

    const order = await Order.findById(req.params.id)
      .populate("user", "name email")
      .populate("foodItems");

    if (!order) {
      return res.status(404).json({
        message: "Order Not Found"
      });
    }

    res.status(200).json(order);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};


// UPDATE ORDER STATUS
const updateOrderStatus = async (req, res) => {
  try {

    const order = await Order.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Order Updated Successfully",
      order
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};


// DELETE ORDER
const deleteOrder = async (req, res) => {
  try {

    await Order.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Order Cancelled Successfully"
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};


module.exports = {
  placeOrder,
  getOrders,
  getOrderById,
  updateOrderStatus,
  deleteOrder
};