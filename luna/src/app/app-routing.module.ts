import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LearnComponent } from './learn/learn.component';
import { CalendarComponent } from './calendar/calendar.component';
import { TrackingComponent } from './tracking/tracking.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { SettingsComponent } from './settings/settings.component';


const routes: Routes = [
  { path: 'learn', component: LearnComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent },
  { path: 'tracking',component: TrackingComponent },
  { path: 'shopping', component: ShoppingComponent },
  { path: 'settings', component: SettingsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
