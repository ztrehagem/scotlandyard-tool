import {Component, OnInit, trigger, state, style, transition, animate} from "@angular/core";
import {NgForm} from "@angular/forms";
import {DEFAULT_SERVER_PORT} from "app/constants";

@Component({
  selector: 'launcher',
  templateUrl: './launcher.html',
  styleUrls: ['./launcher.styl'],
  animations: [
    trigger('collapse', [
      state('uncollapsed', style({
        height: '*'
      })),
      state('collapsed', style({
        height: 0
      })),
      transition('* => *', animate('200ms ease')),
    ])
  ]
})
export class LauncherComponent implements OnInit {
  port = DEFAULT_SERVER_PORT;
  collapsed = {join: true, host: true};
  collapsedStr = {join: 'collapsed', host: 'collapsed'};

  ngOnInit(): void {
    console.log('launcher oninit');
  }
  onJoin(form: NgForm) {
    console.log('join address', form.value);
  }
  onHost(form: NgForm) {
    console.log('host address', form.value);
  }
  toggleCollapse(target: string) {
    this.collapsed[target] = !this.collapsed[target];
    this.collapsedStr[target] = this.collapsedStr[target] == 'collapsed' ? 'uncollapsed' : 'collapsed';
  }
}
