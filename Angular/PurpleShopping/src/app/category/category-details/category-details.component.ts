import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/models/Category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css']
})
export class CategoryDetailsComponent implements OnInit {

  constructor(private categoryService:CategoryService) { }
  categories: Category[];

  ngOnInit(): void {
    
  }
  
  getCategories(isMain: boolean) {
    this.categoryService.getCategories(isMain).subscribe((data) => {
      this.categories=data;
    });
  }

}
