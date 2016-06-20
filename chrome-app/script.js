var PmxWebview = {
	obj: document.getElementById('playmix'),
	playPause: function(){
		PmxWebview.obj.executeScript({'code': "document.getElementsByClassName('player-btn-play-pause')[0].click()"})
	},
	next: function(){
		PmxWebview.obj.executeScript({'code': "document.getElementsByClassName('player-btn-next')[0].click()"})
	},
	previous: function(){
		PmxWebview.obj.executeScript({'code': "document.getElementsByClassName('player-btn-previous')[0].click()"})
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


chrome.commands.onCommand.addListener(function(command) { console.log(command, 151654)
    switch(command){
    	case 'play-pause': PmxWebview.playPause(); break;
    	case 'next-track': PmxWebview.next(); break;
    	case 'prev-track': PmxWebview.previous(); break;
    }
});