import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('products')
class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  product: string;

  @Column()
  price: string;
}

export default Product;
