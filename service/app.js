import express from "express";
import nseController from "./controllers/nse_controller.js";
const app = express();
app.use("/", nseController);

export default app;
