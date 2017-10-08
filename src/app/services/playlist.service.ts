import { Injectable } from '@angular/core';

import { LocalStorageService } from './local-storage.service';
import { StorageService } from './storage.service';
import { UtilsService, YT_event } from './utils.service';
import { EventEmitterService } from './event-emitter.service';



@Injectable()
export class PlaylistService {

  selected = null;
  isRepeat = false;
  isLooping = true;
  playerStatus = 'NOT PLAYING';
  list = [];
  idIndex = {};
  totalTime = '00:00';

  get listLength(){
    return this.list.length;
  }
  get selectedIndex(){
    return this.list.indexOf(this.selected);
  }
  get isFirst(){
    return (this.selectedIndex === 0);
  }
  get isLast(){
    return (this.selectedIndex + 1 === this.listLength);
  }
  get lastPlayedIndex(){
    const lastIndex = this.LocalStorageService.getItem('lastPlayedIndex') || 0;
    return (lastIndex !== -1 ? lastIndex : 0);
  }

  private PlaylistSection = {
    get element(){
      return document.getElementsByClassName('pmx-playlist-section')[0];
    },
    scroll: function(top?){
      if (this.element) {
        this.element.scrollTop = top || 0;
      }
    },
    scrollToVideo: function(videoIndex){
      const headerHeight = 148,
        videoHeight = 88;
      this.scroll( headerHeight + ((videoIndex || 0) * videoHeight) );
    }
  };

  constructor(
    private LocalStorageService: LocalStorageService,
    private StorageService: StorageService,
    private UtilsService: UtilsService
  ) {
    this.idIndex = this.LocalStorageService.getItem('playlist_idIndex') ||  {};
    this.startPlaylist();
  }

  startPlaylist() {
    this.getPlaylist().then((playlist) => {
      this.list = playlist;
      this.select(this.lastPlayedIndex);
      this.setPlaylist(playlist);
    });
  }

  sendControlEvent(ctrlEvent) {
    EventEmitterService.get(ctrlEvent).emit();
  }

  togglePlay() {
    if (this.playerStatus === 'PLAYING') {
      this.pause();
    } else {
      this.play();
    }
  }

  play(position?) {
    if (this.listLength) {
      if (!this.selected) {
        this.select(this.list[0]);
      }
      if (position) {
        if (position === 'next') {
          this.selectNext();
        } else if (position === 'previous') {
          this.selectPrevious();
        }
      }
      setTimeout(() => {
        this.sendControlEvent(YT_event.PLAY);
      }, 300);
    }
  }

  pause() {
    this.sendControlEvent(YT_event.PAUSE);
  }

  stop() {
    this.sendControlEvent(YT_event.STOP);
    this.PlaylistSection.scroll();
  }

  select(media) {
    if (media !== undefined) {
      if (typeof media === 'object') {
        this.selected = media;
      } else {
        this.selected = this.list[media];
      }
      this.setLastPlayedIndex();
    }
  }

  selectAndPlay(media){
    this.select(media);
    this.play();
  }

  selectNext() {
    const index = !this.isLast ? this.selectedIndex + 1 : 0;
    this.select(this.list[index]);
    this.PlaylistSection.scrollToVideo(index);
  }

  selectPrevious() {
    const index = !this.isFirst ? this.selectedIndex - 1 : this.listLength - 1;
    this.select(this.list[index]);
    this.PlaylistSection.scrollToVideo(index);
  }

  addVideo(video) {
    const playlist = this.list;
    if (!this.idIndex[video.id]) {
      this.idIndex[video.id] = true;
      playlist.push(Object.assign({}, video));
      this.updateTotalTime();

      this.onChangeList();
    }
  }

  removeVideo(video) {
    const playlist = this.list,
      index = playlist.indexOf(video);
    if (this.idIndex[video.id]) {
      this.idIndex[video.id] = null;
      playlist.splice(index, 1);
      this.updateTotalTime();

      this.onChangeList();
    }
  }

  setLastPlayedIndex() {
    const lastIndex = this.selectedIndex;
    this.LocalStorageService.setItem('lastPlayedIndex', (lastIndex !== -1 ? lastIndex : 0));
  }

  setPlaylist(playlist) {
    this.list = playlist.slice(0);
    this.setIdIndex();
    this.updateTotalTime();

    this.onChangeList();
  }

  clearPlaylist() {
    this.clearIdIndex();
    this.setPlaylist([]);
    this.stop();
  }

  concatPlaylist(playlist) {
    if (playlist['playlist']) {
      playlist = playlist['playlist'];
    }
    if (this.listLength) {
      const that = this;
      this.clearIdIndex();
      playlist = this.list.concat(playlist).filter((item, position, self) => {
        if (!that.idIndex[item.id]) {
          that.idIndex[item.id] = true;
          return true;
        }
        return false;
      });
    }
    this.setPlaylist(playlist);
  }

  setIdIndex() {
    this.clearIdIndex();
    this.list.forEach((item) => {
      this.idIndex[item.id] = true;
    });
  }

  clearIdIndex() {
    this.idIndex = {};
  }

  onChangeList() {
    this.savePlaylist();
    this.LocalStorageService.setItem('playlist_idIndex', this.idIndex);
    this.setLastPlayedIndex();
    if (this.selectedIndex === -1) {
      this.select(0);
    }
  }

  getPlaylist(): Promise<Array<any>> {
    return this.StorageService.getItem('playlist')
      .then(playlist => {
        return playlist || [];
      });
  }

  savePlaylist() {
    return this.StorageService.setItem('playlist', this.list);
  }

  onEnd() {
    if (!this.isRepeat) {
      if ( !this.isLast || (this.isLast && this.isLooping) ) {
        this.selectNext();
        this.play();
      }
    } else {
      this.play();
    }
  }

  updateTotalTime() {
    let totalTime = 0;
    setTimeout(() => {
      this.list.forEach(item => {
        totalTime += item.duration;
      });
      this.totalTime = this.UtilsService.Time.secondsToReadable(totalTime);
    }, 100);
  }
}
