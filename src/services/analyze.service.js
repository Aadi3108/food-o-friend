exports.analyzeFood = (food, grams, mode) => {
    const carbsPer100g = 28; // mock value
    const totalCarbs = (carbsPer100g * grams) / 100;

    let decision = "Comfortable";
    if (totalCarbs > 30) decision = "Moderate";
    if (totalCarbs > 50) decision = "Higher";

    return {
        food,
        grams,
        mode,
        totalCarbs,
        decision,
        score: Math.max(100 - totalCarbs, 0),
        message: "Portion-based carb guidance"
    };
};
