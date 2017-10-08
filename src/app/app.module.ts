import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatToolbarModule, MatInputModule, MatListModule, MatTooltipModule } from '@angular/material';

import { DndModule } from 'ng2-dnd';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ListComponent } from './components/list/list.component';
import { ListsComponent } from './components/lists/lists.component';
import { ListVideoComponent } from './components/list-video/list-video.component';
import { PlayerComponent } from './components/player/player.component';
import { PlaylistComponent } from './components/playlist/playlist.component';
import { SearchComponent } from './components/search/search.component';

import { FileService } from './services/file.service';
import { ListService } from './services/list.service';
import { LocalStorageService } from './services/local-storage.service';
import { PlaylistService } from './services/playlist.service';
import { SearchService } from './services/search.service';
import { StorageService } from './services/storage.service';
import { UtilsService } from './services/utils.service';
import { EventEmitterService } from './services/event-emitter.service';
import { BackupService } from './services/backup.service';
import { ClickStopPropagationDirective } from './directives/click-stop-propagation.directive';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListComponent,
    ListsComponent,
    ListVideoComponent,
    PlayerComponent,
    PlaylistComponent,
    SearchComponent,
    ClickStopPropagationDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatListModule,
    MatTooltipModule,
    DndModule.forRoot()
  ],
  providers: [
    EventEmitterService,
    FileService,
    ListService,
    ListService,
    LocalStorageService,
    PlaylistService,
    SearchService,
    StorageService,
    UtilsService,
    BackupService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
