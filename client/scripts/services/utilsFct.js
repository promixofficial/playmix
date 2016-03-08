angular.module("playMixApp")
.factory('utilsFct', [function(){
    
    var Utils = {
        Time: {
            secondsToReadable: function(time){
                var hours = parseInt( time / 3600 ) /*% 24*/,
                    minutes = ("0" + ( parseInt( time / 60 ) % 60 ) ).slice(-2),
                    seconds = ("0" + (time % 60) ).slice(-2);
                    
                hours = (hours < 10 ? "0" + hours : hours);
                hours = (hours!=='00' ? `${hours}:` : "");
                 
                return ( hours + minutes + ":" + seconds );
            }
        }
    };
    
    return Utils; 
     
}]) 