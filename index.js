require('app-module-path').addPath(__dirname);
require('dotenv').config();
global.__approot = __dirname;

const {app, BrowserWindow} = require('electron');
const windowsManager = require('application/windows-manager');

const activate = ()=> {
  windowsManager.activate();
};

app.on('ready', activate);
app.on('activate', activate);
app.on('window-all-closed', ()=> {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
