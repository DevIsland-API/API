import { Router } from "express";
import { formRoutes } from "./formRoutes";
import { miscelaneousRoutes } from "./miscelaneousRoutes";

export const appRoutes = (): Router => {
  const routes = Router();
  routes.use("/healthCheck", miscelaneousRoutes());
  routes.use("/formManagement", formRoutes());

  return routes;
};
