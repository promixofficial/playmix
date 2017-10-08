import { Component, OnInit } from '@angular/core';

import { ListService } from '../../services/list.service';
import { PlaylistService } from '../../services/playlist.service';

@Component({
  selector: 'app-list-video',
  templateUrl: './list-video.component.html',
  styleUrls: ['./list-video.component.css']
})
export class ListVideoComponent implements OnInit {

  actions = [
    {
      name: 'Add to Playlist',
      icon: 'share',
      func: this.PlaylistService.addVideo.bind(this.PlaylistService)
    },
    {
      name: 'Remove from List',
      icon: 'trash',
      func: this.ListService.removeVideo.bind(this.ListService)
    }
  ];

  get list(){ return this.ListService.selected.playlist; }
  set list(value){ this.ListService.selected.playlist = value; }

  constructor(
    public PlaylistService: PlaylistService,
    public ListService: ListService
  ) { }

  ngOnInit() {
  }

  back() {
    this.ListService.isPlaylistOpen = false;
  }

}
