import dotenv from 'dotenv'

dotenv.config()

import express from 'express'
import cors from 'cors'
import { database } from './database'
import { router } from './routes'

const app = express()

app.use(cors())

app.use(express.json())

app.use(router)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log('Started!')
    database().authenticate().then(() => console.log('Database connection estabilished!'))
})
