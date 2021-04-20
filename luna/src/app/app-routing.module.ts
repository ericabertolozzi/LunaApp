import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LearnComponent } from './learn/learn.component';
import { TrackingComponent } from './tracking/tracking.component';

const routes: Routes = [
  { path: 'learn', component: LearnComponent },
  { path: 'tracking',component: TrackingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
