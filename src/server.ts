import express from "express";

import { rentalxRoutes } from "./routes";

const app = express();

app.use(express.json());

app.use(rentalxRoutes);

app.listen(3333, () => console.log("Server up and running."));
