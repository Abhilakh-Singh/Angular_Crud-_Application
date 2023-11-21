import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { List1Component } from './list1/list1.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { EmpDataComponent } from './emp-data/emp-data.component';
import { AuthGuard } from './auth.guard';
import { LoaderComponent } from './loader/loader.component';



const routes: Routes = [
 
  { path: '',redirectTo:'/login',pathMatch:'full'},
 
  { path: 'login',component: LoginComponent},

  { path: 'loader',component: LoaderComponent},
    
  { path: 'signup', component: SignupComponent},

  {path: 'list1', component: List1Component,canActivate:[AuthGuard] },
   
  { path: 'EmpData', component: EmpDataComponent,canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
