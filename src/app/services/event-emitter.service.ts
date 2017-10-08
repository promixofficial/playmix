import { Injectable, EventEmitter  } from '@angular/core';

@Injectable()
export class EventEmitterService {

  constructor() { }

  private static emitters: {
    [eventName: string]: EventEmitter<any>
  } = {};

  static get (eventName: any): EventEmitter<any> {
    if (!this.emitters[eventName]) {
      this.emitters[eventName] = new EventEmitter<any>();
    }
    return this.emitters[eventName];
  }

}

/*
 EventEmitterService.get('textChange').emit(ctrlEvent);
 EventEmitterService.get('textChange').subscribe(data => this.title = data);
*/
