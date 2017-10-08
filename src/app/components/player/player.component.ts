import { AfterViewInit, Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { YT_event } from '../../services/utils.service';
import { EventEmitterService } from '../../services/event-emitter.service';
import { PlaylistService } from '../../services/playlist.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit, OnDestroy, AfterViewInit {

  private _playSubscription: any;
  private _stopSubscription: any;
  private _pauseSubscription: any;
  private _toggleSubscription: any;

  private player: any;
  private _playerState = new BehaviorSubject('paused');
  private _videoId = new BehaviorSubject('');

  @Input('videoId')
  set videoId(value: string){
    this._videoId.next(value);
  }
  get videoId() {
    return this._videoId.getValue();
  }
  @Output() videoIdChange = new EventEmitter<string>();
  @Output() onStateChange = new EventEmitter();
  @Output() onVideoChange = new EventEmitter();

  constructor(
    public PlaylistService: PlaylistService
  ) { }

  ngAfterViewInit() {
    this.loadYTScript();
  }

  ngOnInit() {
    this.startPlayer();
    this._videoId.subscribe(this.loadVideo.bind(this));
    window['_ems'] = EventEmitterService.get.bind(EventEmitterService);
    this._playSubscription = EventEmitterService.get(YT_event.PLAY).subscribe(this.play.bind(this));
    this._stopSubscription = EventEmitterService.get(YT_event.STOP).subscribe(this.stop.bind(this));
    this._pauseSubscription = EventEmitterService.get(YT_event.PAUSE).subscribe(this.pause.bind(this));
    this._toggleSubscription = EventEmitterService.get('playpausetoggle').subscribe(this.PlaylistService.togglePlay.bind(this.PlaylistService));
  }

  ngOnDestroy() {
    this._playSubscription.unsubscribe();
    this._stopSubscription.unsubscribe();
    this._pauseSubscription.unsubscribe();
  }

  private loadYTScript() {
    const doc = (<any>window).document;
    const playerApiScript = doc.createElement('script');
    playerApiScript.type = 'text/javascript';
    playerApiScript.src = 'https://www.youtube.com/iframe_api';
    doc.body.appendChild(playerApiScript);
  }

  private startPlayer() {
    (<any>window).onYouTubeIframeAPIReady = () => {
      this.player = new (<any>window).YT.Player('ytplayer', {
        height: '100%',
        width: '100%',
        videoId: this.videoId,
        playerVars: {'autoplay': 0, 'rel': 0, 'controls': 2},
        events: {
          'onReady': this.onPlayerReady.bind(this),
          'onStateChange': this.onStateUpdate.bind(this)
        }
      });
    };
  }

  private onPlayerReady() {}

  private onStateUpdate() {
    switch (this.player.getPlayerState()) {
      case YT_event.PLAY: this._playerState.next('playing'); this.PlaylistService.playerStatus = 'PLAYING'; break;
      case YT_event.ENDED: this._playerState.next('ended'); break;
      default: this._playerState.next('paused'); this.PlaylistService.playerStatus = 'PAUSE'; break;
    }
  }

  play() {
    this.player.playVideo();
    this._playerState.next('playing');
  }

  pause() {
    this.player.pauseVideo();
    this._playerState.next('paused');
  }

  stop() {
    this.player.stopVideo();
    this._playerState.next('paused');
  }

  loadVideo(videoId: string) {
    if (videoId && this.player) {
      this.player.loadVideoById(videoId);
      this.onVideoChange.emit(videoId);
      this.videoIdChange.emit(videoId);
    }
  }


}
