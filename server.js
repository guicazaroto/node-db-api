import express from 'express'
import freeRoutes from './routes.js'
import privateRoutes from './private-routes.js'
import { config } from 'dotenv';
import {auth, isAdmin} from './middlewares/auth.js';
import cors from 'cors'

config()


const app = express()

app.use(cors())
app.use(express.json())

app.use('/v2/seguranca', freeRoutes)
app.use('/v2', auth, isAdmin, privateRoutes)


export default app