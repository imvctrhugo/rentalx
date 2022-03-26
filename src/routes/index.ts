import { Router } from "express";

import { categoriesRoutes } from "./categories.routes";
import { specificationsRoutes } from "./specifications.routes";

const rentalxRoutes = Router();

rentalxRoutes.use("/categories", categoriesRoutes);
rentalxRoutes.use("/specifications", specificationsRoutes);

export { rentalxRoutes };
