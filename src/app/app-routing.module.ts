import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: "" , redirectTo :'home' , pathMatch: 'full'},
  {path:'home' ,  component:HomeComponent , title:'Home'},
  {path : 'details/:id' , component : DetailsComponent, title:'Details Game'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
