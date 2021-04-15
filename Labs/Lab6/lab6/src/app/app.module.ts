import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EricaComponent } from './erica/erica.component';
import { VirginiaComponent } from './virginia/virginia.component';
import { AjaxComponent } from './ajax/ajax.component';
import { HelenaComponent } from './helena/helena.component';
import { LaurenComponent } from './lauren/lauren.component';
import { ManyaComponent } from './manya/manya.component';
import { SimiComponent } from './simi/simi.component';


@NgModule({
  declarations: [
    AppComponent,
    EricaComponent,
    VirginiaComponent,
    AjaxComponent,
    HelenaComponent,
    LaurenComponent,
    ManyaComponent,
    SimiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
