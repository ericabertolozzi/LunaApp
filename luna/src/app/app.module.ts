import { MbscModule } from '@mobiscroll/angular';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SafePipeModule } from 'safe-pipe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LearnComponent } from './learn/learn.component';
import { HomeComponent } from './home/home.component';
import { AjaxComponent } from './ajax/ajax.component';
import { TrackingComponent } from './tracking/tracking.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { CalendarComponent } from './calendar/calendar.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LearnComponent,
    HomeComponent,
    AjaxComponent,
    TrackingComponent,
    ShoppingComponent,
    CalendarComponent,
    SettingsComponent
  ],
  imports: [ 
    MbscModule, 
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientJsonpModule,
    SafePipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }




