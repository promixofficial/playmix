var {  ipcRenderer } = require('electron');

var PmxWebview = {
	obj: document.getElementById('playmix'),
	playPause: function(){
		PmxWebview.obj.executeJavaScript("_ems('playpausetoggle').emit()")
	},
	next: function(){
		PmxWebview.obj.executeJavaScript("document.getElementsByClassName('player-btn-next')[0].click()")
	},
	previous: function(){
		PmxWebview.obj.executeJavaScript("document.getElementsByClassName('player-btn-previous')[0].click()")
	}
}

document.getElementById("pmx-btn-close").onclick = function() {
	window.close();
}

PmxWebview.obj.addEventListener('permissionrequest', function(e) {
  if (e.permission === 'download') {
    e.request.allow();
  }
});



ipcRenderer.on('player:playPause', (event)=> {
  PmxWebview.playPause()
});
ipcRenderer.on('player:next', (event)=> {
  PmxWebview.next()
});
ipcRenderer.on('player:previous', (event)=> {
  PmxWebview.previous();
});