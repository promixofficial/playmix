"use strict"

angular.module("playMixApp")
.controller('mainCtrl', [ '$scope', '$rootScope', '$timeout', '$mdSidenav', '$log', 'YT_event', 'listFct', 'playlistFct', 'searchFct', '$localForage', 'fileFct',
function ($scope, $rootScope, $timeout, $mdSidenav, $log, YT_event, listFct, playlistFct, searchFct, $localForage, fileFct) {


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
  
  $scope.Search = searchFct;
  
  $scope.Lists = listFct;
  $scope.Lists.getLists()
    .then((lists)=>{
      $scope.Lists.playlists = lists;
      $scope.Lists.select($scope.Lists.lastSelectedListIndex);
    });

  $scope.Playlist = playlistFct; 
  $scope.Playlist.getPlaylist()
    .then((playlist)=>{
      $scope.Playlist.list = playlist;
      $scope.Playlist.select($scope.Playlist.lastPlayedIndex);
      $scope.Playlist.updateTotalTime();
    });
  
  $scope.Backup = {
    saveLists: function(){
      $scope.Lists.getLists().then((lists)=>{
        fileFct.download('playlists.json', JSON.stringify(lists, null, 3));
      });
    },
    loadLists: function(){
      fileFct.load(function(fileContent){
        if(fileContent){
          fileFct.validateFileContent(fileContent)
          .then((resp)=>{
            $scope.Backup.joinLists(fileContent);
          })
          .catch((err)=>{
            if(!(err instanceof Ajv.ValidationError)){ throw err; }
            console.log('Invalid Data Format! Validation errors:', err.errors);
          })
        }else{
          console.log('invalid file');
        }
      })
    },
    joinLists: function(fileContent){
      var timestamp = (new Date()).getTime(),
        storageLists = [];
        $scope.Lists.playlists.forEach((playlist)=>{
          storageLists.push(playlist.name);
        });
        fileContent.forEach((playlist)=>{
          if(storageLists.indexOf(playlist.name) !== -1){
            playlist.name += `-${timestamp}`;
          }
        });
        $scope.Lists.playlists = $scope.Lists.playlists.concat(fileContent);
        //$scope.Lists.saveLists();
    }
  }
   
  
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
    Search: new SectionManager(),
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
  
}])