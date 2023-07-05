import express from 'express'
import routes from './routes.js'
import privateRoutes from './private-routes.js'
import { config } from 'dotenv';
import {auth, isAdmin} from './middlewares/auth.js';


config()


const app = express()

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')
app.use(express.json())
app.use('/v1', privateRoutes)
app.use('/v2/seguranca', routes)
app.use('/v2', auth, isAdmin, privateRoutes)

app.get('/', (req, res) => {
  res.render('index');
})

export default app