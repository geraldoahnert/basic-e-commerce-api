import { json } from 'stream/consumers';
import { getCustomRepository } from 'typeorm';
import { ProductsRepositories } from '../repositories/ProductsRepositories';

interface IShowProduct {
  id: string;
}

interface IProduct {
  product: string;
  price: string;
}

class ProductService {
  async show({ id }: IShowProduct) {
    const productsRepositories = getCustomRepository(ProductsRepositories);

    const findProduct = productsRepositories.find({ where: { id: id } });

    return findProduct;
  }

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
