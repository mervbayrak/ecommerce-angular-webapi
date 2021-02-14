import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/models/Category';
import { Product } from 'src/app/models/Product';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { Options, LabelType } from 'ng5-slider';
import { MessengerService } from 'src/app/services/messenger.service';
import { Operation } from 'src/app/models/enums/Operation';
import { Color } from 'src/app/models/filters/Color';

@Component({
  selector: 'app-shop-product',
  templateUrl: './shop-product.component.html',
  styleUrls: ['./shop-product.component.css'],
})
export class ShopProductComponent implements OnInit {
  operation: Operation = Operation.Default;
  products: Product[];
  categories: Category[];
  categoryId: number;
  minPrice: number = 0;
  maxPrice: number = 20000;
  options: Options = {
    floor: 0,
    ceil: 20000,
    translate: (value: number, label: LabelType): string => {
      return '<b>' + value + '</b>';
    },
  };
  colors: Color[] = [
    { name: 'Beyaz', colorcode: '#f8f9fa' },
    { name: 'Siyah', colorcode: '#333' },
    { name: 'Krem', colorcode: '#fbeab7' },
    { name: 'Gümüş', colorcode: '#ebebeb' },
  ];
  colorName: string;

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private activatedRouter: ActivatedRoute,
    private messengerservice: MessengerService
  ) {}
 
  ngOnInit(): void {
    this.getProducts();
    this.getCategories(true);
  }

  getProducts() {
    this.activatedRouter.params.subscribe((params) => {
      this.categoryId = params['categoryId'];
      this.productService.getProduct(this.categoryId).subscribe((data) => {
        this.products = data;
      });
    });
  }

  getCategories(isMain: boolean) {
    this.categoryService.getCategories(isMain).subscribe((data) => {
      this.categories = data;
    });
  }

  sort(event: any) {
    switch (event.target.value) {
      case 'Low': {
        this.operation = Operation.Decreasing;
        break;
      }

      case 'High': {
        this.operation = Operation.Increasing;
        break;
      }

      default: {
        this.operation = Operation.Default;
        break;
      }
    }
  }

  addToCart(product) {
    this.messengerservice.sendMsg(product);
  }

  selectColor(color: Color) {
    this.colorName = color.name;
  }
}
