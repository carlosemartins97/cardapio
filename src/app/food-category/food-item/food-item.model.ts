export class FoodItem {
  imagePath: string;
  name: string;
  category: string;

  constructor(imagePath: string, name: string, category: string) {
    this.imagePath = imagePath;
    this.name = name;
    this.category = category;
  }
}