import {EventEmitter,Injectable} from "@angular/core"
import {Subject} from "rxjs"
import { Recipe } from "src/app/recipes/recipe.model";
import { ingredient } from "src/app/shared/ingredient.model";
import { ShoppingListService } from "src/app/shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
    recipeChanged=new Subject<Recipe[]>();
    recipeSelected=new EventEmitter<Recipe>();
    private recipes:Recipe[]=[
        new Recipe('Recipe 1','Recipe 1',
        'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
        [
            new ingredient('meat',1),
            new ingredient('coke',1)
        ],
        
    ),
    new Recipe('Recipe 2','Recipe 2',
        'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
        [
            new ingredient('sprouts',1),
            new ingredient('juice',1)
        ]
    )     
    ];
    constructor(private slService:ShoppingListService){

    }
    getRecipes(){
          return this.recipes.slice();
      }
    getRecipe(index:number){
        return this.recipes[index];
      }
    addIngredientsToShoppingList(ingredients:ingredient[]){
        this.slService.addIngredients(ingredients);
      }
    addRecipe(recipe:Recipe){
        this.recipes.push(recipe);
        this.recipeChanged.next(this.recipes.slice());
      }
    updateRecipe(index:number,newRecipe:Recipe){
        this.recipes[index]=newRecipe;
        this.recipeChanged.next(this.recipes.slice());
      }
    deleteRecipe(index:number){
        debugger;
    this.recipes.splice(index,1);
    this.recipeChanged.next(this.recipes.slice());
    }
}