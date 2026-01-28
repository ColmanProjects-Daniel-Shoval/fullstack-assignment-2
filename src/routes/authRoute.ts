import { authenticate } from "middlewares/authMiddleware";
import authController from "../controllers/authController";
import express from "express";

const authRouter = express.Router();

authRouter.post("/register", authController.register);
authRouter.post("/login", authController.login);
authRouter.post("/logout", authenticate, authController.logout);
authRouter.post("/refresh", authController.refreshToken);

export default authRouter;
