import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

// components
import {LauncherComponent} from "./components/launcher";
import {ThiefComponent} from "./components/thief";
import {GameComponent} from "./components/game";

const routes: Routes = [
  {path: '', redirectTo: '/launcher', pathMatch: 'full'},
  {path: 'launcher', component: LauncherComponent},
  {path: 'thief', component: ThiefComponent},
  {path: 'game', component: GameComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export default class {}
