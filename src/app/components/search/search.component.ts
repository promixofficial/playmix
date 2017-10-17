import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material';

import { SearchService } from '../../services/search.service';
import { PlaylistService } from '../../services/playlist.service';
import { ListService } from '../../services/list.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchText = '';
  _searchResult = [];

  videoActions = [
    {
      name: 'Add to Playlist',
      icon: 'share',
      func: this.PlaylistService.addVideo.bind(this.PlaylistService)
    }
  ];

  playlistActions = [
    {
      name: 'Save Playlist',
      icon: 'save',
      func: this.savePlaylist.bind(this)
    }
  ];

  get searchResult(){ return this.SearchService.list; }
  set searchResult(value){ this._searchResult = value; }

  constructor(
    public SearchService: SearchService,
    private PlaylistService: PlaylistService,
    private ListService: ListService,
    private MatSnackBar: MatSnackBar
  ) { }

  ngOnInit() { }

  search() {
    if (this.searchText) {
      this.SearchService.searchText = this.searchText;
      this.SearchService.fetch();
    }
  }

  savePlaylist(playlist) {
    this.SearchService.getPlaylistVideos(playlist['id'])
      .then(videos => {
        this.MatSnackBar.open('Playlist Saved', 'Ok', {
          duration: 2000,
        });
        this.ListService.createPlaylist(playlist['title'], videos);
      });
  }


}
