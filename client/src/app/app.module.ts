import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { ActivityComponent } from './activity/activity.component';
import {ActivityService} from "./shared/activity.service";
import {HttpClient} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HomeComponent,
    ActivityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ActivityService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
