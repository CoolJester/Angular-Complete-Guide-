import { Component, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @Output() addValues = new EventEmitter<Ingredient>();
  onAdd(name: string, amount: string){
    this.addValues.emit({name: name, amount: parseInt(amount)});
  }
}
