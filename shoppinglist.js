const electron=require('electron');
const url=require('url');
const path=require('path');
const{app, BrowserWindow}=electron;
let mainWindow;
// listening for app to be ready
app.on('ready');
console.log(electron);