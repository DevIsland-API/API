import { Router } from "express";
import { formRoutes } from "./formRoutes";
import { miscelaneousRoutes } from "./miscelaneousRoutes";
import { userRoutes } from "./userRoutes";

export const appRoutes = (): Router => {
  const routes = Router();
  routes.use("/healthCheck", miscelaneousRoutes());
  routes.use("/formManagement", formRoutes());
  routes.use("/user", userRoutes);

  return routes;
};
