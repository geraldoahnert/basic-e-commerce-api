import { Request, Response } from 'express';
import { ProductService } from '../services/ProductService';

class ProductController {
  async show(req: Request, res: Response) {}

  async store(req: Request, res: Response) {
    const { product, price } = req.body;

    const productService = new ProductService();

    const finalProduct = await productService.execute({
      product,
      price,
    });

    return res.json(finalProduct);
  }
}

export { ProductController };
