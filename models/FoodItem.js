const mongoose = require("mongoose");

const foodItemSchema = new mongoose.Schema(
  {
    foodName: {
      type: String,
      required: true
    },

    price: {
      type: Number,
      required: true
    },

    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true
    },

    description: {
      type: String
    },

    availability: {
      type: Boolean,
      default: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("FoodItem", foodItemSchema);