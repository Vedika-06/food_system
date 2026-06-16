require("dotenv").config();

const express = require("express");
const cors = require("cors");
const categoryRoutes = require("./routes/categoryRoutes");
const connectDB = require("./config/db");
const foodRoutes = require("./routes/foodRoutes");
const authRoutes = require("./routes/authRoutes");
const orderRoutes = require("./routes/orderRoutes");
const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/food", foodRoutes);
app.use("/api/orders", orderRoutes);
connectDB();

app.use("/api/auth", authRoutes);
app.use("/api/category", categoryRoutes);
app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Food Ordering API Running Successfully"
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});