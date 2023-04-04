import { Router } from "express";
import { miscelaneousRoutes } from "./miscelaneousRoutes";

export const appRoutes = (): Router => {
  const routes = Router();
  routes.use("/healthCheck", miscelaneousRoutes());

  return routes;
};
