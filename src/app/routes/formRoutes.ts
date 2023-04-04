import { Router } from "express";
import "../config/dotenv";
import { CreateFormController } from "../controllers/management/CreateFormController";
import { UpdateFormController } from "../controllers/management/UpdateFormController";

export const formRoutes = (): Router => {
  const route = Router();

  route.post("/", CreateFormController.handle);
  route.patch("/:id", UpdateFormController.handle);

  return route;
};
