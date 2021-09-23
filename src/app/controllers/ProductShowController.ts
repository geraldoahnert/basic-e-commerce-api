import { Request, Response } from 'express';
import { ProductShowService } from '../services/ProductShowService';

class ProductShowController {
  async handle(req: Request, res: Response) {
    const id = req.params.id;

    const productShowService = new ProductShowService();

    const showProduct = await productShowService.show({
      id,
    });

    return res.json(showProduct);
  }
}

export { ProductShowController };
