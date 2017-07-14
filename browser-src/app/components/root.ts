import { Component } from '@angular/core';

const WindowsManager = remote.require('application/windows-manager');

@Component({
  selector: 'app-root',
  templateUrl: './root.html',
  styleUrls: ['./root.styl']
})
export class RootComponent {
  title = 'Scotlandyard Online';

  constructor() {
    console.log('constructor');
    // WindowsManager.openThiefWindow();
  }

}
