import { Pipe, PipeTransform } from '@angular/core';
import { Product } from 'src/app/models/Product';

@Pipe({
  name: 'shopProductSort',
})
export class ShopProductSortPipe implements PipeTransform {
  transform(value: Product[], minPrice?: number, maxPrice?: number): Product[] {
    if (minPrice == 0 && maxPrice == 0) {
      return value.filter((p: Product) => p.id < 0);
    }
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
