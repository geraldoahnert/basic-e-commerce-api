import { Request, Response } from 'express';
import { ProductService } from '../services/ProductService';

class ProductController {
  async create(req: Request, res: Response) {
    const { product, price } = req.body;

    const productService = new ProductService();

    const finalProduct = await productService.create({
      product,
      price,
    });

    return res.json(finalProduct);
  }

  async show(req: Request, res: Response) {
    const id = req.params.id;

    const productService = new ProductService();

    const showProduct = await productService.show({
      id,
    });

    return res.json(showProduct);
  }

  async delete(req: Request, res: Response) {
    const id = req.params.id;

    const productService = new ProductService();

    const deleteProduct = await productService.delete({
      id,
    });

    return res.json({
      Status: 'Product has been deleted.',
      Product: deleteProduct,
    });
  }
}

export { ProductController };
