import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router'
import { Recipe } from 'src/app/recipes/recipe.model';
import { RecipeService } from 'src/app/recipes/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  //providers:[RecipeService]
})
export class RecipeListComponent implements OnInit {
  // @Output() recipeSelected=new EventEmitter<Recipe>();
  recipes:Recipe[];
  constructor(private recipeService:RecipeService,
    private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.recipeService.recipeChanged.subscribe(
      (recipes:Recipe[])=>{this.recipes=recipes}
    )
    this.recipes=this.recipeService.getRecipes();
  }
  selectedReceipe(recipe:Recipe){
    debugger;
    this.recipeService.recipeSelected.emit(recipe);
  }
  onNewRecipe(){
    this.router.navigate(['new'],{relativeTo:this.route});
  }
}
