import { Router } from "express";
import "../config/dotenv";
import {
  CreateFormController,
  DeleteFormController,
  GetFormController,
  ListFormController,
  UpdateFormController,
} from "../controllers";

export const formRoutes = (): Router => {
  const route = Router();

  route.post("/", CreateFormController.handle);
  route.patch("/:id", UpdateFormController.handle);
  route.delete("/:id", DeleteFormController.handle);
  route.get("/:id", GetFormController.handle);
  route.get("/", ListFormController.handle);

  return route;
};
