const analyzeService = require("../services/analyze.service");

exports.analyze = async (req, res, next) => {
    try {
        const { food, grams, mode } = req.body;

        const result = analyzeService.analyzeFood(food, grams, mode);

        res.json(result);
    } catch (err) {
        next(err);
    }
};
