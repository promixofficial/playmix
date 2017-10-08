import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

  db: any;
  private isStarted = false;
  private dbVersion = 1;
  private stores = ['lists', 'playlist'];

  constructor() {
    this.start();
  }

  private start() {
    return new Promise((resolve) => {
      if (this.isStarted) {
        resolve(this);
      } else {
        const request = indexedDB.open('playmix', this.dbVersion);
        request.onsuccess = (event) => {
          this.db = request.result;
          this.isStarted = true;
          resolve(this);
        };

        request.onupgradeneeded = (event) => {
          this.isStarted = true;
          this.db = event.target['result'];
          this.db.createObjectStore('pmx', { keyPath : 'key' });
        };
      }
    });
  }

  private getObjectStore() {
    return this.start().then(db => {
      return db['db']['transaction'](['pmx'], 'readwrite').objectStore('pmx');
    });
  }

  private insertItem(itemName, value) {
    return new Promise(resolve => {
      this.getObjectStore().then(objStore => {
        const request = objStore.add({key: itemName, value});
        request.onsuccess = (event) => {
          resolve(value);
        };
      });
    });
  }

  getItem(itemName) {
    return new Promise(resolve => {
      this.getObjectStore().then(objStore => {
        const request = objStore.get(itemName);
        request.onsuccess = (event) => {
          if (request.result) {
            resolve(request.result.value);
          } else {
            resolve(null);
          }
        };
      });
    });
  }

  setItem(itemName, value) {
    return new Promise(resolve => {
      this.getItem(itemName).then(item => {
        if (item) {
          this.getObjectStore().then(objStore => {
            const request = objStore.put({key: itemName, value});
            request.onsuccess = (event) => { resolve(value); };
          });
        } else {
          resolve(this.insertItem(itemName, value));
        }
      });
    });
  }

  removeItem(itemName) {
    return new Promise(resolve => {
      return this.setItem(itemName, null);
    });
  }

  clearAll() {
    return new Promise(resolve => {
      this.getObjectStore().then(objStore => {
        const request = objStore.clear();
        request.onsuccess = (event) => { resolve(); };
      });
    });
  }

}
