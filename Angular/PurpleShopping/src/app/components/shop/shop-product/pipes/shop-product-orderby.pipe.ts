import { Pipe, PipeTransform } from '@angular/core';
import { Operation } from 'src/app/models/enums/Operation';
import { Product } from 'src/app/models/Product';

@Pipe({
  name: 'shopProductOrderby',
})
export class ShopProductOrderbyPipe implements PipeTransform {
  transform(arrayx: Product[], operation: Operation): Product[] {

    arrayx.sort((a: Product, b: Product) => {
      let first = 0, second = 0;

      switch (operation) {
        case Operation.Default: {
          first = a.id;
          second = b.id;
          break;
        }
        case Operation.Decreasing: {
          first = a.feature.price;
          second = b.feature.price;
          break;
        }
        case Operation.Increasing: {
          first = b.feature.price;
          second = a.feature.price;
          break;
        }    
        default:
          break;
      }

      if (first < second) {
        return -1;
      } else if (first > second) {
        return 1;
      } else {
        return 0;
      }
    });
  
    return arrayx;
  }
}
