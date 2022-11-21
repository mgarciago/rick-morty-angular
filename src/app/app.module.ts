import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';


const modules = [
  BrowserModule,
  HttpClientModule,
  AppRoutingModule,
  CoreModule,
  SharedModule
]

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    ...modules
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
