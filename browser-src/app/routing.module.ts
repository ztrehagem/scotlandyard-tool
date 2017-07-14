import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

// components
import {StarterComponent} from "./components/starter";
import {ThiefComponent} from "./components/thief";


const routes: Routes = [
  {path: '', redirectTo: '/starter', pathMatch: 'full'},
  {path: 'starter', component: StarterComponent},
  {path: 'thief', component: ThiefComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export default class {}
