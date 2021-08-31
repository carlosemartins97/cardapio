import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { FoodCategory } from './food-category.model';
import { FoodService } from './food.service';

@Component({
  selector: 'app-food-category',
  templateUrl: './food-category.component.html',
  styleUrls: ['./food-category.component.scss']
})
export class FoodCategoryComponent implements OnInit {
  categories: FoodCategory[] = [];


  constructor(private router: Router , private foodService: FoodService) { }

  ngOnInit(): void {
    this.categories = this.foodService.getCategories();
  }

  onChangeCategory(link: string) {
    this.router.navigate([`${link}`])
  }

}
