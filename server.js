import express from 'express'
import routes from './routes.js'
import privateRoutes from './private-routes.js'
import { config } from 'dotenv';
import {auth, isAdmin} from './middlewares/auth.js';


config()


const app = express()

app.use(express.json())
app.use('/v1', privateRoutes)
app.use('/v2/seguranca', routes)
app.use('/v2', auth, privateRoutes)
app.use('/v3', auth, isAdmin, privateRoutes)

export default app