import { Router } from "express";
import { UserController } from "./controller/UserController";
import { AuthController } from "./controller/AuthController";
import { AuthMiddleweres } from "./middlewares/aurh";

const userController = new UserController();
const authController = new AuthController();

export const router = Router();

router.post("/create", userController.store);

router.get("/users", AuthMiddleweres, userController.index);

router.post("/auth", authController.authenticate);
