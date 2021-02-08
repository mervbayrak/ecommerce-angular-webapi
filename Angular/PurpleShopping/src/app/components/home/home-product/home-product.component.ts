import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/models/Category';
import { Product } from 'src/app/models/Product';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home-product',
  templateUrl: './home-product.component.html',
  styleUrls: ['./home-product.component.css'],
})
export class HomeProductComponent implements OnInit {
  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private activatedRouter: ActivatedRoute
  ) {}
  products: Product[];
  categories: Category[];
  categoryId: number;
  cateSelectAllClass: string;

  ngOnInit(): void {
    this.getProducts();
    this.getCategories(true);
    this.cateSelectAllClass = 'active';
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
      if (this.categoryId != null) this.setCateListSelect(this.categoryId);
    });
  }
  setCateListSelect(categoryId) {
    for (let cat of this.categories) {
      if (cat.id == categoryId) cat.className = 'active';
      else cat.className = '';
    }
    this.cateSelectAllClass = '';
  }
}
