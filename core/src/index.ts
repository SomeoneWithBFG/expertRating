import Routers from "./routers";
import repository from "./repository";
import dotenv from "dotenv";
import express from "express";

dotenv.config()
const port = process.env.PORT

const app: express.Application = express();

repository.connect();

app.use("/api/test", Routers.TestRouter);
app.use("/api/calculations", Routers.CalculationsRouter);

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Express core listening at http://localhost:${port}`)
})
