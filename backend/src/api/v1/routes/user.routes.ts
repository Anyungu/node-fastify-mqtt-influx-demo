import { createSingleUserOpts, getSingleUserOpts } from "../schemas";
import {
  getUserController,
  createUserController,
} from "../controllers/rest/user.controller";

/* ----------------
Hotel route aggregations
contains the schema and the business logic handler
Applies for all similar files
------------------- */
export const userRoutes = (fastify: any, options: any, next: any) => {
  fastify.get("/one/:user", getSingleUserOpts, getUserController);

  fastify.post("/create", createSingleUserOpts, createUserController);

  next();
};
