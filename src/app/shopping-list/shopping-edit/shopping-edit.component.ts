import { Component, OnInit ,ViewChild,
  EventEmitter,ElementRef,Output,OnDestroy} from '@angular/core';
  import { NgForm } from '@angular/forms';
  import { Subscription } from 'rxjs/internal/Subscription';

import { ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { debuglog } from 'util';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit,OnDestroy {
  @ViewChild('f') slForm:NgForm;
  subscription:Subscription
  editMode=false
  editedItemIndex:number
  editedItem:ingredient
// @ViewChild('nameInput') nameInputRef:ElementRef
// @ViewChild('amountInput') amountInputRef:ElementRef
// @Output() ingredientAdded =new EventEmitter<ingredient>();
  constructor(private slService:ShoppingListService) { }

  ngOnInit() {
    this.subscription=this.slService.startedEditing
    .subscribe(
      (index:number)=>{
        debugger;
        this.editMode=true;
        this.editedItemIndex=index
        this.editedItem=this.slService.getIngredientById(index);
        this.slForm.setValue({
          name:this.editedItem.name,
          amount:this.editedItem.amount
        })
      }
    );
  }
   onSubmit(form:NgForm){
     const value=form.value;
     console.log(form);
  //   const nameData=this.nameInputRef.nativeElement.value;
  //   const amountData=this.amountInputRef.nativeElement.value;
    const newIngredient=new ingredient(value.name,value.amount);
    // this.ingredientAdded.emit(newIngredient);
    if(this.editMode){
      this.slService.updateIngredient(this.editedItemIndex,newIngredient);
    }
    else{
    this.slService.addIngredient(newIngredient);
    }
    form.reset();
    this.editMode=false;
  }
  onClear(){
    this.slForm.reset();
    this.editMode=false;
  }
  onDelete(){
    debugger;
    this.slService.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}

