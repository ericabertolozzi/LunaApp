import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EricaComponent } from './erica/erica.component';
import { HelenaComponent } from './helena/helena.component';
import { LaurenComponent } from './lauren/lauren.component';
import { ManyaComponent } from './manya/manya.component';
import { SimiComponent } from './simi/simi.component';
import { VirginiaComponent } from './virginia/virginia.component';

const routes: Routes = [
  { path: 'erica', component: EricaComponent },
  { path: 'helena', component: HelenaComponent },
  { path: 'lauren', component: LaurenComponent },
  { path: 'manya', component: ManyaComponent },
  { path: 'simi', component: SimiComponent },
  { path: 'virginia', component: VirginiaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
