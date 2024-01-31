import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodolistComponent } from './page/todolist/todolist.component';
import { TodoAddComponent } from './page/todo-add/todo-add.component';
import { TodoEditComponent } from './page/todo-edit/todo-edit.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [//router-outlet hiya li te5ou fihom hasb l path


  {path:"",redirectTo:'todo/list',pathMatch:'full'},
  {path:"todo/list",
  component:TodolistComponent},
  {path:"todo/form/ajouter",
  component:TodoAddComponent},
  {path:"todo/form/modifier/:id",
  component:TodoEditComponent}, 
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
