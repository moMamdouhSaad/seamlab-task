import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CaruselComponent } from './carusel/carusel.component';


const routes: Routes = [{path:'test',component:CaruselComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
