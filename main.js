const { app, BrowserWindow, globalShortcut, ipcMain } = require('electron');
const path = require('path')
const appUrl = `file://${__dirname}/index.html`;
let win;

function createElectronShell(){
    win = new BrowserWindow({
    	width: 400,
    	height: 300,
    	frame: false,
		minWidth: 140,
		minHeight: 95 ,
		alwaysOnTop: true,
		transparent: true,
    	toolbar: false,
    	icon: path.join(__dirname, 'img/icons/pmx-logo-128.png')
    });

    win.loadURL(appUrl); 


	globalShortcut.register('MediaPlayPause', Player.playPause );
	globalShortcut.register('MediaPlayPause+CommandOrControl', Player.playPause );

	globalShortcut.register('MediaNextTrack', Player.next );
	globalShortcut.register('MediaNextTrack+CommandOrControl', Player.next );

	globalShortcut.register('MediaPreviousTrack', Player.prev );
	globalShortcut.register('MediaPreviousTrack+CommandOrControl', Player.prev );

	win.setThumbarButtons([
	  {
	    tooltip: 'Prev',
	    icon: path.join(__dirname, 'img/interface/previous.png'),
	    click: Player.prev
	  }, 
	  {
	    tooltip: 'Play/Pause',
	    icon: path.join(__dirname, 'img/interface/playpause.png'),
	    click: Player.playPause
	  },
	  {
	    tooltip: 'Next',
	    icon: path.join(__dirname, 'img/interface/next.png'),
	    click: Player.next
	  }
	])

}

app.on('ready', createElectronShell);

var Player = {
	playPause(){
		win.webContents.send('player:playPause');
	},
	next(){
		win.webContents.send('player:next');
	},
	prev(){
		win.webContents.send('player:previous');
	}
}

