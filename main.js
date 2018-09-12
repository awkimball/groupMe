const electron = require('electron')
const filesystem = require('fs')
const path = require('path');
const {dialog} = require('electron')

const {app, BrowserWindow} = require('electron')
let win;
function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({
    width: 1100,
    height: 650,
	titleBarStyle: "hidden",
	show: false,
  })

	//win.loadFile('app/index.html')
	win.loadURL('https://web.groupme.com', {userAgent: ""})
	var customCSS = filesystem.readFileSync("app/css/index.css", "utf8")
	var contents = win.webContents
	contents.on("dom-ready", () => {
		contents.insertCSS(customCSS)
		win.show()
		
	})
}

function showAlert() {

	dialog.showMessageBox({message: 'hi!'})


}

  
app.on('ready', createWindow)



  




