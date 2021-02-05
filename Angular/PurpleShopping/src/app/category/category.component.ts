import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/Category';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers: [CategoryService],
})
export class CategoryComponent implements OnInit {
  constructor(private categoryService: CategoryService) {}

  categories: Category[];
  bntStyleCategory: string;

  ngOnInit(): void {
    this.getCategories(true);
    this.bntStyleCategory = 'cate-dropdown show';
  }
  getCategories(isMain: boolean) {
    this.categoryService.getCategories(isMain).subscribe((data) => {
      this.categories = data;
    });
  }
  categoryClick() {
    if (this.bntStyleCategory === 'cate-dropdown')
      this.bntStyleCategory = 'cate-dropdown show';
    else this.bntStyleCategory = 'cate-dropdown';
  }
  subCategoryClick(i: number): void {
    var element = document.getElementsByClassName('subcate-drowdown')[i];
    if (element.classList.contains('show')) element.classList.remove('show');
    else element.classList.add('show');
  }
}
