import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  recipeStatus = true;
  shoppingStatus = false;

  viewController(seleted: string){
    switch(seleted){
      case 'recipes':
        this.recipeStatus = true;
        this.shoppingStatus = false;
        break;
        case 'shopping':
        this.shoppingStatus = true;
        this.recipeStatus = false;
        break;
    }
  }
}
