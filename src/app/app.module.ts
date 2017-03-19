import { EqualValidator } from 'app/directives/equal-validator.directive';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, EqualValidator ],
  bootstrap:    [ AppComponent ],
})

export class AppModule { }