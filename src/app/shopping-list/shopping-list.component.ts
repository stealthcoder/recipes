import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import {ShoppinglistService} from './shoppinglist.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[];

  constructor(private shopplistService: ShoppinglistService) { }

  ngOnInit() {
    this.ingredients = this.shopplistService.getIngredients();

    // my approach
    // this.shopplistService.removedIngredient.subscribe(
    //   (removed: Ingredient) => {
    //     this.ingredients = this.ingredients.filter(item => item.name !== removed.name);
    //   }
    // );
    //
    // this.shopplistService.addedIngredient.subscribe(
    //   (added: Ingredient) => {
    //     this.ingredients.push(added);
    //   });

    // other approach
    this.shopplistService.itemChanged.subscribe(
      (latest: Ingredient[]) => {
      this.ingredients = latest;
    });
  }
}
