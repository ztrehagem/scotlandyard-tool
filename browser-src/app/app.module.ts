// imports
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import RoutingModule from './routing.module';

// desclarations
import {RootComponent} from './components/root';
import {LauncherComponent} from "./components/launcher";
import {ThiefComponent} from "./components/thief";

// providers


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    RoutingModule
  ],
  declarations: [
    RootComponent,
    LauncherComponent,
    ThiefComponent
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
