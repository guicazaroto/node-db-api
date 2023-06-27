import express from 'express'
import * as productController from '../controllers/product-controller.js'

const router = express.Router()

//DB Version
router.get('/v1/produtos', productController.index);
router.get('/v1/produtos/:id', productController.get);
router.post('/v1/produtos', productController.create);
router.put('/v1/produtos/:id', productController.update);
router.delete('/v1/produtos/:id', productController.remove);

//DB + Auth Version
router.get('/v2/produtos', productController.index);
router.get('/v2/produtos/:id', productController.get);
router.post('/v2/produtos', productController.create);
router.put('/v2/produtos/:id', productController.update);
router.delete('/v2/produtos/:id', productController.remove);

export default router