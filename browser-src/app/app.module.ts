// imports
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import RoutingModule from './routing.module';

// desclarations
import {RootComponent} from './components/root';
import {StarterComponent} from "./components/starter";
import {ThiefComponent} from "./components/thief";

// providers


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule
  ],
  declarations: [
    RootComponent,
    StarterComponent,
    ThiefComponent
  ],
  // providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
