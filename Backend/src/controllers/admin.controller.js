import User from "../models/user.model.js";

export const getUsers = async (req, res) => {
    try {
        const users = await User.find({ role: "User" });
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
};

export const addUser = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;
        const user = await User.create({ name, email, password, role });
        res.json(user);
    } catch (err) {
        res.status(400).json({ message: "Invalid data" });
    }
};

export const deleteUser = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.json({ message: "User deleted" });
    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
};
