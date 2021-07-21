import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProcesspensionComponent } from './processpension/processpension.component';

const routes: Routes = [
  //{path:'',component:LoginComponent},
  {path:'',component:ProcesspensionComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
