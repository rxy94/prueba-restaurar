import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { CounterSnippetComponent } from './counterSnippets/counterSnippet.component';
import { CounterStandaloneComponent } from './counterStandalone/counterStandalone.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CounterSnippetComponent,
    CounterStandaloneComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
