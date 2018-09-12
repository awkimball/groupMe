const electron = require('electron')

const {app, BrowserWindow} = require('electron')
  
  function createWindow () {
    // Create the browser window.
    win = new BrowserWindow({
      width: 1100,
      height: 650,
      frame: false
    })
  
    // and load the index.html of the app.
    win.loadURL('https://web.groupme.com', {userAgent: ''})

    //win.webContents.openDevTools()
  }
  
  app.on('ready', createWindow)

