const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.hashPassword = async (password) => {
    return await bcrypt.hash(password, 10);
};

exports.comparePassword = async (password, hashed) => {
    return await bcrypt.compare(password, hashed);
};

exports.generateToken = (userId) => {
    return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
        expiresIn: "7d"
    });
};
