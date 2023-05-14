import { Component } from '@angular/core';
import { Recipe } from './recipes.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent {
  myRecipe: Recipe = {name: '', description: '', imagePath: ''};

  gotSomething(data: Recipe){
    this.myRecipe = data;
  }
}
