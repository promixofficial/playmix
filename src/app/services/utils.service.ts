import { Injectable } from '@angular/core';

export enum YT_event {
  UNSTARTED = -1,
  ENDED = 0,
  PLAY = 1,
  PAUSE = 2,
  BUFFERRING = 3,
  STOP = 4,
  CUED = 5,
  STATUS_CHANGE = 6
}

@Injectable()
export class UtilsService {

  constructor() { }


  Dialog = {
    alert: function(message = '', buttonText = 'OK'){
      /*$mdDialog.show(
        $mdDialog.alert()
          .parent(angular.element(document.querySelector('.pmx-app-container')))
          .clickOutsideToClose(true)
          .textContent(message)
          .ok(buttonText)
          .targetEvent(event)
      );*/
    }
  };

  Time = {
    secondsToReadable: function(time){
      const hours = Math.floor( time / 3600 ) /*% 24*/,
        minutes = ('0' + ( Math.floor( time / 60 ) % 60 ) ).slice(-2),
        seconds = ('0' + (time % 60) ).slice(-2);

      let hoursDec = (hours < 10 ? '0' + hours : hours);
      hoursDec = (hoursDec !== '00' ? `${hours}:` : '');

      return ( hoursDec + minutes + ':' + seconds );
    },
    YTTime : {
      PTToSeconds: function(ptTime){
        let total = 0;
        const hours = ptTime.match(/(\d+)H/);
        const minutes = ptTime.match(/(\d+)M/);
        const seconds = ptTime.match(/(\d+)S/);

        total += hours ? parseInt(hours[1], 10) * 3600 : 0;
        total += minutes ? parseInt(minutes[1], 10) * 60 : 0;
        total += seconds ? parseInt(seconds[1], 10) : 0;
        return total;
      }
    }
  };



}
