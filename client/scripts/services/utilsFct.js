angular.module("playMixApp")
.factory('utilsFct', ['$mdDialog', function($mdDialog){
    
    var Utils = {
        Dialog: {
            alert: function(message = "", buttonText = "OK"){
                $mdDialog.show(
                    $mdDialog.alert()
                      .parent(angular.element(document.querySelector('.pmx-app-container')))
                      .clickOutsideToClose(true)
                      .textContent(message)
                      .ok(buttonText)
                      .targetEvent(event)
                );
            }
        },
        Time: {
            secondsToReadable: function(time){
                var hours = parseInt( time / 3600 ) /*% 24*/,
                    minutes = ("0" + ( parseInt( time / 60 ) % 60 ) ).slice(-2),
                    seconds = ("0" + (time % 60) ).slice(-2);
                    
                hours = (hours < 10 ? "0" + hours : hours);
                hours = (hours!=='00' ? `${hours}:` : "");
                 
                return ( hours + minutes + ":" + seconds );
            },
            YTTime: {
                PTToSeconds: function(ptTime){
                    var hoursReg = /PT(\d{0,})H\d{0,}M?\d{0,}S?/,
                        minutesReg = /PT(\d{0,}H)?(\d{0,})M\d{0,}S?/,
                        secondsReg = /PT\d{0,}H?\d{0,}M?(\d{0,})S/;
                    
                    var hours = parseInt( ptTime.match(hoursReg) ? ptTime.replace(hoursReg, '$1') : 0),
                        minutes = parseInt( ptTime.replace(minutesReg, '$2') ),
                        seconds = parseInt( ptTime.replace(secondsReg, '$1') ),
                        total = (hours * 3600) + (minutes * 60) + seconds;
                        
                    return total;
                }
            }
        }
    };
    
    return Utils; 
     
}])