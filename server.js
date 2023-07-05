import express from 'express'
import routes from './routes.js'
import privateRoutes from './private-routes.js'
import { config } from 'dotenv';
import {auth, isAdmin} from './middlewares/auth.js';
import cors from 'cors'


config()


const app = express()

app.set('view engine', 'ejs')
app.use(cors())
app.use(express.json())
app.use('/v1', privateRoutes)
app.use('/v2/seguranca', routes)
app.use('/v2', auth, isAdmin, privateRoutes)

app.get('/', (req, res) => {
  res.render('index');
})

export default app