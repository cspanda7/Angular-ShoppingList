import { Component,OnInit } from "@angular/core";
import { Recipe } from "src/app/recipes/recipe.model";
import { RecipeService } from "src/app/recipes/recipe.service";

@Component({
    selector:'app-recipes',
    templateUrl:'./recipes.component.html'   
})
export class RecipesComponent implements OnInit{
    selectedReceipe:Recipe;
    // recipeSelected(recipe:Recipe){
    //     console.log(recipe);
    // }
    /**
     *
     */
    constructor() {
      
    }
ngOnInit(){
    
}

}