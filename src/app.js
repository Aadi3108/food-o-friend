const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/auth.routes");
const analyzeRoutes = require("./routes/analyze.routes");
const errorMiddleware = require("./middlewares/error.middleware");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Food-O-Friend API running"
    });
});

app.use("/api/auth", authRoutes);
app.use("/api/analyze", analyzeRoutes);

app.use(errorMiddleware);

module.exports = app;
