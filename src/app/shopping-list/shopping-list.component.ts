import { Component, OnInit,OnDestroy } from '@angular/core';
import {Subscription} from 'rxjs'
import { ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit,OnDestroy {
  ingredients:ingredient[];
  private subscription:Subscription
  constructor(private slService:ShoppingListService) { }

  ngOnInit() {
    this.ingredients=this.slService.getIngredient();
    this.subscription=this.slService.IngredientChanged.subscribe(
      (ingredients:ingredient[])=>{this.ingredients=ingredients}
    )
  }
  onEditItem(index:number){
    debugger;
    this.slService.startedEditing.next(index);
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
  
}
