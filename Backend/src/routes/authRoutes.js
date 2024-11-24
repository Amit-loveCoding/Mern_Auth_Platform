import express from "express";
import { login, register } from "../controllers/auth.controller.js"; 

const authRouter = express.Router();

// Login route
authRouter.post("/login", login);

// Register route
authRouter.post("/register", register);

export default authRouter;
