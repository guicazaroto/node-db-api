import express from 'express'
import * as productController from './controllers/product-controller.js'

const router = express.Router()

//DB Version
router.get('/produtos', productController.index);
router.get('/produtos/:id', productController.get);
router.post('/produtos', productController.create);
router.put('/produtos/:id', productController.update);
router.delete('/produtos/:id', productController.remove);

export default router