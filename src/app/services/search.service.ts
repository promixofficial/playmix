import { Injectable } from '@angular/core';

import { UtilsService } from './utils.service';

@Injectable()
export class SearchService {

  constructor(
    private UtilsService: UtilsService
  ) {
  }

  get key(){
    return localStorage['searchKey'] || 'AIzaSyBNWIg9CEBpjpjakt9PMKGm-wu7miyc5yM';
  }
  searchText = '';
  lastSearch = '_';
  videosId = [];
  playlists = [];
  playlistId = 'PLzgiudKkoJnl9URMe27pokxsiWVvUa3lF';
  playlistVideosId = [];
  list = [];
  playlistList = [];
  get searchUrl(){
    return `https://www.googleapis.com/youtube/v3/search?part=id,snippet&type=playlist,video&maxResults=50&q=${this.searchText}&key=${this.key}`;
  }
  get videoListUrl(){
    return `https://www.googleapis.com/youtube/v3/videos?part=contentDetails,snippet&id=${this.videosId.join(',')}&key=${this.key}`;
  }
  get playlistUrl(){
    return `https://www.googleapis.com/youtube/v3/playlistItems?part=id,snippet&playlistId=${this.playlistId}&maxResults=50&key=${this.key}`;
  }
  get playlistVideoListUrl(){
    return `https://www.googleapis.com/youtube/v3/videos?part=contentDetails,snippet&id=${this.playlistVideosId.join(',')}&key=${this.key}`;
  }
  fetch() {
    this.videosId = [];
    this.playlists = [];
    if (this.searchText !== '' && this.searchText !== this.lastSearch) {
      this.lastSearch = this.searchText;

      return fetch(this.searchUrl)
        .then(response => response.json())
        .then(response => {
          response['items'].forEach((item) => {
            if (item['id']['videoId']) {
              this.videosId.push(item['id']['videoId']);
            }else if (item['id']['playlistId']) {
              this.playlists.push({
                id: item['id']['playlistId'],
                thumbnail: item['snippet']['thumbnails']['default']['url'],
                title: item['snippet']['title']
              });
            }
          })
          return this.getVideos(this.videoListUrl)
            .then(videos => {
              this.list = videos;
              return this.list;
            });
        });
    }
  }

  getVideos(videoListUrl) {
    return fetch(videoListUrl)
      .then(response => response.json())
      .then(response => {
        const data = this.processData(response);
        return data;
      });
  }

  getPlaylistVideos(playlistId) {
    //this.playlistId = playlistId;
    this.playlistVideosId = [];
    return fetch(this.playlistUrl)
      .then(response => response.json())
      .then(response => {
        response['items'].forEach((item) => {
          this.playlistVideosId.push(item['snippet']['resourceId']['videoId']);
        });
        return this.getVideos(this.playlistVideoListUrl)
          .then(videos => {
            this.playlistList = videos;
            return this.playlistList;
          });
      });
  }

  processData(response) {
    var videos = [],
      timeToSeconds = this.UtilsService.Time.YTTime.PTToSeconds,
      secondsToReadable = this.UtilsService.Time.secondsToReadable;

    response.items.forEach(item => {
      const duration = timeToSeconds(item.contentDetails.duration);
      videos.push({
        author: item.snippet.channelTitle,
        duration: duration,
        id: item.id,
        prettyDuration: secondsToReadable(duration),
        title: item.snippet.title,
        url: `https://youtu.be/${item.id}`
      });
    });
    return videos;
  }

}
