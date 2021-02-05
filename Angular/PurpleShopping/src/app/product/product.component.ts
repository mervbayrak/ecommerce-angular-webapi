import { Component, OnInit } from '@angular/core';
import { Category } from '../models/Category';
import { Product } from '../models/Product';
import { CategoryService } from '../services/category.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers:[ProductService]
})
export class ProductComponent implements OnInit {

  constructor(private productService: ProductService, private categoryService: CategoryService) { }
  products:Product[];
  categories: Category[];
  
  ngOnInit(): void {
    this.getProducts();
    this.getCategories(true);
  }
  getProducts(){
    this.productService.getProduct().subscribe((data)=>{
      this.products=data;
    });
  }
  getCategories(isMain:boolean){
    this.categoryService.getCategories(isMain).subscribe((data) => {
      this.categories = data;
    });
  }
}
