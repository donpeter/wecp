import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminComponent} from "./admin/admin.component";
import {HomeComponent} from "./home/home.component";
import {ActivityComponent} from "./activity/activity.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },{
    path: ':id',
    component: ActivityComponent
  },{
    path: ':id/admin',
    component: AdminComponent
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
