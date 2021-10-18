import { Router } from 'express';
import { UserController } from './app/controllers/UserController';
import { AuthController } from './app/controllers/AuthController';
import { ProductController } from './app/controllers/ProductController';
import authMiddleware from './app/middlewares/authMiddleware';

const router = Router();

const userController = new UserController();
const authController = new AuthController();
const productController = new ProductController();

router.post('/users', userController.handle);
router.get('/users', authMiddleware, userController.handle);

router.post('/login', authController.handle);

router.post('/product', productController.create);
router.get('/product/:id', productController.show);
router.delete('/product/:id', productController.delete);

export default router;
