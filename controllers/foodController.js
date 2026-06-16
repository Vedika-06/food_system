const FoodItem = require("../models/FoodItem");


// ADD FOOD
const addFood = async (req, res) => {
  try {

    const food = await FoodItem.create(req.body);

    res.status(201).json({
      success: true,
      message: "Food Added Successfully",
      food
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};



// GET ALL FOODS
const getFoods = async (req, res) => {
  try {

    const foods = await FoodItem.find()
      .populate("category");

    res.status(200).json(foods);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};



// GET FOOD BY ID
const getFoodById = async (req, res) => {

  try {

    const food = await FoodItem.findById(req.params.id)
      .populate("category");

    if (!food) {
      return res.status(404).json({
        message: "Food Item Not Found"
      });
    }

    res.status(200).json(food);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};



// UPDATE FOOD
const updateFood = async (req, res) => {

  try {

    const food = await FoodItem.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Food Updated Successfully",
      food
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};



// DELETE FOOD
const deleteFood = async (req, res) => {

  try {

    await FoodItem.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Food Deleted Successfully"
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};


module.exports = {
  addFood,
  getFoods,
  getFoodById,
  updateFood,
  deleteFood
};