import { Router } from "express";
import * as userController from "./users.controller.js";

const userRouter = Router();
// Define your user routes here
userRouter.get("/", userController.getUsers);
userRouter.get("/:id", userController.getUser);
userRouter.post("/", userController.createUser);
userRouter.put("/:id", userController.updateUser);
userRouter.delete("/:id", userController.deleteUser);

export default userRouter;
