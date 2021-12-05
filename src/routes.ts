import { Router } from 'express';
import { UserController } from './app/controllers/UserController';
import { AuthController } from './app/controllers/AuthController';
import { ProductController } from './app/controllers/ProductController';
import authMiddleware from './app/middlewares/authMiddleware';

const router = Router();

const userController = new UserController();
const authController = new AuthController();
const productController = new ProductController();

router.post('/login', authController.handle);

router.post('/users', userController.store);
router.get('/users', authMiddleware, userController.handle);

router.post('/product', authMiddleware, productController.create);
router.get('/product/:id', authMiddleware, productController.show);
router.delete('/product/:id', authMiddleware, productController.delete);

export default router;
