import { Router } from "express";
import "../config/dotenv";
import { CreateFormController } from "../controllers/management/CreateFormController";
import { DeleteFormController } from "../controllers/management/DeleteFormController";
import { GetFormController } from "../controllers/management/GetFormController";
import { ListFormController } from "../controllers/management/ListFormController";
import { UpdateFormController } from "../controllers/management/UpdateFormController";

export const formRoutes = (): Router => {
  const route = Router();

  route.post("/", CreateFormController.handle);
  route.patch("/:id", UpdateFormController.handle);
  route.delete(":id", DeleteFormController.handle);
  route.get("/:id", GetFormController.handle);
  route.get("/", ListFormController.handle);

  return route;
};
