import { Component, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent {
  recipes: Recipe[] = [
    new Recipe('Sample', 'Just to test if this works', 
    'https://cdn.britannica.com/98/235798-050-3C3BA15D/Hamburger-and-french-fries-paper-box.jpg')
  ];  

  @Output() selectedRecipe = new EventEmitter<Recipe>();

  gotSomething(data: Recipe){
    this.selectedRecipe.emit(data);
  }
}
