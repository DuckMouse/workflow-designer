import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { UiModule } from '@workflow-designer/ui';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, UiModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
