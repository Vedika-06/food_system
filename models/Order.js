const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    foodItems: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "FoodItem",
        required: true
      }
    ],

    totalPrice: {
      type: Number,
      required: true
    },

    status: {
      type: String,
      enum: [
        "Pending",
        "Preparing",
        "Out for Delivery",
        "Delivered",
        "Cancelled"
      ],
      default: "Pending"
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Order", orderSchema);