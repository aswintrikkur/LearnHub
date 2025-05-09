import jwt from "jsonwebtoken";
import {User} from "../models/userModel.js";

export const authenticate = async (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
        return res.status(401).json({ message: "Unauthorized, no token provided" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.userId).select("-password");

        if (!req.user) {
            return res.status(401).json({ message: "Unauthorized, invalid token" });
        }

        next();
    } catch (error) {
        res.status(401).json({ message: "Unauthorized, token failed" });
    }
};

// 🔹 Role-Based Access Control
export const authorizeRoles = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return res.status(403).json({ message: "Access denied" });
        }
        next();
    };
};
