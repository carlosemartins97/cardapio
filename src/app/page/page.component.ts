import { Component, DoCheck, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FoodItem } from '../food-category/food-item/food-item.model';
import { FoodService } from '../food-category/food.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  foodList: FoodItem[] = [];
  params: string;

  constructor(private route: ActivatedRoute, private foodService: FoodService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params ) => {
        this.params = params['category'];
        this.foodList = this.foodService.getFoods(this.params);
      }
    )
  }

}
