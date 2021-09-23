import { Request, Response } from 'express';
import { ProductRegisterService } from '../services/ProductRegisterService';

class ProductRegisterController {
  async handle(req: Request, res: Response) {
    const { product, price } = req.body;

    const productRegisterService = new ProductRegisterService();

    const finalProduct = await productRegisterService.execute({
      product,
      price,
    });

    return res.json(finalProduct);
  }
}

export { ProductRegisterController };
