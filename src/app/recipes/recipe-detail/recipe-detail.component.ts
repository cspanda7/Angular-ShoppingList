import { Component, OnInit,Input} from '@angular/core';
import { Recipe } from 'src/app/recipes/recipe.model';
import { RecipeService } from 'src/app/recipes/recipe.service';
import { ActivatedRoute,Params,Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe:Recipe
  id:number
  constructor(private recipeService:RecipeService,
  private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params:Params)=>{
        this.id=+params["id"];
        this.recipe=this.recipeService.getRecipe(this.id);
      }
    )
  }
  onAddToShoppingList(){
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
  onEditRecipe(){
    debugger;
    this.router.navigate(['edit'],{relativeTo:this.route});
  }
  onDeleteRecipe(){
    debugger;
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }
}
