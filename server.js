import express from 'express'
import routes from './routes.js'
import { config } from 'dotenv';
import auth from './middlewares/auth.js';

config()


const app = express()


app.use(express.json())
app.use(routes)
app.use('/v2', auth,routes)

export default app