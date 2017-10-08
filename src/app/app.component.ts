import { Component, OnInit, AfterViewInit } from '@angular/core';

import { PlaylistService } from './services/playlist.service';
import { ListService } from './services/list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  panelVisibility = {
    isSearchVisible : false,
    isListsVisible : false,
    isPlaylistVisible : false
  };


  constructor(
    public PlaylistService: PlaylistService,
    public ListService: ListService
  ) {  }
}


/*

 DnD
 https://github.com/akserg/ng2-dnd
 http://akserg.github.io/ng2-webpack-demo/#/dnd

 AJV
 http://epoberezkin.github.io/ajv/

 */
