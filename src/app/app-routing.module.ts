import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user/user.component';
import { ApplicationComponent } from './application/application.component';
import { ShowAllOrderComponent } from './show-all-order/show-all-order.component';

const routes: Routes = [

  {path:'',component:UserComponent},
  {path:'application',component:ApplicationComponent},
  {path:'Showallorder',component:ShowAllOrderComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
