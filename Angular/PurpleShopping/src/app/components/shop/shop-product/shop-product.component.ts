import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/models/Category';
import { Product } from 'src/app/models/Product';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { Options, LabelType } from 'ng5-slider';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-shop-product',
  templateUrl: './shop-product.component.html',
  styleUrls: ['./shop-product.component.css'],
})
export class ShopProductComponent implements OnInit {
  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private activatedRouter: ActivatedRoute,
    private messengerservice: MessengerService
  ) {}
  minPrice: number = 0;
  maxPrice: number = 20000;
  options: Options = {
    floor: 0,
    ceil: 20000,
    translate: (value: number, label: LabelType): string => {
      return '<b>' + value + '</b>';
    },
  };
  products: Product[];
  categories: Category[];
  categoryId: number;
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
        this.products = this.products.sort(
          (low, high) => low.feature.price - high.feature.price
        );
        break;
      }

      case 'High': {
        this.products = this.products.sort(
          (low, high) => high.feature.price - low.feature.price
        );
        break;
      }

      default: {
        this.products = this.products.sort(
          (low, high) => low.feature.price - high.feature.price
        );
        break;
      }
    }
  }
  addToCart(product) {
    this.messengerservice.sendMsg(product);
  }
}
