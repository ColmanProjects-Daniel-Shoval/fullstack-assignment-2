import express from "express";
import userController from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/", userController.get.bind(userController));

userRouter.delete("/:id", userController.delete.bind(userController));

export default userRouter;
