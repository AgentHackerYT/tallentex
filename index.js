const { app, BrowserWindow } = require('electron')

function createWindow () {
  const win = new BrowserWindow({
    width: 1920,
    height: 1080,
  })
  win.loadURL("https://tallentex.allenoverseas.com/home")
}

app.whenReady().then(() => {
  createWindow()
})
