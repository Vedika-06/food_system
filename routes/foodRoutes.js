const express = require("express");

const router = express.Router();

const {
  addFood,
  getFoods,
  getFoodById,
  updateFood,
  deleteFood
} = require("../controllers/foodController");

router.post("/add-food", addFood);

router.get("/get-foods", getFoods);

router.get("/:id", getFoodById);

router.put("/update-food/:id", updateFood);

router.delete("/delete-food/:id", deleteFood);

module.exports = router;