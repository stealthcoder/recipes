import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppinglistService {

  private ingredients: Ingredient[] = [
    new Ingredient('Apple',10),
    new Ingredient('Tomato',3),
  ];

  // addedIngredient = new EventEmitter<Ingredient>();
  // removedIngredient = new EventEmitter<Ingredient>();

  itemChanged = new EventEmitter<Ingredient[]>();

  constructor() { }

  getIngredients(){
    // only a copy, not the reference
    return this.ingredients.slice();
  }

  removeItem(item: Ingredient) {
    console.table(this.ingredients);
    console.log('removing '+ item.name);
    if (this.ingredients.find(x => x === item))
      console.log('found')
    this.ingredients = this.ingredients.filter(x => x.name !== item.name);
    console.table(this.ingredients);

    // my approach
    // this.removedIngredient.emit(item);

    // other approach
    this.itemChanged.emit(this.ingredients.slice());
  }

  addItem(item: Ingredient) {
    console.log(item);
    this.ingredients.push(item);
    console.table(this.ingredients);

    // my approach
    // this.addedIngredient.emit(item);

    // other approach
    this.itemChanged.emit(this.ingredients.slice());
  }

}
