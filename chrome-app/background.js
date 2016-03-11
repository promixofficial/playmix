chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('chrome-app/play-mix.html', {
  //chrome.app.window.create('public/index.html', {
  	frame: "none",
    innerBounds: {
    	'width': 410,
      	'height': 230,
    	minWidth: 340,
    	minHeight: 50
    },
    alwaysOnTop: true,
  });
});


