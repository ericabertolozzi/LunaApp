import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EricaComponent } from './erica/erica.component';
import { VirginiaComponent } from './virginia/virginia.component';

const routes: Routes = [
  { path: 'erica', component: EricaComponent },
  { path: 'virginia', component: VirginiaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
