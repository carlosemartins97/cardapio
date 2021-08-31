import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { FoodCategory } from './food-category.model';
import { FoodItem } from './food-item/food-item.model';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  categoryLink = new Subject<string>();
  categoryList = new Subject<FoodItem[]>();


  foods: FoodItem[] = [
    new FoodItem('https://img.itdg.com.br/images/recipes/000/002/114/322150/322150_original.jpg', 'Omelete', 'entries'),
    new FoodItem('https://t2.uc.ltmcdn.com/pt/images/0/1/3/img_como_fazer_sanduiche_natural_9310_orig.jpg', 'Sanduíche', 'entries'),
    new FoodItem('https://zh.rbsdirect.com.br/imagesrc/23144398.jpg?w=700', 'Pão com manteiga', 'entries'),
    new FoodItem('https://salgadosdesucesso.com.br/wp-content/uploads/2018/09/massa-de-batata-para-salgados-1200x900.jpg', 'Salgado', 'entries'),
    new FoodItem('https://www.receitas-sem-fronteiras.com/uploads/recipe/receita-carne-de-panela-com-mandioca-e-linguica_crop.jpg?1496879355', 'Carne', 'main-dishes'),
    new FoodItem('https://img.elo7.com.br/product/original/22565B3/adesivo-parede-prato-comida-frango-salada-restaurante-lindo-adesivo-parede.jpg', 'Frango', 'main-dishes'),
    new FoodItem('http://static.clubedaanamariabraga.com.br/wp-content/uploads/2019/11/Bacalhau-1024x683.jpg', 'Peixe', 'main-dishes'),
    new FoodItem('https://www.greenme.com.br/wp-content/uploads/2020/11/gelatina.jpg', 'Gelatina', 'desserts'),
    new FoodItem('https://cdn.dooca.store/106/posts/cerveja-bem-gelada.jpg?v=1572952555&webp=0', 'Cerveja', 'drinks'),
    new FoodItem('https://www.kerokery.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/k/k/kkr-_157-sku-801___bebidas__coca-cola-lata-350ml.jpg', 'Coca cola', 'drinks'),
    new FoodItem('https://img.cybercook.com.br/receitas/766/caipirinha-de-cerveja-3.jpeg', 'Caipirinha', 'drinks'),
    new FoodItem('https://img.estadao.com.br/fotos/crop/1200x1200/resources/jpg/7/0/1519841184607.jpg', 'Brownie', 'desserts'),
  ];

  categories: FoodCategory[] = [
    {name: 'Entradas', link: 'entries'},
    {name: 'Pratos Principais', link: 'main-dishes'},
    {name: 'Sobremesas', link: 'desserts'},
    {name: 'Bebidas', link: 'drinks'},
  ];

  newFoodList: FoodItem[] = [];

  constructor() { }

  getFoods(category: string) {
    this.newFoodList = [];
    this.foods.forEach(food => {
      food.category.includes(category) ? this.newFoodList.push(food) : null;
    })
    return this.newFoodList;
  }

  getCategories() {
    return this.categories;
  }
}
