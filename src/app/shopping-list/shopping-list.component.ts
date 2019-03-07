import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient('Apple',10),
    new Ingredient('Tomato',3),
  ];

  constructor() { }

  ngOnInit() {
  }

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
