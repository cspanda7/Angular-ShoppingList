import { ingredient } from "src/app/shared/ingredient.model";
import {Subject} from "rxjs"

export class ShoppingListService{
//    IngredientChanged=new EventEmitter<ingredient[]>();
      IngredientChanged=new Subject<ingredient[]>();
      startedEditing=new Subject<number>();
   private ingredients:ingredient[]=[{name:'gold',amount:3}];

   getIngredient(){
    return this.ingredients.slice();
   }
   addIngredient(ingredient:ingredient){
    this.ingredients.push(ingredient);
    this.IngredientChanged.next(this.ingredients.slice());
   }
   addIngredients(ingredients:ingredient[]){
   // for(let ingredient of ingredients) 
   this.ingredients.push(...ingredients);
   this.IngredientChanged.next(this.ingredients.slice());

   }
   getIngredientById(Index:number){
         debugger;
      return this.ingredients[Index];
     }
     updateIngredient(Index:number,newIngredient:ingredient){
      this.ingredients[Index]=newIngredient;
      this.IngredientChanged.next(this.ingredients.slice());
     }
     deleteIngredient(index:number){
      this.ingredients.splice(index,1);
      this.IngredientChanged.next(this.ingredients.slice());
     }
}