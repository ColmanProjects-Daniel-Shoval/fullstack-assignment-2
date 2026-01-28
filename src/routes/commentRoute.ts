import express from "express";
import commentController from "../controllers/commentController";

const commentRouter = express.Router();

commentRouter.get("/", commentController.get.bind(commentController));

commentRouter.post("/", commentController.create.bind(commentController));
commentRouter.get("/:id", commentController.getById.bind(commentController));
commentRouter.put("/:id", commentController.put.bind(commentController));
commentRouter.delete("/:id", commentController.delete.bind(commentController));

export default commentRouter;
