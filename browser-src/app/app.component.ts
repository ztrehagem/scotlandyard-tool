import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor() {
    console.log('constructor');
    const WindowsManager = remote.require('application/windows-manager');
    WindowsManager.openThiefWindow();
  }

}
