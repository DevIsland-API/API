import { Router } from "express";
import "../config/dotenv";
import { CreateUserController } from "../controllers";

export const userRoutes = (): Router => {
  const route = Router();

  route.post("/", CreateUserController.handle);

  return route;
};
