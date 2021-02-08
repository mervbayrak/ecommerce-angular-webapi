import { Category } from './Category';
import { Feature } from './Feature';
import { ProductImage } from './ProductImage';

export class Product {
  id: number;
  name: string;
  description: string;
  categoryId: number;
  category: Category;
  featureId: number;
  feature: Feature;
  productImages: ProductImage[];
}
