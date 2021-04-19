import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MyInputModule } from 'ui-lib/my-input';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, MyInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
