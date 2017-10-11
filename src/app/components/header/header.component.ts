import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { ListService } from '../../services/list.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() panelVisibility;
  @Output() panelVisibilityChange = new EventEmitter();

  constructor(
    private ListService: ListService
  ) { }

  ngOnInit() {
  }

  toggleSearch() {
    this.panelVisibility.isSearchVisible = !this.panelVisibility.isSearchVisible;
    if(this.panelVisibility.isSearchVisible){
      this.panelVisibility.isListsVisible = false;
    }
    this.ListService.isPlaylistOpen = false;
  }

  toggleLists() {
    this.panelVisibility.isListsVisible = !this.panelVisibility.isListsVisible;
    if(this.panelVisibility.isListsVisible){
      this.panelVisibility.isSearchVisible = false;
    }
    this.ListService.isPlaylistOpen = false;
  }

  togglePlaylist() {
    this.panelVisibility.isPlaylistVisible = !this.panelVisibility.isPlaylistVisible;
  }

}
