import jwt from "jsonwebtoken";

// Middleware to authenticate the user
export const auth = (req, res, next) => {
    const token = req.header("Authorization");
    if (!token) return res.status(401).json({ message: "No token, authorization denied" });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        res.status(401).json({ message: "Invalid token" });
    }
};

// Middleware to authorize only Admin users
export const adminOnly = (req, res, next) => {
    auth(req, res, () => {
        if (req.user.role !== "Admin") {
            return res.status(403).json({ message: "Access denied" });
        }
        next();
    });
};
