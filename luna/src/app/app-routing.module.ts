import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';






import { LearnComponent } from './learn/learn.component';
import { TrackingComponent } from './tracking/tracking.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'learn', component: LearnComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'home', component: HomeComponent },
  { path: 'tracking',component: TrackingComponent },


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
