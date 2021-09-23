import { Router } from 'express';

import { UserController } from './app/controllers/UserController';

import { AuthController } from './app/controllers/AuthController';

import { ProductRegisterController } from './app/controllers/ProductRegisterController';
import { ProductShowController } from './app/controllers/ProductShowController';
import { ProductDeleteController } from './app/controllers/ProductDeleteController';

import authMiddleware from './app/middlewares/authMiddleware';

const router = Router();

const userController = new UserController();

const authController = new AuthController();

const productRegisterController = new ProductRegisterController();
const productShowController = new ProductShowController();
const productDeleteController = new ProductDeleteController();

router.post('/users', userController.handle);
router.get('/users', authMiddleware, userController.handle);

router.post('/login', authController.handle);

router.post('/product', productRegisterController.handle);
router.get('/product/:id', productShowController.handle);
router.delete('/product/:id', productDeleteController.handle);

export default router;
