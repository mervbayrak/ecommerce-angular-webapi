import { Pipe, PipeTransform } from '@angular/core';
import { Product } from 'src/app/models/Product';

@Pipe({
  name: 'shopProductSort',
})
export class ShopProductSortPipe implements PipeTransform {
  transform(value: Product[], minPrice?: number, maxPrice?: number): Product[] {
    minPrice = minPrice ? minPrice : 0;
    return maxPrice
      ? value
        ? value.filter(
            (p: Product) =>
              p.feature.price >= minPrice && p.feature.price <= maxPrice
          )
        : value
      : value.filter((p: Product) => p.feature.price >= minPrice);
  }
}
