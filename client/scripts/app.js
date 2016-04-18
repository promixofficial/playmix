angular.module('playMixApp', ['ngMaterial', 'angular-sortable-view','angularResizable','LocalForageModule']) 

.constant('YT_event', { 
  STOP:            0,
  PLAY:            1,
  PAUSE:           2,
  STATUS_CHANGE:   3,
  ENDED:           4
})

/* SERVICES
*************************/
require("./services/utilsFct"); 
require("./services/localStorage"); 
require("./services/searchFct"); 
require("./services/listFct"); 
require("./services/playlistFct"); 

/* FILTERS
*************************/


/* DIRECTIVES
*************************/
require("./directives/youtubePlayer"); 

/* CONTROLLERS
*************************/
require("./controllers/mainCtrl");