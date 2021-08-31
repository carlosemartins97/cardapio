import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FoodCategoryComponent } from "./food-category/food-category.component";
import { FoodItemComponent } from "./food-category/food-item/food-item.component";
import { PageComponent } from "./page/page.component";

const appRoutes: Routes = [
  { path: '', redirectTo: 'entries', pathMatch: 'full'}, 
  { path: ':category', component: PageComponent},

  {path: '**', redirectTo: ''}, //need to be the last path
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}