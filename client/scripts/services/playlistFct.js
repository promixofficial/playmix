angular.module("playMixApp")
.factory('playlistFct', ['$rootScope','$timeout','YT_event','utilsFct', function($rootScope,$timeout, YT_event, utilsFct){
    
    var Playlist = {
        selected: null,
        isRepeat: false, 
        isLooping: true,
        playerStatus: "NOT PLAYING",
        YT_EVENT: YT_event,
        list: [],
        idIndex: {},
        totalTime: "00:00",
        get listLength(){ 
          return this.list.length;  
        },
        get selectedIndex(){
          return this.list.indexOf(this.selected); 
        },
        get isFirst(){
          return (this.selectedIndex === 0);
        },
        get isLast(){
          return (this.selectedIndex+1 === this.listLength);
        },
        sendControlEvent : function (ctrlEvent) {
          $rootScope.$broadcast(ctrlEvent);
        },
        togglePlay: function(){
          if(this.playerStatus === 'PLAYING'){
            this.pause();
          }else{
            this.play();
          }
        },
        play: function(position){
          if(this.listLength){
            if(!this.selected){
               this.select(this.list[0])
            }
            if(position){
              if(position === 'next'){
                this.selectNext();
              }else if(position === 'previous'){
                this.selectPrevious();
              }
            }
            $timeout(()=>{ 
              this.sendControlEvent(YT_event.PLAY);  
            },300); 
          }
        },
        pause: function(){
          this.sendControlEvent(YT_event.PAUSE)  
        },
        stop: function(){
          this.sendControlEvent(YT_event.STOP)
        },
        select: function(media){
          if(media){
            this.selected = media;
          }
        },
        selectNext: function(){
          var index = !this.isLast ? this.selectedIndex+1 : 0;
          this.select(this.list[index]);
        },
        selectPrevious: function(){
          var index = !this.isFirst ? this.selectedIndex-1 : this.listLength-1;
          this.select(this.list[index]);
        },
        addVideo: function(video){
          var playlist = this.list;
          if(!this.idIndex[video.id]){
            this.idIndex[video.id] = true;
            playlist.push(angular.copy(video));
            this.updateTotalTime();
          }
        },
        removeVideo: function(video){
          var playlist = this.list,
              index = playlist.indexOf(video);
          if(this.idIndex[video.id]){
            this.idIndex[video.id] = null;
            playlist.splice(index, 1);
            this.updateTotalTime();
          }
        },
        setPlaylist: function(playlist){ 
          this.list = playlist.slice(0);
          this.setIdIndex();
          this.updateTotalTime(); 
        },
        clearPlaylist: function(){
          this.clearIdIndex();
          this.setPlaylist([]);    
        }, 
        concatPlaylist: function(playlist){
          if(this.listLength){
            var that = this;
            this.clearIdIndex();
            playlist = this.list.concat(playlist).filter((item, position, self) => { 
              if(!that.idIndex[item.id]){
                that.idIndex[item.id] = true;
                return true;
              }
              return false;
            }); 
          }
          this.setPlaylist(playlist);
        },
        setIdIndex: function(){
          this.clearIdIndex();
          this.list.forEach((item)=>{
            this.idIndex[item.id] = true;
          });
        },
        clearIdIndex: function(){
          this.idIndex = {};  
        },
        onEnd: function(){
          if(!this.isRepeat){
            if( !this.isLast || (this.isLast && this.isLooping) ){
              this.selectNext();
              this.play();
            }
          }else{
            this.play();
          }
        }, 
        updateTotalTime: function(){ 
            var totalTime = 0;
            $timeout(()=>{
              this.list.forEach((item)=>{  
                totalTime += item.duration;
              });
              this.totalTime = utilsFct.Time.secondsToReadable(totalTime);
            },100);
        }
    };
    
  
  return Playlist;
}]);