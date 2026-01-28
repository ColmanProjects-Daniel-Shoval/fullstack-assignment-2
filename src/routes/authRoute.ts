import authController from "../controllers/authController";
import express from "express";

const authRouter = express.Router();

authRouter.post("/register", authController.register);
export default authRouter;
