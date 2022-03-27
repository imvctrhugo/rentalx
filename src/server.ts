import express from "express";
import swaggerUI from "swagger-ui-express";

import { rentalxRoutes } from "./routes";
import swaggerFile from "./swagger.json";

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerFile));

app.use(rentalxRoutes);

app.listen(3333, () => console.log("Server up and running."));
