"use strict"

angular.module("playMixApp")
.controller('mainCtrl', function ($scope, $rootScope, $timeout, $mdSidenav, $log, YT_event, listFct, playlistFct) {


      $scope.topDirections = ['left', 'up'];
      $scope.bottomDirections = ['down', 'right']; 
      $scope.isOpen = false;
      $scope.availableModes = ['md-fling', 'md-scale'];
      $scope.selectedMode = 'md-fling'; 
      $scope.availableDirections = ['up', 'down', 'left', 'right'];
      $scope.selectedDirection = 'right';









  $rootScope.$on(YT_event.STATUS_CHANGE, function(event, data) {
      $scope.Playlist.playerStatus = data;
      if(data === "ENDED"){
        $scope.Playlist.onEnd();
      }
  });
  
  $scope.Lists = listFct;

  $scope.Playlist = playlistFct;
  
  class SectionManager{
    constructor(){
      this.isClosed = true;
    }
    close(){
      this.isClosed = true;
    }
    open(){
      this.isClosed = false;
    }
    toggle(){
      this.isClosed = !this.isClosed;
    }
  }
  
  $scope.SectionsManager = {
    List: new SectionManager(),
    ListVideo: new SectionManager(),
    Playlist: new SectionManager(),
    LeftSection: {
      url: function(){
        var listUrl = 'templates/lists.html',
            listVideoUrl = 'templates/listVideo.html';
        return ($scope.SectionsManager.ListVideo.isClosed ? listUrl : listVideoUrl);
      },
      isClosed: function(){
        var sectionManager = $scope.SectionsManager;
        return (sectionManager.List.isClosed && sectionManager.ListVideo.isClosed);
      }
    }
  }
  
})