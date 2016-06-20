angular.module("playMixApp")
.factory('searchFct', ['$http', 'utilsFct', function($http, utilsFct){
    
    var Search = {
        get key(){
            return localStorage["searchKey"] || "AIzaSyBNWIg9CEBpjpjakt9PMKGm-wu7miyc5yMz";
        },
        searchText: "",
        lastSearch: "_", 
        videosId: [],
        list: [],
        get searchUrl(){
            return `https://www.googleapis.com/youtube/v3/search?part=id,snippet&maxResults=50&q=${this.searchText}&key=${this.key}`;
        },
        get videoListUrl(){
            return `https://www.googleapis.com/youtube/v3/videos?part=contentDetails,snippet&id=${this.videosId.join(',')}&key=${this.key}`;    
        },
        fetch: function(callback){
            Search.videosId = [];
            if(this.searchText !== "" && this.searchText !== this.lastSearch){
                this.lastSearch = this.searchText;
                
                $http.get(this.searchUrl)
                    .then((response) =>{
                        response.data.items.forEach((item)=>{
                            Search.videosId.push(item.id.videoId);
                        }) 
                        Search.getVideos(callback);
                    })
            }
        },
        getVideos: function(callback){
            $http.get(this.videoListUrl)
                .then((response)=>{
                    var data = Search.processData(response.data);
                    callback && callback(data); 
                });
        },
        processData: function(response){
            var videos = [],
                timeToSeconds = utilsFct.Time.YTTime.PTToSeconds,
                secondsToReadable = utilsFct.Time.secondsToReadable;
                
            response.items.forEach(item => {
                var duration = timeToSeconds(item.contentDetails.duration);
                
                videos.push({
                   author: item.snippet.channelTitle,
                   duration: duration,
                   id: item.id,
                   prettyDuration: secondsToReadable(duration),
                   title: item.snippet.title,
                   url: `https://youtu.be/${item.id}`
                });
            });
            Search.list = videos;
            return videos;
        }
    };
    
    return Search; 
     
}]) 