import { Component, OnInit } from '@angular/core';

import { PlaylistService } from '../../services/playlist.service';
import { ListService } from '../../services/list.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {

  actions = [
    {
      name: 'Play',
      icon: 'play',
      func: this.PlaylistService.selectAndPlay.bind(this.PlaylistService)
    },
    {
      name: 'Add to Selected List',
      icon: 'reply',
      func: this.ListService.addVideo.bind(this.ListService)
    },
    {
      name: 'Remove from Playlist',
      icon: 'trash',
      func: this.PlaylistService.removeVideo.bind(this.PlaylistService)
    }
  ];

  get list(){ return this.PlaylistService.list; }
  set list(value){ this.PlaylistService.list = value; }


  constructor(
    public PlaylistService: PlaylistService,
    private ListService: ListService
  ) { }

  ngOnInit() {
  }

  selectItem(item) {
    this.PlaylistService.select(item);
  }

}
