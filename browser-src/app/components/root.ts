import { Component } from '@angular/core';

const WindowsManager = remote.require('application/windows-manager');

@Component({
  selector: 'app-root',
  templateUrl: './root.html'
})
export class RootComponent {
  title = 'Scotlandyard Online';

  constructor() {
    console.log('constructor');
    // WindowsManager.openThiefWindow();
  }

}
