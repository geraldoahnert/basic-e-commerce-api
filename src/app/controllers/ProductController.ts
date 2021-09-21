import { Request, Response } from 'express';
import { ProductService } from '../services/ProductService';

class ProductController {
  async index(req: Request, res: Response) {
    const id = req.params.id;

    const productService = new ProductService();

    const showProduct = await productService.show({
      id,
    });

    return res.json(showProduct);
  }

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
