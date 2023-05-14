import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipes.model';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent {
  @Input('recipeItem') item: Recipe = {name: '', description: '', imagePath: ''};
  @Output() selectedRecipe = new EventEmitter<Recipe>();

  recipeClicked(){
    //send the event 
    this.selectedRecipe.emit(this.item);
  }
}
