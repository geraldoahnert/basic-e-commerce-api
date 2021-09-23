import { Request, Response } from 'express';
import { ProductDeleteService } from '../services/ProductDeleteService';

class ProductDeleteController {
  async handle(req: Request, res: Response) {
    const id = req.params.id;

    const productDeleteService = new ProductDeleteService();

    const deleteProduct = await productDeleteService.remove({
      id,
    });

    return res.json({
      Status: 'Product has been deleted.',
      Product: deleteProduct,
    });
  }
}

export { ProductDeleteController };
