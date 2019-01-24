const path = require('path')
// Basic init
const electron = require('electron')
const {app, BrowserWindow} = electron

// Let electron reloads by itself when webpack watches changes in ./app/


// require('electron-reload')(__dirname, {
//   electron: path.join(__dirname, 'node_modules', 'electron')
// });

// Refers to https://ourcodeworld.com/articles/read/523/how-to-use-the-react-dev-tools-in-electron-framework
// let pathToReactExtension = ``;
// pathToReactExtension = String.raw `/home/erick/.config/google-chrome/Default/Extensions/fmkadmapgofadopljbjfkapdkoienihi`;
// let finalPartOfPathToReact = "/3.3.2_0/"
// pathToReactExtension += finalPartOfPathToReact;
function loadExtensions() {
  //Add extensions
  const { default: installExtension, REACT_DEVELOPER_TOOLS } = require('electron-devtools-installer');

  installExtension(REACT_DEVELOPER_TOOLS).then((name) => {
      console.log(`Added Extension:  ${name}`);
  })
  .catch((err) => {
      console.log('An error occurred: ', err);
  });
}

// To avoid being garbage collected
let mainWindow

app.on('ready', () => {
    // BrowserWindow.addDevToolsExtension(pathToReactExtension);
    // loadExtensions();
    mainWindow = new BrowserWindow({minWidth: 1024, minHeight: 740, show: true});
    mainWindow.loadURL(`file://${__dirname}/src/index.html`)
    //mainWindow.webContents.openDevTools()


    app.on('window-all-closed', ()=> {
        app.quit();
    });

    mainWindow.on('before-quit', () => {
        mainWindow.removeAllListeners('close');
        mainWindow.close();
    });


})
