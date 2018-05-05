import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AdminComponent} from './admin/admin.component';
import {AppRoutingModule} from './app-routing.module';
import {HomeComponent} from './home/home.component';
import {ActivityComponent} from './activity/activity.component';
import {ActivityLoggerService} from "./shared/activity-logger.service";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HomeComponent,
    ActivityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ActivityLoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
