import { Injectable } from '@angular/core';

import { FileService } from './file.service';
import * as Ajv from 'ajv';
import { ListService } from './list.service';
import { UtilsService } from './utils.service';

@Injectable()
export class BackupService {

  constructor(
    private FileService: FileService,
    private ListService: ListService,
    private UtilsService: UtilsService,
  ) { }

  saveLists () {
    this.ListService.getLists().then((lists) => {
      if (lists.length) {
        this.FileService.download('playmix-playlists.json', JSON.stringify(lists, null, 3));
      }
    });
  }

  loadLists (event?) {
    var that = this;
    this.FileService.load((fileContent) => {
      if (fileContent) {
        this.FileService.validateFileContent(fileContent)
          .then((resp) => {
            that.joinLists(fileContent);
          })
          .catch((err) => {
            //if (!(err instanceof Ajv.ValidationError)) { throw err; }
            console.log('Invalid Data Format! Validation errors:', err.errors);
            this.UtilsService.Dialog.alert("Invalid Data Format");
          });
      } else {
        console.log('invalid file');
        this.UtilsService.Dialog.alert("Invalid File");
      }
    });
  }

  joinLists (fileContent) {
    let timestamp = (new Date()).getTime(),
      storageLists = [];
    this.ListService.playlists.forEach((playlist) => {
      storageLists.push(playlist.name);
    });
    fileContent.forEach((playlist) => {
      if(storageLists.indexOf(playlist.name) !== -1) {
        playlist.name += `-${timestamp}`;
      }
    });
    this.ListService.playlists = this.ListService.playlists.concat(fileContent);
    this.ListService.saveLists();
  }

}
