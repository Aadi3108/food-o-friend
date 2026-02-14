const express = require("express");
const router = express.Router();
const analyzeController = require("../controllers/analyze.controller");
const authMiddleware = require("../middlewares/auth.middleware");

router.post("/", authMiddleware, analyzeController.analyze);

module.exports = router;
