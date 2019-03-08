import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import {ShoppinglistService} from './shoppinglist.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  // ingredients: Ingredient[] = [
  //   new Ingredient('Apple',10),
  //   new Ingredient('Tomato',3),
  // ];
  ingredients: Ingredient[];

  constructor(private shopplistService: ShoppinglistService) { }

  ngOnInit() {
    this.ingredients = this.shopplistService.ingredients;
  }

  removeItem(item: Ingredient) {
    this.shopplistService.removeItem(item);
  }

  addItem(item: Ingredient) {
    this.shopplistService.addItem(item);
  }
}
