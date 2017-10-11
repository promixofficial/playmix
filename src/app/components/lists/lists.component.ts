import { Component, OnInit } from '@angular/core';

import { BackupService } from '../../services/backup.service';
import { ListService } from '../../services/list.service';
import { PlaylistService } from '../../services/playlist.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {

  actions = [
    {
      name: 'Add to Playlist',
      icon: 'share',
      func: this.PlaylistService.concatPlaylist.bind(this.PlaylistService)
    },
    /*{
      name: 'Rename List',
      icon: 'pencil',
      func: this.ListService.editList.bind(this.ListService)
    },*/
    {
      name: 'Delete List',
      icon: 'trash',
      func: this.ListService.removeList.bind(this.ListService)
    }
  ];

  get list(){ return this.ListService.playlists; }
  set list(value){ this.ListService.playlists = value; }

  constructor(
    public BackupService: BackupService,
    public ListService: ListService,
    public PlaylistService: PlaylistService
  ) { }

  ngOnInit() {
  }

  selectList(list) {
    this.ListService.selectAndOpen(list);
  }

}
