import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppinglistService} from '../../services/shoppinglist.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') name: ElementRef;
  @ViewChild('amountInput') amount: ElementRef;
  @Output('addIngredient') ingredientAdded = new EventEmitter<Ingredient>();
  @Output('removeIngredient') ingredientRemove = new EventEmitter<Ingredient>();

  constructor(private shoppinglistService: ShoppinglistService) { }

  ngOnInit() {

  }

  add() {
    // this.ingredientAdded.emit(new Ingredient(this.name.nativeElement.value, this.amount.nativeElement.value));
    const name = this.name.nativeElement.value;
    const amount = this.amount.nativeElement.value;
    const ingredient = new Ingredient(name, amount);

    //this.ingredientAdded.emit(ingredient);



  }

  remove() {
    this.ingredientRemove.emit(new Ingredient(this.name.nativeElement.value,  this.amount.nativeElement.value));
  }
}
