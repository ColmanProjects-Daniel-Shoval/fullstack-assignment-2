import authController from "../controllers/authController";
import express from "express";

const authRouter = express.Router();

authRouter.post("/register", authController.register);
authRouter.post("/login", authController.login);
authRouter.post("/logout", authController.logout);
authRouter.post("/refresh", authController.refreshToken);

export default authRouter;
