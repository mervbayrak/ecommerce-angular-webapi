import { Pipe, PipeTransform } from '@angular/core';
import { Operation } from 'src/app/models/enums/Operation';
import { Product } from 'src/app/models/Product';

@Pipe({
  name: 'shopProductOrderby',
})
export class ShopProductOrderbyPipe implements PipeTransform {
  transform(arrayx: Product[], operation: Operation): Product[] {
    if (operation == Operation.Default)
      arrayx.sort((a: any, b: any) => {
        if (a.id < b.id) {
          return -1;
        } else if (a.id > b.id) {
          return 1;
        } else {
          return 0;
        }
      });
    else if (operation == Operation.Decreasing) {
      arrayx.sort((a: any, b: any) => {
        if (a.feature.price < b.feature.price) {
          return -1;
        } else if (a.feature.price > b.feature.price) {
          return 1;
        } else {
          return 0;
        }
      });
    } else
      arrayx.sort((a: any, b: any) => {
        if (a.feature.price < b.feature.price) {
          return 1;
        } else if (a.feature.price > b.feature.price) {
          return -1;
        } else {
          return 0;
        }
      });
    return arrayx;
  }
}
