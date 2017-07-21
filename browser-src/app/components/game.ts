import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'game',
  templateUrl: './game.html',
  styleUrls: ['./game.styl']
})
export class GameComponent implements OnInit {
  ngOnInit(): void {
    console.log('game component oninit');
  }
}
