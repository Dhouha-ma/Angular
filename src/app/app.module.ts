import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppareilComponent } from './appareil/appareil.component';
import { CommonModule } from '@angular/common';

import { AppareilService } from './services/appareil.service';

@NgModule({
  declarations: [
    AppComponent,
    AppareilComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule
  ],
  providers: [
    AppareilService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
