import express from 'express'
import routes from './routes.js'
import path from 'path'
import { config } from 'dotenv';

config()


const app = express()


app.use(express.json())
app.use(routes)

export default app