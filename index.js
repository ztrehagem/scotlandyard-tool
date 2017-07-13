require('app-module-path').addPath(__dirname);
require('dotenv').config();
global.__approot = __dirname;

const { app } = require('electron');
const { activate } = require('application/windows-manager');

app.on('ready', activate);
app.on('activate', activate);
app.on('window-all-closed', ()=> {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
