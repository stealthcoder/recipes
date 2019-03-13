import {EventEmitter, Injectable, Output} from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe(
      'Mushrooms Recipe Kitchen French Dish',
      'yummy, yummy',
      'https://www.maxpixel.net/static/photo/1x/Mushrooms-Recipe-Kitchen-French-Dish-2459679.jpg',
      [
        new Ingredient('Mushroom', 20),
        new Ingredient('Meat', 1)
      ]),
    new Recipe(
      'Fish Food Recipe', 'Some yummy fish!',
     'https://cdn.pixabay.com/photo/2015/12/20/17/11/fish-1101436_960_720.jpg',
      [
        new Ingredient('Fish', 2),
        new Ingredient('Vegetables', 5)
      ])
  ];

  recipeSelected = new EventEmitter<Recipe>();

  constructor() { }

  getRecipes(){
    // only return a copy, not the reference.
    return this.recipes.slice();
  }
}
