import { getCustomRepository } from 'typeorm';
import { ProductsRepositories } from '../repositories/ProductsRepositories';

interface ICreateProduct {
  product: string;
  price: string;
}

interface IShowProduct {
  id: string;
}

interface IDeleteProduct {
  id: string;
}

class ProductService {
  async create({ product, price }: ICreateProduct) {
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

  async show({ id }: IShowProduct) {
    const productsRepositories = getCustomRepository(ProductsRepositories);

    const findProduct = productsRepositories.find({ where: { id: id } });

    return findProduct;
  }

  async delete({ id }: IDeleteProduct) {
    const productRepositories = getCustomRepository(ProductsRepositories);

    const findProduct = await productRepositories.findOne({
      where: { id: id },
    });
    const deleteProduct = productRepositories.remove(findProduct);

    return deleteProduct;
  }
}

export { ProductService };
