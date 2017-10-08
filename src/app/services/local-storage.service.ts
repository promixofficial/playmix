import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {

  constructor() { }

  getItem(itemName) {
    let value = localStorage[itemName];
    if (value) {
      value = this.parseValue(value);
    }
    return value;
  }

  setItem(itemName, value) {
    value = (typeof value === 'object' ? JSON.stringify(value) : value);
    localStorage[itemName] = value;
  }

  removeItem(itemName) {
    delete localStorage[itemName];
  }

  clearAll() {
    localStorage.clear();
  }

  parseValue(value) {
    try {
      value = JSON.parse(value);
    }catch (e) {}
    return value;
  }


}
