import {NgModule} from '@angular/core'
import {Routes,RouterModule} from '@angular/router'
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeStartComponent } from 'src/app/recipes/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from 'src/app/recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from 'src/app/recipes/recipe-edit/recipe-edit.component';
import { LoginComponent } from 'src/app/login/login.component';

const approute:Routes=[
    {path:'login',component:LoginComponent},
    {path:'',redirectTo:'/recipes',pathMatch:'full'},
    {path:'recipes',component:RecipesComponent,children:[
        {path:'',component:RecipeStartComponent},
        {path:'new',component:RecipeEditComponent},
        {path:':id',component:RecipeDetailComponent},       
        {path:':id/edit',component:RecipeEditComponent}

    ]},
    {path:'shopping-list',component:ShoppingListComponent}
]
@NgModule({
 imports:[RouterModule.forRoot(approute)],
 exports:[RouterModule]
})

export class AppRoutingModule{

}