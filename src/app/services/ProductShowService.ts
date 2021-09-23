import { getCustomRepository } from 'typeorm';
import { ProductsRepositories } from '../repositories/ProductsRepositories';

interface IGetProduct {
  id: string;
}

class ProductShowService {
  async show({ id }: IGetProduct) {
    const productsRepositories = getCustomRepository(ProductsRepositories);

    const findProduct = productsRepositories.find({ where: { id: id } });

    return findProduct;
  }
}

export { ProductShowService };
