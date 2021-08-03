import 'module-alias/register'

import Routers from './routers'
import repository from './repository'
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

repository.connect()

app.get('/', (req, res) => {
    res.send('Server is alive')
})

app.use('/api/calculations', Routers.CalculationsRouter)
app.use('/api/auth', Routers.AuthRouter)
app.use('/api/users', Routers.UsersRouter)
app.use('/api/groups', Routers.GroupsRouter)

app.listen(port, () => {
    console.log(`Express core listening at http://localhost:${port}`)
})
