import {Component, OnInit, trigger, state, style, transition, animate} from "@angular/core";
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import {DEFAULT_SERVER_PORT} from "app/constants";

@Component({
  selector: 'launcher',
  templateUrl: './launcher.html',
  styleUrls: ['./launcher.styl'],
  animations: [
    trigger('collapse', [
      transition('void => *', [
        style({height: 0}), animate('250ms ease-out', style({height: '*'}))
      ]),
      transition('* => void', [
        style({height: '*'}), animate('250ms ease-in', style({height: 0}))
      ])
    ])
  ]
})
export class LauncherComponent implements OnInit {
  defaultServerPort = DEFAULT_SERVER_PORT;
  collapsed = {join: true, host: true};

  constructor(
    private router: Router
  ) {}
  ngOnInit(): void {
    console.log('launcher oninit');
  }
  onJoin(form: NgForm) {
    console.log('join address', form.value);
  }
  onHost(form: NgForm) {
    console.log('host address', form.value);
    this.router.navigate(['game']);
  }
  toggleCollapse(target: string) {
    this.collapsed[target] = !this.collapsed[target];
  }
}
