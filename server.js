import express from 'express';
import routes from './routes/routes.js'
import { config } from 'dotenv';
import cors from 'cors';
import path from 'path';

config()

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.use(routes)

// API - Routes 
app.use('/api', routes)

// App - Routes
//app.use('/app', express.static (path.join (__dirname, '/public')))

// SET views
app.set('view engine', 'ejs');
app.set('views', './views');
app.get('/docs', (req, res) => {
    res.render('index');
})

// 404 handler
app.use((req, res) => {
    res.redirect('/docs');
  });

export default app