import { Injectable } from '@angular/core';

import { LocalStorageService } from './local-storage.service';
import { StorageService } from './storage.service';

@Injectable()
export class ListService {

  constructor(
    private LocalStorageService: LocalStorageService,
    private StorageService: StorageService
  ) {
    this.startList();
  }

  selected = null;
  isPlaylistOpen = false;
  playlists: any;
  editingList = null;
  get selectedIndex(){
    return this.playlists.indexOf(this.selected);
  }
  get lastSelectedListIndex(){
    const lastIndex = this.LocalStorageService.getItem('lastSelectedListIndex') || 0;
    return (lastIndex !== -1 ? lastIndex : 0);
  }

  startList() {
    this.getLists().then(playlists => {
      this.playlists = playlists;
      this.select(playlists[this.lastSelectedListIndex]);
    });
  }

  select(playlist) {
    if(playlist !== undefined) {
      if (typeof playlist === 'object') {
        this.selected = playlist;
      } else {
        this.selected = this.playlists[playlist];
      }
      this.setLastSelectedListIndex();
    }
  }

  selectAndOpen(playlist) {
    this.select(playlist);
    this.isPlaylistOpen = true;
  }

  addVideo(video) {
    if (this.playlists.length) {
      if (this.selected) {
        const playlist = this.selected.playlist;
        if (!~playlist.indexOf(video)) {
          playlist.push(video);
          this.onChangeList(this.selected);
        }
      } else {
        this.select(this.playlists[0]);
        this.addVideo(video);
      }
    } else {
      this.addList();
      this.addVideo(video);
    }
  }

  removeVideo(video) {
    const playlist = this.selected.playlist,
      index = playlist.indexOf(video);
    if (~index) {
      playlist.splice(index, 1);
      this.onChangeList(this.selected);
    }
  }


  addList() {
    const currentName = `List ${this.playlists.length + 1}`;
    const name = prompt('List Name', currentName) || currentName;
    this.playlists.unshift({name, id: (new Date()).getTime(), playlist: []});
    this.onChangeList();
  }

  removeList(list) {
    if (confirm('Delete List?')) {
      const index = this.playlists.indexOf(list);
      this.playlists.splice(index, 1);
      this.onChangeList();
      if (this.playlists.length && this.selectedIndex === -1) {
        this.select(this.playlists[0]);
      }
    }
  }

  editList(list) {
    const currentName = list.name
    this.editingList = list;
    list.name = prompt('List Name', currentName);
    if (!list.name) {
      list.name = currentName;
    }
    this.saveList();
  }

  saveList() {
    this.onChangeList(this.editingList);
    this.editingList = null;
    this.onChangeList();
  }

  isEditing(list) {
    return (this.editingList === list);
  }

  setLastSelectedListIndex() {
    const lastIndex = this.selectedIndex;
    this.LocalStorageService.setItem('lastSelectedListIndex', (lastIndex !== -1 ? lastIndex : 0));
  }


  onChangeList(list?) {
    this.saveLists();
    this.setLastSelectedListIndex();
    if (this.selectedIndex === -1) {
      this.select(null);
    }
  }

  getLists(): Promise<Array<any>> {
    return this.StorageService.getItem('lists')
      .then((lists) => {
        return lists || [];
      });
  }

  saveLists() {
    return this.StorageService.setItem('lists', this.playlists);
  }

}
