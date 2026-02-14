const User = require("../models/user.model");
const authService = require("../services/auth.service");

exports.signup = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;

        const existing = await User.findOne({ email });
        if (existing)
            return res.status(400).json({ message: "User already exists" });

        const hashed = await authService.hashPassword(password);

        const user = await User.create({
            name,
            email,
            password: hashed
        });

        const token = authService.generateToken(user._id);

        res.json({ token });
    } catch (err) {
        next(err);
    }
};

exports.login = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user)
            return res.status(400).json({ message: "Invalid credentials" });

        const match = await authService.comparePassword(
            password,
            user.password
        );

        if (!match)
            return res.status(400).json({ message: "Invalid credentials" });

        const token = authService.generateToken(user._id);

        res.json({ token });
    } catch (err) {
        next(err);
    }
};
