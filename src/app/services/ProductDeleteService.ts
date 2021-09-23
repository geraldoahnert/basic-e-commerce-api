import { getCustomRepository } from 'typeorm';
import { ProductsRepositories } from '../repositories/ProductsRepositories';

interface IGetProduct {
  id: string;
}

class ProductDeleteService {
  async remove({ id }: IGetProduct) {
    const productRepositories = getCustomRepository(ProductsRepositories);

    const findProduct = await productRepositories.findOne({
      where: { id: id },
    });
    const deleteProduct = productRepositories.remove(findProduct);

    return deleteProduct;
  }
}

export { ProductDeleteService };
