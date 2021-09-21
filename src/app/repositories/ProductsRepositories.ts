import { EntityRepository, Repository } from 'typeorm';
import Product from '../models/Product';

@EntityRepository(Product)
class ProductsRepositories extends Repository<Product> {}

export { ProductsRepositories };
