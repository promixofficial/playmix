import { Component, OnInit } from '@angular/core';

import { SearchService } from '../../services/search.service';
import { PlaylistService } from '../../services/playlist.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchText = '';
  _searchResult = [1, 2, 3, 4, 5];

  actions = [
    {
      name: 'Add to Playlist',
      icon: 'share',
      func: this.PlaylistService.addVideo.bind(this.PlaylistService)
    }
  ];

  get searchResult(){ return this.SearchService.list; }
  set searchResult(value){ this._searchResult = value; }

  constructor(
    private SearchService: SearchService,
    private PlaylistService: PlaylistService
  ) { }

  ngOnInit() { }

  search() {
    if (this.searchText) {
      this.SearchService.searchText = this.searchText;
      this.SearchService.fetch();
    }
  }


}
