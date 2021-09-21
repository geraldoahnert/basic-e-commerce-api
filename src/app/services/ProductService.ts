import { getCustomRepository } from 'typeorm';
import { ProductsRepositories } from '../repositories/ProductsRepositories';

interface IProduct {
  product: string;
  price: string;
}

class ProductService {
  async execute({ product, price }: IProduct) {
    const productsRepositories = getCustomRepository(ProductsRepositories);

    const productExists = await productsRepositories.findOne({
      where: { product },
    });

    if (productExists) {
      throw new Error('Product already exists!');
    }

    const finalProduct = productsRepositories.create({ product, price });

    await productsRepositories.save(finalProduct);

    return finalProduct;
  }
}

export { ProductService };
