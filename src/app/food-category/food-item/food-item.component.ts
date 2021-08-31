import { Component, Input, OnInit } from '@angular/core';
import { FoodItem } from './food-item.model';

@Component({
  selector: 'app-food-item',
  templateUrl: './food-item.component.html',
  styleUrls: ['./food-item.component.scss']
})
export class FoodItemComponent implements OnInit {
  @Input() food: FoodItem;

  constructor() { }

  ngOnInit(): void {
    
  }

}
