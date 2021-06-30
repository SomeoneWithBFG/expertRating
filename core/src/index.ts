// import Routers from "./routers/index";
import dotenv from "dotenv";
import app from "./delivery"

dotenv.config()
const port = process.env.PORT

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Express core listening at http://localhost:${port}`)
})