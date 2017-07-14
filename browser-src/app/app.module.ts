// imports
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import AppRoutingModule from './app-routing.module';

// desclarations
import {AppComponent} from './app.component';
import {StarterComponent} from "./starter.component";
import {ThiefComponent} from "./thief.component";

// providers


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    StarterComponent,
    ThiefComponent
  ],
  // providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
