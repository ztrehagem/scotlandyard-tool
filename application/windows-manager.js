const {BrowserWindow} = require('electron');

let mainWindow = null;

const createWindow = ()=> {
  mainWindow = new BrowserWindow();

  if (process.env.PACKAGE === 'true'){
    mainWindow.loadURL(url.format({
      pathname: path.join(__approot, 'browser/index.html'),
      protocol: 'file:',
      slashes: true
    }));
  } else {
    mainWindow.loadURL(process.env.HOST);
    mainWindow.webContents.openDevTools();
  }
  mainWindow.on('closed', ()=> {
    mainWindow = null;
  });
};

exports.activate = ()=> {
  if (!mainWindow) {
    createWindow();
  }
};

exports.openThiefWindow = ()=> {
  console.log('openThiefWindow');
};
