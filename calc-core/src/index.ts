import 'module-alias/register'

import Routers from './routers'
import dotenv from 'dotenv'
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

dotenv.config()
const port = process.env.PORT

const app: express.Application = express()

app.use(bodyParser.json({ limit: '10mb' }))

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Server is alive')
})

app.use('/api/calculations', Routers.CalculationsRouter)

app.listen(port, () => {
    console.log(`Express core listening at http://localhost:${port}`)
})
