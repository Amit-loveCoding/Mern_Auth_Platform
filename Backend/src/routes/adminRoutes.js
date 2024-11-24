import express from "express";
import  { getUsers, addUser, deleteUser } from "../controllers/admin.controller.js"
import {adminOnly} from "../middlewares/authMiddleware.js"
const adminRouter = express.Router();

// to get the users
adminRouter.get("/users", adminOnly, getUsers);

// to add the users
adminRouter.post("/add-user", adminOnly, addUser);

// to delete the users
adminRouter.delete("/delete-user/:id", adminOnly, deleteUser);

export default adminRouter;
