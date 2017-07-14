import {Component, OnInit} from "@angular/core";
import {NgForm} from "@angular/forms";


@Component({
  selector: 'starter',
  templateUrl: './starter.component.html'
})
export class StarterComponent implements OnInit {
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
