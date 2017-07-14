import {Component, OnInit} from "@angular/core";


@Component({
  selector: 'thief',
  templateUrl: './thief.html'
})
export class ThiefComponent implements OnInit {
  ngOnInit(): void {
    console.log('thief on init');
  }
}
