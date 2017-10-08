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
  list = [];
  get searchUrl(){
    return `https://www.googleapis.com/youtube/v3/search?part=id,snippet&maxResults=50&q=${this.searchText}&key=${this.key}`;
  };
  get videoListUrl(){
    return `https://www.googleapis.com/youtube/v3/videos?part=contentDetails,snippet&id=${this.videosId.join(',')}&key=${this.key}`;
  };
  fetch() {
    this.videosId = [];
    if (this.searchText !== '' && this.searchText !== this.lastSearch) {
      this.lastSearch = this.searchText;

      return fetch(this.searchUrl)
        .then(response => response.json())
        .then(response => {
          response['items'].forEach((item) => {
            this.videosId.push(item['id']['videoId']);
          })
          return this.getVideos();
        });
    }
  }

  getVideos() {
    return fetch(this.videoListUrl)
      .then(response => response.json())
      .then(response => {
        const data = this.processData(response);
        return data;
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
    this.list = videos;
    return videos;
  }

}
