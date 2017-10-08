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
        const hoursReg = /PT(\d{0,})H\d{0,}M?\d{0,}S?/,
          minutesReg = /PT(\d{0,}H)?(\d{0,})M\d{0,}S?/,
          secondsReg = /PT\d{0,}H?\d{0,}M?(\d{0,})S/;

        const hours = parseInt( ptTime.match(hoursReg) ? ptTime.replace(hoursReg, '$1') : 0, 10),
          minutes = parseInt( ptTime.replace(minutesReg, '$2'), 10) || 0,
          seconds = parseInt( ptTime.replace(secondsReg, '$1'), 10) || 0,
          total = (hours * 3600) + (minutes * 60) + seconds;

        return total;
      }
    }
  };



}
