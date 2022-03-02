import { getSingleDataOpts } from "../schemas";
import {
    getUserCompanyInfluxDataController
} from "../controllers/rest";

/* ----------------
Hotel route aggregations
contains the schema and the business logic handler
Applies for all similar files
------------------- */
export const userDataRoutes = (fastify: any, options: any, next: any) => {
  fastify.get("/one", getSingleDataOpts, getUserCompanyInfluxDataController);

  next();
};
