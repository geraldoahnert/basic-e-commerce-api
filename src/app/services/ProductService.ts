import { getCustomRepository } from 'typeorm';
import { ProductsRepositories } from '../repositories/ProductsRepositories';
interface IGetProduct {
  id: string;
}

interface IProduct {
  product: string;
  price: string;
}

class ProductService {
  async remove({ id }: IGetProduct) {
    const productRepositories = getCustomRepository(ProductsRepositories);

    const findProduct = await productRepositories.findOne({
      where: { id: id },
    });
    const deleteProduct = productRepositories.remove(findProduct);

    return deleteProduct;
  }

  async show({ id }: IGetProduct) {
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
