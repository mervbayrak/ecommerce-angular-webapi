import { Pipe, PipeTransform } from '@angular/core';
import { Product } from 'src/app/models/Product';

@Pipe({
  name: 'shopProductFiltercolor',
})
export class ShopProductFiltercolorPipe implements PipeTransform {
  transform(value: Product[], colorName: string): Product[] {
    return colorName
      ? value.filter((p: Product) => p.feature.colorName == colorName)
      : value;
  }
}
