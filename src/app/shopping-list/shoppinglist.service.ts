import { Injectable } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppinglistService {

  ingredients: Ingredient[] = [
    new Ingredient('Apple',10),
    new Ingredient('Tomato',3),
  ];

  constructor() { }

  removeItem(item: Ingredient) {
    console.table(this.ingredients);
    console.log('removing '+ item.name);
    if (this.ingredients.find(x => x === item))
      console.log('found')
    this.ingredients = this.ingredients.filter(x => x.name !== item.name);
    console.table(this.ingredients);
  }

  addItem(item: Ingredient) {
    console.log(item);
    this.ingredients.push(item);
    console.table(this.ingredients);
  }

}
