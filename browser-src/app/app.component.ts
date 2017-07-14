import { Component } from '@angular/core';

const WindowsManager = remote.require('application/windows-manager');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Scotlandyard Online';

  constructor() {
    console.log('constructor');
    // WindowsManager.openThiefWindow();
  }

}
