const { BrowserWindow } = require('electron');

const windows = {
  main: null,
  thief: null
};

const load = (win, route)=> {
  if (process.env.PACKAGE === 'true') {
    win.loadURL(url.format({
      pathname: path.join(__approot, `browser/index.html#/${route}`),
      protocol: 'file:',
      slashes: true
    }));
  } else {
    win.loadURL(`${process.env.HOST}#/${route}`);
    win.webContents.openDevTools();
  }
}

exports.activate = ()=> {
  if (windows.main) return;
  windows.main = new BrowserWindow();
  windows.main.on('close', ()=> windows.thief && windows.thief.close());
  windows.main.on('closed', ()=> windows.main = null);
  load(windows.main, '');
};

exports.openThiefWindow = ()=> {
  if (windows.thief) return;
  windows.thief = new BrowserWindow();
  windows.thief.on('closed', ()=> windows.thief = null);
  load(windows.thief, 'thief');
};
