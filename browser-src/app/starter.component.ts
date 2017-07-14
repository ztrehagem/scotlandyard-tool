import {Component, OnInit} from "@angular/core";
import {NgForm} from "@angular/forms";
import {DEFAULT_SERVER_PORT} from "./constants";

@Component({
  selector: 'starter',
  templateUrl: './starter.component.html'
})
export class StarterComponent implements OnInit {
  port = DEFAULT_SERVER_PORT;

  ngOnInit(): void {
    console.log('starter oninit');
  }
  onJoin(form: NgForm) {
    console.log('join address', form.value);
  }
  onHost(form: NgForm) {
    console.log('host address', form.value);
  }
}
