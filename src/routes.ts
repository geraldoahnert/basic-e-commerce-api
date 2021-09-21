import { Router } from 'express';

import authMiddleware from './app/middlewares/authMiddleware';

import { UserController } from './app/controllers/UserController';
import { AuthController } from './app/controllers/AuthController';

import { ProductController } from './app/controllers/ProductController';

const router = Router();

const userController = new UserController();
const authController = new AuthController();

const productController = new ProductController();

router.post('/users', userController.store);
router.post('/auth', authController.execute);
router.get('/users', authMiddleware, userController.index);

router.post('/product', productController.store);
// router.get('/product/:id', productController.show);

export default router;
