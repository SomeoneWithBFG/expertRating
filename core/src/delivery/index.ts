import express from "express";
import TestRouter from "./test"

const app: express.Application = express();

app.use("/api/test", TestRouter);

export default app;