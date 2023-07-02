import express from 'express'
import routes from './routes.js'
import privateRoutes from './private-routes.js'
import { config } from 'dotenv';
import auth from './middlewares/auth.js';

config()


const app = express()

app.use(express.json())
app.use('/v1', privateRoutes)
app.use('/v2/seguranca', routes)
app.use('/v2', auth, privateRoutes)

export default app