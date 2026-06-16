const Category = require("../models/Category");


// ADD CATEGORY
const addCategory = async (req, res) => {
  try {

    const { categoryName } = req.body;

    const category = await Category.create({
      categoryName
    });

    res.status(201).json({
      success: true,
      message: "Category Added Successfully",
      category
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};


// GET ALL CATEGORIES
const getCategories = async (req, res) => {

  try {

    const categories = await Category.find();

    res.status(200).json(categories);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};


// UPDATE CATEGORY
const updateCategory = async (req, res) => {

  try {

    const category = await Category.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json({
      success: true,
      category
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};


// DELETE CATEGORY
const deleteCategory = async (req, res) => {

  try {

    await Category.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Category Deleted"
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};


module.exports = {
  addCategory,
  getCategories,
  updateCategory,
  deleteCategory
};