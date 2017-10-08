webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.pmx-app-container{\r\n  z-index: 0;\r\n  height: 100%;\r\n  max-height: 100%;\r\n}\r\n\r\n.pmx-app-body{\r\n  z-index: 50;\r\n  height: 100%;\r\n  -webkit-box-pack: justify;\r\n      -ms-flex-pack: justify;\r\n          justify-content: space-between;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-wrap: nowrap;\r\n      flex-wrap: nowrap;\r\n  -ms-flex-line-pack: stretch;\r\n      align-content: stretch;\r\n  -webkit-box-align: stretch;\r\n      -ms-flex-align: stretch;\r\n          align-items: stretch;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pmx-app-container\" >\n  <app-header [(panelVisibility)]=\"panelVisibility\" ></app-header>\n\n  <section class=\"pmx-app-body\">\n    <app-list-video *ngIf=\"ListService.selected !== null && ListService.isPlaylistOpen\" ></app-list-video>\n    <app-lists *ngIf=\"panelVisibility.isListsVisible\"></app-lists>\n    <app-search *ngIf=\"panelVisibility.isSearchVisible\"></app-search>\n\n    <app-player [videoId]=\"PlaylistService?.selected?.id\" style=\"width: 100%;\" ></app-player>\n\n    <app-playlist *ngIf=\"panelVisibility.isPlaylistVisible\"></app-playlist>\n  </section>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_playlist_service__ = __webpack_require__("../../../../../src/app/services/playlist.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_list_service__ = __webpack_require__("../../../../../src/app/services/list.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(PlaylistService, ListService) {
        this.PlaylistService = PlaylistService;
        this.ListService = ListService;
        this.panelVisibility = {
            isSearchVisible: false,
            isListsVisible: false,
            isPlaylistVisible: false
        };
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_playlist_service__["a" /* PlaylistService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_playlist_service__["a" /* PlaylistService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_list_service__["a" /* ListService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_list_service__["a" /* ListService */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
/*

 DnD
 https://github.com/akserg/ng2-dnd
 http://akserg.github.io/ng2-webpack-demo/#/dnd

 AJV
 http://epoberezkin.github.io/ajv/

 */
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_dnd__ = __webpack_require__("../../../../ng2-dnd/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_header_header_component__ = __webpack_require__("../../../../../src/app/components/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_list_list_component__ = __webpack_require__("../../../../../src/app/components/list/list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_lists_lists_component__ = __webpack_require__("../../../../../src/app/components/lists/lists.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_list_video_list_video_component__ = __webpack_require__("../../../../../src/app/components/list-video/list-video.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_player_player_component__ = __webpack_require__("../../../../../src/app/components/player/player.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_playlist_playlist_component__ = __webpack_require__("../../../../../src/app/components/playlist/playlist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_search_search_component__ = __webpack_require__("../../../../../src/app/components/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_file_service__ = __webpack_require__("../../../../../src/app/services/file.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_list_service__ = __webpack_require__("../../../../../src/app/services/list.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_local_storage_service__ = __webpack_require__("../../../../../src/app/services/local-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_playlist_service__ = __webpack_require__("../../../../../src/app/services/playlist.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_search_service__ = __webpack_require__("../../../../../src/app/services/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_storage_service__ = __webpack_require__("../../../../../src/app/services/storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_utils_service__ = __webpack_require__("../../../../../src/app/services/utils.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_event_emitter_service__ = __webpack_require__("../../../../../src/app/services/event-emitter.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_backup_service__ = __webpack_require__("../../../../../src/app/services/backup.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__directives_click_stop_propagation_directive__ = __webpack_require__("../../../../../src/app/directives/click-stop-propagation.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_list_list_component__["a" /* ListComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_lists_lists_component__["a" /* ListsComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_list_video_list_video_component__["a" /* ListVideoComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_player_player_component__["a" /* PlayerComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_playlist_playlist_component__["a" /* PlaylistComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_search_search_component__["a" /* SearchComponent */],
            __WEBPACK_IMPORTED_MODULE_23__directives_click_stop_propagation_directive__["a" /* ClickStopPropagationDirective */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MatButtonModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["d" /* MatToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MatInputModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["c" /* MatListModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["e" /* MatTooltipModule */],
            __WEBPACK_IMPORTED_MODULE_5_ng2_dnd__["a" /* DndModule */].forRoot()
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_21__services_event_emitter_service__["a" /* EventEmitterService */],
            __WEBPACK_IMPORTED_MODULE_14__services_file_service__["a" /* FileService */],
            __WEBPACK_IMPORTED_MODULE_15__services_list_service__["a" /* ListService */],
            __WEBPACK_IMPORTED_MODULE_15__services_list_service__["a" /* ListService */],
            __WEBPACK_IMPORTED_MODULE_16__services_local_storage_service__["a" /* LocalStorageService */],
            __WEBPACK_IMPORTED_MODULE_17__services_playlist_service__["a" /* PlaylistService */],
            __WEBPACK_IMPORTED_MODULE_18__services_search_service__["a" /* SearchService */],
            __WEBPACK_IMPORTED_MODULE_19__services_storage_service__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_20__services_utils_service__["a" /* UtilsService */],
            __WEBPACK_IMPORTED_MODULE_22__services_backup_service__["a" /* BackupService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".pmx-app-header{\r\n  position: fixed;\r\n  top: -70px;\r\n  z-index: 10;\r\n  width: 100%;\r\n  opacity: 0;\r\n  transition: all 0.5s ease;\r\n}\r\n\r\n.pmx-app-header button{\r\n  margin-right: 20px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"pmx-app-header\" >\n  <mat-toolbar color=\"primary\">\n    <button mat-fab color=\"primary\" matTooltip=\"Search\" (click)=\"toggleSearch()\">\n      <i class=\"fa fa-search\" ></i>\n    </button>\n    <button mat-fab color=\"primary\" matTooltip=\"Lists\" (click)=\"toggleLists()\">\n      <i class=\"fa fa-list-ul\" ></i>\n    </button>\n    <button mat-fab color=\"primary\" matTooltip=\"Playlist\" (click)=\"togglePlaylist()\">\n      <i class=\"fa fa-youtube-play\" ></i>\n    </button>\n  </mat-toolbar>\n</header>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
        this.panelVisibilityChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.toggleSearch = function () {
        this.panelVisibility.isSearchVisible = !this.panelVisibility.isSearchVisible;
        if (this.panelVisibility.isSearchVisible) {
            this.panelVisibility.isListsVisible = false;
        }
    };
    HeaderComponent.prototype.toggleLists = function () {
        this.panelVisibility.isListsVisible = !this.panelVisibility.isListsVisible;
        if (this.panelVisibility.isListsVisible) {
            this.panelVisibility.isSearchVisible = false;
        }
    };
    HeaderComponent.prototype.togglePlaylist = function () {
        this.panelVisibility.isPlaylistVisible = !this.panelVisibility.isPlaylistVisible;
    };
    return HeaderComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], HeaderComponent.prototype, "panelVisibility", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", Object)
], HeaderComponent.prototype, "panelVisibilityChange", void 0);
HeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/components/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/header/header.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HeaderComponent);

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/list-video/list-video.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".lists-panel-container{\r\n  left: 0;\r\n  z-index: 4;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/list-video/list-video.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"lists-panel-container\" >\n  <mat-toolbar color=\"primary\">\n    <button mat-button matTooltip=\"Back\" (click)=\"back()\">\n      <i class=\"fa fa-chevron-left\" ></i>\n    </button>\n    <div [matTooltip]=\"ListService.selected.name\" class=\"cut-text\" (click)=\"ListService.editList(ListService.selected)\" >\n      {{ ListService.selected.name }}\n    </div>\n    <button mat-button matTooltip=\"Add All to Playlist\" (click)=\"PlaylistService.concatPlaylist(ListService.selected)\">\n      <i class=\"fa fa-share\" ></i>\n    </button>\n  </mat-toolbar>\n\n  <app-list [list]=\"list\" [actions]=\"actions\" (onChange)=\"ListService.onChangeList(ListService.selected)\" [dropGroup]=\"['list-video']\" ></app-list>\n\n\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/components/list-video/list-video.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListVideoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_list_service__ = __webpack_require__("../../../../../src/app/services/list.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_playlist_service__ = __webpack_require__("../../../../../src/app/services/playlist.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListVideoComponent = (function () {
    function ListVideoComponent(PlaylistService, ListService) {
        this.PlaylistService = PlaylistService;
        this.ListService = ListService;
        this.actions = [
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
    }
    Object.defineProperty(ListVideoComponent.prototype, "list", {
        get: function () { return this.ListService.selected.playlist; },
        set: function (value) { this.ListService.selected.playlist = value; },
        enumerable: true,
        configurable: true
    });
    ListVideoComponent.prototype.ngOnInit = function () {
    };
    ListVideoComponent.prototype.back = function () {
        this.ListService.isPlaylistOpen = false;
    };
    return ListVideoComponent;
}());
ListVideoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-list-video',
        template: __webpack_require__("../../../../../src/app/components/list-video/list-video.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/list-video/list-video.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_playlist_service__["a" /* PlaylistService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_playlist_service__["a" /* PlaylistService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_list_service__["a" /* ListService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_list_service__["a" /* ListService */]) === "function" && _b || Object])
], ListVideoComponent);

var _a, _b;
//# sourceMappingURL=list-video.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/list/list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".pmx-list{\r\n  overflow-y: scroll;\r\n  max-height: calc(100% - 70px);\r\n  min-height: calc(100% - 70px);\r\n}\r\n\r\n.pmx-list-item {\r\n  padding: 10px 0;\r\n}\r\n\r\n.pmx-list-item.selected {\r\n  background-color: rgba(63, 81, 181, 0.33);\r\n}\r\n\r\n.pmx-list-item:hover {\r\n  background-color: rgba(63, 81, 181, 0.13);\r\n}\r\n\r\n\r\n.pmx-list-image {\r\n  width: 40px;\r\n  height: 40px;\r\n  border-radius: 50px;\r\n  float: left;\r\n}\r\n\r\n.pmx-list-image[src='']{\r\n  display: none;\r\n}\r\n\r\n.pmx-list-info {\r\n  padding: 0 5px;\r\n  width: calc(100% - 35px);\r\n  height: 60px;\r\n}\r\n\r\n.item-time{\r\n  display: inline-block;\r\n  min-width: 50px;\r\n}\r\n\r\n.pmx-list-item-title{\r\n  font-size: 16px;\r\n  margin: 0;\r\n}\r\n\r\n.pmx-list-item-subtitle{\r\n  font-size: 14px;\r\n  margin: 0;\r\n  font-weight: normal;\r\n}\r\n\r\n.pmx-list .mat-button {\r\n  min-width: 50px;\r\n  color: #3f51b5;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/list/list.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-list *ngIf=\"!canOrder\" class=\"pmx-list\"  >\n  <mat-list-item  class=\"panel panel-info\" class=\"pmx-list-item\" [class.selected]=\"selected === item\" *ngFor=\"let item of list; let i = index\" (click)=\"selectItem(item)\"   dnd-draggable [dragEnabled]=\"true\" [dropZones]=\"dropGroup\">\n    <img width=\"40\" height=\"40\" draggable=\"false\" class=\"pmx-list-image\" [src]=\"getImage(item)\" />\n    <div class=\"pmx-list-info\" [matTooltip]=\"getTitle(item)\">\n      <h3 class=\"pmx-list-item-title cut-text\" >{{ getTitle(item) }}</h3>\n      <h4 class=\"pmx-list-item-subtitle\" >\n        <span class=\"item-time\" >{{ item?.prettyDuration }}</span>\n        <button click-stop-propagation [matTooltip]=\"action.name\" mat-button *ngFor=\"let action of actions\" (click)=\"action.func(item)\" >\n          <i [title]=\"action.name\" [class]=\"'fa fa-'+action.icon\"></i>\n        </button>\n      </h4>\n    </div>\n  </mat-list-item>\n</mat-list>\n\n\n<mat-list *ngIf=\"canOrder\" class=\"pmx-list\" dnd-sortable-container [sortableData]=\"list\" [dropZones]=\"dropGroup\">\n  <mat-list-item  class=\"panel panel-info\" class=\"pmx-list-item\" [class.selected]=\"selected === item\" *ngFor=\"let item of list; let i = index\" dnd-sortable [sortableIndex]=\"i\" (click)=\"selectItem(item)\" (onDropSuccess)=\"onDrop()\" >\n    <img width=\"40\" height=\"40\" draggable=\"false\" class=\"pmx-list-image\" [src]=\"getImage(item)\" />\n    <div class=\"pmx-list-info\" [matTooltip]=\"getTitle(item)\">\n      <h3 class=\"pmx-list-item-title cut-text\" >{{ getTitle(item) }}</h3>\n      <h4 class=\"pmx-list-item-subtitle\" >\n        <span class=\"item-time\" >{{ item?.prettyDuration }}</span>\n        <button click-stop-propagation [matTooltip]=\"action.name\" mat-button *ngFor=\"let action of actions\" (click)=\"action.func(item)\" >\n          <i [title]=\"action.name\" [class]=\"'fa fa-'+action.icon\"></i>\n        </button>\n      </h4>\n    </div>\n  </mat-list-item>\n</mat-list>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/list/list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ListComponent = (function () {
    function ListComponent() {
        this.list = [];
        this.actions = [];
        this.dropGroup = [];
        this.canOrder = true;
        this.onSelect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    ListComponent.prototype.ngOnInit = function () {
    };
    ListComponent.prototype.getImage = function (item) {
        return item.title ? "https://img.youtube.com/vi/" + item.id + "/mqdefault.jpg" : '';
    };
    ListComponent.prototype.getTitle = function (item) {
        return item.title || item.name;
    };
    ListComponent.prototype.selectItem = function (item) {
        this.onSelect.emit(item);
    };
    ListComponent.prototype.onDrop = function () {
        this.onChange.emit(this.list);
    };
    return ListComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], ListComponent.prototype, "list", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], ListComponent.prototype, "actions", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], ListComponent.prototype, "selected", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], ListComponent.prototype, "dropGroup", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], ListComponent.prototype, "canOrder", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", Object)
], ListComponent.prototype, "onSelect", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", Object)
], ListComponent.prototype, "onChange", void 0);
ListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-list',
        template: __webpack_require__("../../../../../src/app/components/list/list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/list/list.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ListComponent);

//# sourceMappingURL=list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/lists/lists.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".lists-panel-container{\r\n  left: 0;\r\n  z-index: 3;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/lists/lists.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"lists-panel-container\" >\n  <mat-toolbar color=\"primary\">\n    Lists <br>\n    <button mat-button matTooltip=\"Create New List\" (click)=\"ListService.addList()\">\n      <i class=\"fa fa-plus\" ></i>\n    </button>\n    <button mat-button matTooltip=\"Save Lists\" (click)=\"BackupService.saveLists()\">\n      <i class=\"fa fa-download\" ></i>\n    </button>\n    <button mat-button matTooltip=\"Load Lists\" (click)=\"BackupService.loadLists()\">\n      <i class=\"fa fa-upload\" ></i>\n    </button>\n  </mat-toolbar>\n\n  <app-list [list]=\"list\" [actions]=\"actions\" [selected]=\"ListService.selected\" (onSelect)=\"selectList($event)\" (onChange)=\"ListService.onChangeList()\" [dropGroup]=\"['lists']\" ></app-list>\n\n\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/components/lists/lists.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_backup_service__ = __webpack_require__("../../../../../src/app/services/backup.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_list_service__ = __webpack_require__("../../../../../src/app/services/list.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_playlist_service__ = __webpack_require__("../../../../../src/app/services/playlist.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListsComponent = (function () {
    function ListsComponent(BackupService, ListService, PlaylistService) {
        this.BackupService = BackupService;
        this.ListService = ListService;
        this.PlaylistService = PlaylistService;
        this.actions = [
            {
                name: 'Add to Playlist',
                icon: 'share',
                func: this.PlaylistService.concatPlaylist.bind(this.PlaylistService)
            },
            {
                name: 'Rename List',
                icon: 'pencil',
                func: this.ListService.editList.bind(this.ListService)
            },
            {
                name: 'Delete List',
                icon: 'trash',
                func: this.ListService.removeList.bind(this.ListService)
            }
        ];
    }
    Object.defineProperty(ListsComponent.prototype, "list", {
        get: function () { return this.ListService.playlists; },
        set: function (value) { this.ListService.playlists = value; },
        enumerable: true,
        configurable: true
    });
    ListsComponent.prototype.ngOnInit = function () {
    };
    ListsComponent.prototype.selectList = function (list) {
        this.ListService.selectAndOpen(list);
    };
    return ListsComponent;
}());
ListsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-lists',
        template: __webpack_require__("../../../../../src/app/components/lists/lists.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/lists/lists.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_backup_service__["a" /* BackupService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_backup_service__["a" /* BackupService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_list_service__["a" /* ListService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_list_service__["a" /* ListService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_playlist_service__["a" /* PlaylistService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_playlist_service__["a" /* PlaylistService */]) === "function" && _c || Object])
], ListsComponent);

var _a, _b, _c;
//# sourceMappingURL=lists.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/player/player.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".pmx-yt-container {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n  .pmx-yt-container > iframe {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n  }\r\n\r\n.player-section-container{\r\n  width: 100%;\r\n  height: 100%;\r\n  position: relative;\r\n}\r\n  .player-section-container .pmx-yt-container{\r\n    opacity: 1;\r\n    transition: opacity 0.8s ease;\r\n  }\r\n  .player-section-container:hover .player-btn{\r\n    opacity: 1;\r\n  }\r\n\r\n.player-btn-previous, .player-btn-next, .player-btn-play-pause{\r\n  position: absolute;\r\n  top: 50%;\r\n  -webkit-transform: translateY(-50%);\r\n          transform: translateY(-50%);\r\n  transition: all 0.5s ease;\r\n  opacity: 0;\r\n}\r\n  .player-btn-previous .fa, .player-btn-next .fa, .player-btn-play-pause .fa{\r\n    font-size: 25px;\r\n    color: #E8E8E8;\r\n  }\r\n\r\n\r\n@media (max-height : 150px){\r\n  .player-section-container .pmx-yt-container{\r\n    opacity: 0.5;\r\n  }\r\n}\r\n@media (max-height : 180px){\r\n  .player-btn-previous, .player-btn-next, .player-btn-play-pause{\r\n    top: 0;\r\n    -webkit-transform: initial;\r\n            transform: initial;\r\n    width: calc(50% - 8px);\r\n    min-width: 40px;\r\n    z-index: 10;\r\n  }\r\n}\r\n\r\n.player-btn-play-pause{\r\n  display: none;\r\n  left: 50%;\r\n  -webkit-transform: translateX(-50%);\r\n          transform: translateX(-50%);\r\n}\r\n\r\n.player-btn-previous{\r\n  left: 0;\r\n}\r\n\r\n.player-btn-next{\r\n  right: 0;\r\n}\r\n\r\n\r\n.pmx-no-video{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  height: 100%;\r\n  color: white;\r\n\r\n  pointer-events: none;\r\n}\r\n\r\n@media (min-width : 400px) and (min-height : 200px){\r\n  .pmx-no-video .pmx-alert-2{\r\n    display: none;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/player/player.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"player-section-container\">\n\n  <div [class.is-hidden]=\"videoId === null\" class=\"pmx-yt-container\">\n    <div id=\"ytplayer\" ></div>\n  </div>\n\n  <div class=\"pmx-no-video\" *ngIf=\"!PlaylistService.selected\" >\n    <span class=\"pmx-alert-1\" >Empty Playlist</span>\n    <span class=\"pmx-alert-2\" >Resize the window to show the controllers</span>\n  </div>\n\n  <!--button (click)=\"Playlist.play()\">Send Play</button>\n  <button (click)=\"Playlist.pause()\">Send Pause</button>\n  <button (click)=\"Playlist.stop()\">Send Stop</button>\n\n  <p>Player status is: {{Playlist.playerStatus}}</p-->\n\n\n\n  <button mat-button matTooltip=\"Previous\" *ngIf=\"PlaylistService.listLength > 1\"  (click)=\"PlaylistService.play('previous')\" class=\"md-primary player-btn player-btn-previous\">\n    <i class=\"fa fa-step-backward\" ></i>\n  </button>\n\n  <button mat-button matTooltip=\"Play\"  (click)=\"PlaylistService.play()\" *ngIf=\"PlaylistService.playerStatus !== 'PLAYING'\" class=\"md-primary player-btn player-btn-play-pause\">\n    <i class=\"fa fa-play\" ></i>\n  </button>\n\n  <button mat-button matTooltip=\"Pause\"  (click)=\"PlaylistService.pause()\" *ngIf=\"PlaylistService.playerStatus === 'PLAYING'\" class=\"md-primary player-btn player-btn-play-pause\">\n    <i class=\"fa fa-pause\" ></i>\n  </button>\n\n  <button mat-button matTooltip=\"Next\" *ngIf=\"PlaylistService.listLength > 1\"  (click)=\"PlaylistService.play('next')\" class=\"md-primary player-btn player-btn-next\">\n    <i class=\"fa fa-step-forward\" ></i>\n  </button>\n\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/player/player.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_utils_service__ = __webpack_require__("../../../../../src/app/services/utils.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_event_emitter_service__ = __webpack_require__("../../../../../src/app/services/event-emitter.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_playlist_service__ = __webpack_require__("../../../../../src/app/services/playlist.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PlayerComponent = (function () {
    function PlayerComponent(PlaylistService) {
        this.PlaylistService = PlaylistService;
        this._playerState = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"]('paused');
        this._videoId = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"]('');
        this.videoIdChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onStateChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onVideoChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    Object.defineProperty(PlayerComponent.prototype, "videoId", {
        get: function () {
            return this._videoId.getValue();
        },
        set: function (value) {
            this._videoId.next(value);
        },
        enumerable: true,
        configurable: true
    });
    PlayerComponent.prototype.ngAfterViewInit = function () {
        this.loadYTScript();
    };
    PlayerComponent.prototype.ngOnInit = function () {
        this.startPlayer();
        this._videoId.subscribe(this.loadVideo.bind(this));
        window['_ems'] = __WEBPACK_IMPORTED_MODULE_3__services_event_emitter_service__["a" /* EventEmitterService */].get.bind(__WEBPACK_IMPORTED_MODULE_3__services_event_emitter_service__["a" /* EventEmitterService */]);
        this._playSubscription = __WEBPACK_IMPORTED_MODULE_3__services_event_emitter_service__["a" /* EventEmitterService */].get(__WEBPACK_IMPORTED_MODULE_2__services_utils_service__["b" /* YT_event */].PLAY).subscribe(this.play.bind(this));
        this._stopSubscription = __WEBPACK_IMPORTED_MODULE_3__services_event_emitter_service__["a" /* EventEmitterService */].get(__WEBPACK_IMPORTED_MODULE_2__services_utils_service__["b" /* YT_event */].STOP).subscribe(this.stop.bind(this));
        this._pauseSubscription = __WEBPACK_IMPORTED_MODULE_3__services_event_emitter_service__["a" /* EventEmitterService */].get(__WEBPACK_IMPORTED_MODULE_2__services_utils_service__["b" /* YT_event */].PAUSE).subscribe(this.pause.bind(this));
    };
    PlayerComponent.prototype.ngOnDestroy = function () {
        this._playSubscription.unsubscribe();
        this._stopSubscription.unsubscribe();
        this._pauseSubscription.unsubscribe();
    };
    PlayerComponent.prototype.loadYTScript = function () {
        var doc = window.document;
        var playerApiScript = doc.createElement('script');
        playerApiScript.type = 'text/javascript';
        playerApiScript.src = 'https://www.youtube.com/iframe_api';
        doc.body.appendChild(playerApiScript);
    };
    PlayerComponent.prototype.startPlayer = function () {
        var _this = this;
        window.onYouTubeIframeAPIReady = function () {
            _this.player = new window.YT.Player('ytplayer', {
                height: '100%',
                width: '100%',
                videoId: _this.videoId,
                playerVars: { 'autoplay': 0, 'rel': 0, 'controls': 2 },
                events: {
                    'onReady': _this.onPlayerReady.bind(_this),
                    'onStateChange': _this.onStateUpdate.bind(_this)
                }
            });
        };
    };
    PlayerComponent.prototype.onPlayerReady = function () { };
    PlayerComponent.prototype.onStateUpdate = function () {
        switch (this.player.getPlayerState()) {
            case __WEBPACK_IMPORTED_MODULE_2__services_utils_service__["b" /* YT_event */].PLAY:
                this._playerState.next('playing');
                break;
            case __WEBPACK_IMPORTED_MODULE_2__services_utils_service__["b" /* YT_event */].ENDED:
                this._playerState.next('ended');
                break;
            default:
                this._playerState.next('paused');
                break;
        }
    };
    PlayerComponent.prototype.play = function () {
        this.player.playVideo();
        this._playerState.next('playing');
    };
    PlayerComponent.prototype.pause = function () {
        this.player.pauseVideo();
        this._playerState.next('paused');
    };
    PlayerComponent.prototype.stop = function () {
        this.player.stopVideo();
        this._playerState.next('paused');
    };
    PlayerComponent.prototype.loadVideo = function (videoId) {
        if (videoId && this.player) {
            this.player.loadVideoById(videoId);
            this.onVideoChange.emit(videoId);
            this.videoIdChange.emit(videoId);
        }
    };
    return PlayerComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('videoId'),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], PlayerComponent.prototype, "videoId", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", Object)
], PlayerComponent.prototype, "videoIdChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", Object)
], PlayerComponent.prototype, "onStateChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", Object)
], PlayerComponent.prototype, "onVideoChange", void 0);
PlayerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-player',
        template: __webpack_require__("../../../../../src/app/components/player/player.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/player/player.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_playlist_service__["a" /* PlaylistService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_playlist_service__["a" /* PlaylistService */]) === "function" && _a || Object])
], PlayerComponent);

var _a;
//# sourceMappingURL=player.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/playlist/playlist.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".lists-panel-container{\r\n  right: 0;\r\n  z-index: 4;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/playlist/playlist.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"lists-panel-container\" >\n  <mat-toolbar color=\"primary\">\n    Playlist - {{PlaylistService.totalTime}}\n    <button mat-button matTooltip=\"Clear Playlist\" (click)=\"PlaylistService.clearPlaylist()\">\n      <i class=\"fa fa-eraser\" ></i>\n    </button>\n  </mat-toolbar>\n\n  <app-list [list]=\"list\" [actions]=\"actions\" [selected]=\"PlaylistService.selected\" (onSelect)=\"selectItem($event)\" (onChange)=\"PlaylistService.onChangeList()\" [dropGroup]=\"['playlist']\" ></app-list>\n\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/components/playlist/playlist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaylistComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_playlist_service__ = __webpack_require__("../../../../../src/app/services/playlist.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_list_service__ = __webpack_require__("../../../../../src/app/services/list.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PlaylistComponent = (function () {
    function PlaylistComponent(PlaylistService, ListService) {
        this.PlaylistService = PlaylistService;
        this.ListService = ListService;
        this.actions = [
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
    }
    Object.defineProperty(PlaylistComponent.prototype, "list", {
        get: function () { return this.PlaylistService.list; },
        set: function (value) { this.PlaylistService.list = value; },
        enumerable: true,
        configurable: true
    });
    PlaylistComponent.prototype.ngOnInit = function () {
    };
    PlaylistComponent.prototype.selectItem = function (item) {
        this.PlaylistService.select(item);
    };
    return PlaylistComponent;
}());
PlaylistComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-playlist',
        template: __webpack_require__("../../../../../src/app/components/playlist/playlist.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/playlist/playlist.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_playlist_service__["a" /* PlaylistService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_playlist_service__["a" /* PlaylistService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_list_service__["a" /* ListService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_list_service__["a" /* ListService */]) === "function" && _b || Object])
], PlaylistComponent);

var _a, _b;
//# sourceMappingURL=playlist.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/search/search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".lists-panel-container{\r\n  left: 0;\r\n  z-index: 5;\r\n}\r\n\r\n.input-search{\r\n  width: 100%;\r\n  height: 22px;\r\n  padding: 5px;\r\n  border: 0;\r\n  border-radius: 5px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"lists-panel-container\" >\n  <mat-toolbar color=\"primary\">\n    <input placeholder=\"Search\" class=\"input-search\" [(ngModel)]=\"searchText\" (keyup.enter)=\"search()\" >\n\n    <button mat-button (click)=\"search()\">\n      <i class=\"fa fa-search\" ></i>\n    </button>\n  </mat-toolbar>\n\n  <app-list [list]=\"searchResult\" [actions]=\"actions\" [dropGroup]=\"['videos-list']\" [canOrder]=\"false\" ></app-list>\n\n\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/components/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_search_service__ = __webpack_require__("../../../../../src/app/services/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_playlist_service__ = __webpack_require__("../../../../../src/app/services/playlist.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchComponent = (function () {
    function SearchComponent(SearchService, PlaylistService) {
        this.SearchService = SearchService;
        this.PlaylistService = PlaylistService;
        this.searchText = '';
        this._searchResult = [1, 2, 3, 4, 5];
        this.actions = [
            {
                name: 'Add to Playlist',
                icon: 'share',
                func: this.PlaylistService.addVideo.bind(this.PlaylistService)
            }
        ];
    }
    Object.defineProperty(SearchComponent.prototype, "searchResult", {
        get: function () { return this.SearchService.list; },
        set: function (value) { this._searchResult = value; },
        enumerable: true,
        configurable: true
    });
    SearchComponent.prototype.ngOnInit = function () { };
    SearchComponent.prototype.search = function () {
        if (this.searchText) {
            this.SearchService.searchText = this.searchText;
            this.SearchService.fetch();
        }
    };
    return SearchComponent;
}());
SearchComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-search',
        template: __webpack_require__("../../../../../src/app/components/search/search.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/search/search.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_search_service__["a" /* SearchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_search_service__["a" /* SearchService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_playlist_service__["a" /* PlaylistService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_playlist_service__["a" /* PlaylistService */]) === "function" && _b || Object])
], SearchComponent);

var _a, _b;
//# sourceMappingURL=search.component.js.map

/***/ }),

/***/ "../../../../../src/app/directives/click-stop-propagation.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClickStopPropagationDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ClickStopPropagationDirective = (function () {
    function ClickStopPropagationDirective() {
    }
    ClickStopPropagationDirective.prototype.onClick = function (event) {
        event.stopPropagation();
    };
    return ClickStopPropagationDirective;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ClickStopPropagationDirective.prototype, "onClick", null);
ClickStopPropagationDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
        selector: '[click-stop-propagation]'
    }),
    __metadata("design:paramtypes", [])
], ClickStopPropagationDirective);

//# sourceMappingURL=click-stop-propagation.directive.js.map

/***/ }),

/***/ "../../../../../src/app/services/backup.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackupService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__file_service__ = __webpack_require__("../../../../../src/app/services/file.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_service__ = __webpack_require__("../../../../../src/app/services/list.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_service__ = __webpack_require__("../../../../../src/app/services/utils.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BackupService = (function () {
    function BackupService(FileService, ListService, UtilsService) {
        this.FileService = FileService;
        this.ListService = ListService;
        this.UtilsService = UtilsService;
    }
    BackupService.prototype.saveLists = function () {
        var _this = this;
        this.ListService.getLists().then(function (lists) {
            if (lists.length) {
                _this.FileService.download('playmix-playlists.json', JSON.stringify(lists, null, 3));
            }
        });
    };
    BackupService.prototype.loadLists = function (event) {
        var _this = this;
        var that = this;
        this.FileService.load(function (fileContent) {
            if (fileContent) {
                _this.FileService.validateFileContent(fileContent)
                    .then(function (resp) {
                    that.joinLists(fileContent);
                })
                    .catch(function (err) {
                    //if (!(err instanceof Ajv.ValidationError)) { throw err; }
                    console.log('Invalid Data Format! Validation errors:', err.errors);
                    _this.UtilsService.Dialog.alert("Invalid Data Format");
                });
            }
            else {
                console.log('invalid file');
                _this.UtilsService.Dialog.alert("Invalid File");
            }
        });
    };
    BackupService.prototype.joinLists = function (fileContent) {
        var timestamp = (new Date()).getTime(), storageLists = [];
        this.ListService.playlists.forEach(function (playlist) {
            storageLists.push(playlist.name);
        });
        fileContent.forEach(function (playlist) {
            if (storageLists.indexOf(playlist.name) !== -1) {
                playlist.name += "-" + timestamp;
            }
        });
        this.ListService.playlists = this.ListService.playlists.concat(fileContent);
        this.ListService.saveLists();
    };
    return BackupService;
}());
BackupService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__file_service__["a" /* FileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__file_service__["a" /* FileService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__list_service__["a" /* ListService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__list_service__["a" /* ListService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__utils_service__["a" /* UtilsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__utils_service__["a" /* UtilsService */]) === "function" && _c || Object])
], BackupService);

var _a, _b, _c;
//# sourceMappingURL=backup.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/event-emitter.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventEmitterService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EventEmitterService = (function () {
    function EventEmitterService() {
    }
    EventEmitterService.get = function (eventName) {
        if (!this.emitters[eventName]) {
            this.emitters[eventName] = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        }
        return this.emitters[eventName];
    };
    return EventEmitterService;
}());
EventEmitterService.emitters = {};
EventEmitterService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], EventEmitterService);

/*
 EventEmitterService.get('textChange').emit(ctrlEvent);
 EventEmitterService.get('textChange').subscribe(data => this.title = data);
*/
//# sourceMappingURL=event-emitter.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/file.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ajv__ = __webpack_require__("../../../../ajv/lib/ajv.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ajv___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ajv__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FileService = (function () {
    function FileService() {
        this.fileContentSchema = {
            '$async': true,
            'type': 'array',
            'uniqueItems': true,
            'items': {
                'type': 'object',
                'required': ['id', 'name', 'playlist'],
                'properties': {
                    'id': { 'type': 'integer' },
                    'name': { 'type': 'string' },
                    'playlist': {
                        'type': 'array',
                        'uniqueItems': true,
                        'items': {
                            'type': 'object',
                            'required': ['author', 'duration', 'id', 'prettyDuration', 'title', 'url'],
                            'properties': {
                                'author': { 'type': 'string' },
                                'duration': { 'type': 'integer' },
                                'id': { 'type': 'string' },
                                'prettyDuration': { 'type': 'string' },
                                'title': { 'type': 'string' },
                                'url': { 'type': 'string' }
                            }
                        }
                    }
                }
            }
        };
    }
    FileService.prototype.download = function (filename, text) {
        var element = document.createElement('a');
        element.setAttribute('href', 'data:application/json;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', filename);
        element.click();
    };
    FileService.prototype.load = function (callback) {
        var input = document.createElement('input');
        input.setAttribute('type', 'file');
        input.onchange = this.readContent.bind(this, input, callback);
        input.click();
    };
    FileService.prototype.readContent = function (element, callback) {
        return new Promise(function (resolve) {
            var file = element['files'][0], reader = new FileReader();
            reader.onload = function () {
                var content = reader.result;
                try {
                    content = JSON.parse(content);
                    callback(content);
                    resolve(content);
                }
                catch (e) {
                    callback(false);
                    resolve(false);
                }
            };
            reader.readAsText(file);
        });
    };
    FileService.prototype.validateFileContent = function (fileContent) {
        var _this = this;
        return new Promise(function (resolve) {
            var ajv = __WEBPACK_IMPORTED_MODULE_1_ajv__({ useDefaults: 'shared' }), schema = _this.fileContentSchema, validate = ajv.compile(schema);
            resolve(validate(fileContent));
        });
    };
    return FileService;
}());
FileService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], FileService);

//# sourceMappingURL=file.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/list.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__local_storage_service__ = __webpack_require__("../../../../../src/app/services/local-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__storage_service__ = __webpack_require__("../../../../../src/app/services/storage.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListService = (function () {
    function ListService(LocalStorageService, StorageService) {
        this.LocalStorageService = LocalStorageService;
        this.StorageService = StorageService;
        this.selected = null;
        this.isPlaylistOpen = false;
        this.editingList = null;
        this.startList();
    }
    Object.defineProperty(ListService.prototype, "selectedIndex", {
        get: function () {
            return this.playlists.indexOf(this.selected);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListService.prototype, "lastSelectedListIndex", {
        get: function () {
            var lastIndex = this.LocalStorageService.getItem('lastSelectedListIndex') || 0;
            return (lastIndex !== -1 ? lastIndex : 0);
        },
        enumerable: true,
        configurable: true
    });
    ListService.prototype.startList = function () {
        var _this = this;
        this.getLists().then(function (playlists) {
            _this.playlists = playlists;
            _this.select(playlists[_this.lastSelectedListIndex]);
        });
    };
    ListService.prototype.select = function (playlist) {
        if (playlist !== undefined) {
            if (typeof playlist === 'object') {
                this.selected = playlist;
            }
            else {
                this.selected = this.playlists[playlist];
            }
            this.setLastSelectedListIndex();
        }
    };
    ListService.prototype.selectAndOpen = function (playlist) {
        this.select(playlist);
        this.isPlaylistOpen = true;
    };
    ListService.prototype.addVideo = function (video) {
        if (this.playlists.length) {
            if (this.selected) {
                var playlist = this.selected.playlist;
                if (!~playlist.indexOf(video)) {
                    playlist.push(video);
                    this.onChangeList(this.selected);
                }
            }
            else {
                this.select(this.playlists[0]);
                this.addVideo(video);
            }
        }
        else {
            this.addList();
            this.addVideo(video);
        }
    };
    ListService.prototype.removeVideo = function (video) {
        var playlist = this.selected.playlist, index = playlist.indexOf(video);
        if (~index) {
            playlist.splice(index, 1);
            this.onChangeList(this.selected);
        }
    };
    ListService.prototype.addList = function () {
        var currentName = "List " + (this.playlists.length + 1);
        var name = prompt('List Name', currentName) || currentName;
        this.playlists.unshift({ name: name, id: (new Date()).getTime(), playlist: [] });
        this.onChangeList();
    };
    ListService.prototype.removeList = function (list) {
        if (confirm('Delete List?')) {
            var index = this.playlists.indexOf(list);
            this.playlists.splice(index, 1);
            this.onChangeList();
            if (this.playlists.length && this.selectedIndex === -1) {
                this.select(this.playlists[0]);
            }
        }
    };
    ListService.prototype.editList = function (list) {
        var currentName = list.name;
        this.editingList = list;
        list.name = prompt('List Name', currentName);
        if (!list.name) {
            list.name = currentName;
        }
        this.saveList();
    };
    ListService.prototype.saveList = function () {
        this.onChangeList(this.editingList);
        this.editingList = null;
        this.onChangeList();
    };
    ListService.prototype.isEditing = function (list) {
        return (this.editingList === list);
    };
    ListService.prototype.setLastSelectedListIndex = function () {
        var lastIndex = this.selectedIndex;
        this.LocalStorageService.setItem('lastSelectedListIndex', (lastIndex !== -1 ? lastIndex : 0));
    };
    ListService.prototype.onChangeList = function (list) {
        this.saveLists();
        this.setLastSelectedListIndex();
        if (this.selectedIndex === -1) {
            this.select(null);
        }
    };
    ListService.prototype.getLists = function () {
        return this.StorageService.getItem('lists')
            .then(function (lists) {
            return lists || [];
        });
    };
    ListService.prototype.saveLists = function () {
        return this.StorageService.setItem('lists', this.playlists);
    };
    return ListService;
}());
ListService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__local_storage_service__["a" /* LocalStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__local_storage_service__["a" /* LocalStorageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__storage_service__["a" /* StorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__storage_service__["a" /* StorageService */]) === "function" && _b || Object])
], ListService);

var _a, _b;
//# sourceMappingURL=list.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/local-storage.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalStorageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LocalStorageService = (function () {
    function LocalStorageService() {
    }
    LocalStorageService.prototype.getItem = function (itemName) {
        var value = localStorage[itemName];
        if (value) {
            value = this.parseValue(value);
        }
        return value;
    };
    LocalStorageService.prototype.setItem = function (itemName, value) {
        value = (typeof value === 'object' ? JSON.stringify(value) : value);
        localStorage[itemName] = value;
    };
    LocalStorageService.prototype.removeItem = function (itemName) {
        delete localStorage[itemName];
    };
    LocalStorageService.prototype.clearAll = function () {
        localStorage.clear();
    };
    LocalStorageService.prototype.parseValue = function (value) {
        try {
            value = JSON.parse(value);
        }
        catch (e) { }
        return value;
    };
    return LocalStorageService;
}());
LocalStorageService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], LocalStorageService);

//# sourceMappingURL=local-storage.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/playlist.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaylistService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__local_storage_service__ = __webpack_require__("../../../../../src/app/services/local-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__storage_service__ = __webpack_require__("../../../../../src/app/services/storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_service__ = __webpack_require__("../../../../../src/app/services/utils.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__event_emitter_service__ = __webpack_require__("../../../../../src/app/services/event-emitter.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PlaylistService = (function () {
    function PlaylistService(LocalStorageService, StorageService, UtilsService) {
        this.LocalStorageService = LocalStorageService;
        this.StorageService = StorageService;
        this.UtilsService = UtilsService;
        this.selected = null;
        this.isRepeat = false;
        this.isLooping = true;
        this.playerStatus = 'NOT PLAYING';
        this.list = [];
        this.idIndex = {};
        this.totalTime = '00:00';
        this.PlaylistSection = {
            get element() {
                return document.getElementsByClassName('pmx-playlist-section')[0];
            },
            scroll: function (top) {
                if (this.element) {
                    this.element.scrollTop = top || 0;
                }
            },
            scrollToVideo: function (videoIndex) {
                var headerHeight = 148, videoHeight = 88;
                this.scroll(headerHeight + ((videoIndex || 0) * videoHeight));
            }
        };
        this.idIndex = this.LocalStorageService.getItem('playlist_idIndex') || {};
        this.startPlaylist();
    }
    Object.defineProperty(PlaylistService.prototype, "listLength", {
        get: function () {
            return this.list.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlaylistService.prototype, "selectedIndex", {
        get: function () {
            return this.list.indexOf(this.selected);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlaylistService.prototype, "isFirst", {
        get: function () {
            return (this.selectedIndex === 0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlaylistService.prototype, "isLast", {
        get: function () {
            return (this.selectedIndex + 1 === this.listLength);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlaylistService.prototype, "lastPlayedIndex", {
        get: function () {
            var lastIndex = this.LocalStorageService.getItem('lastPlayedIndex') || 0;
            return (lastIndex !== -1 ? lastIndex : 0);
        },
        enumerable: true,
        configurable: true
    });
    PlaylistService.prototype.startPlaylist = function () {
        var _this = this;
        this.getPlaylist().then(function (playlist) {
            _this.list = playlist;
            _this.select(_this.lastPlayedIndex);
            _this.setPlaylist(playlist);
        });
    };
    PlaylistService.prototype.sendControlEvent = function (ctrlEvent) {
        __WEBPACK_IMPORTED_MODULE_4__event_emitter_service__["a" /* EventEmitterService */].get(ctrlEvent).emit();
    };
    PlaylistService.prototype.togglePlay = function () {
        if (this.playerStatus === 'PLAYING') {
            this.pause();
        }
        else {
            this.play();
        }
    };
    PlaylistService.prototype.play = function (position) {
        var _this = this;
        if (this.listLength) {
            if (!this.selected) {
                this.select(this.list[0]);
            }
            if (position) {
                if (position === 'next') {
                    this.selectNext();
                }
                else if (position === 'previous') {
                    this.selectPrevious();
                }
            }
            setTimeout(function () {
                _this.sendControlEvent(__WEBPACK_IMPORTED_MODULE_3__utils_service__["b" /* YT_event */].PLAY);
            }, 300);
        }
    };
    PlaylistService.prototype.pause = function () {
        this.sendControlEvent(__WEBPACK_IMPORTED_MODULE_3__utils_service__["b" /* YT_event */].PAUSE);
    };
    PlaylistService.prototype.stop = function () {
        this.sendControlEvent(__WEBPACK_IMPORTED_MODULE_3__utils_service__["b" /* YT_event */].STOP);
        this.PlaylistSection.scroll();
    };
    PlaylistService.prototype.select = function (media) {
        if (media !== undefined) {
            if (typeof media === 'object') {
                this.selected = media;
            }
            else {
                this.selected = this.list[media];
            }
            this.setLastPlayedIndex();
        }
    };
    PlaylistService.prototype.selectAndPlay = function (media) {
        this.select(media);
        this.play();
    };
    PlaylistService.prototype.selectNext = function () {
        var index = !this.isLast ? this.selectedIndex + 1 : 0;
        this.select(this.list[index]);
        this.PlaylistSection.scrollToVideo(index);
    };
    PlaylistService.prototype.selectPrevious = function () {
        var index = !this.isFirst ? this.selectedIndex - 1 : this.listLength - 1;
        this.select(this.list[index]);
        this.PlaylistSection.scrollToVideo(index);
    };
    PlaylistService.prototype.addVideo = function (video) {
        var playlist = this.list;
        if (!this.idIndex[video.id]) {
            this.idIndex[video.id] = true;
            playlist.push(Object.assign({}, video));
            this.updateTotalTime();
            this.onChangeList();
        }
    };
    PlaylistService.prototype.removeVideo = function (video) {
        var playlist = this.list, index = playlist.indexOf(video);
        if (this.idIndex[video.id]) {
            this.idIndex[video.id] = null;
            playlist.splice(index, 1);
            this.updateTotalTime();
            this.onChangeList();
        }
    };
    PlaylistService.prototype.setLastPlayedIndex = function () {
        var lastIndex = this.selectedIndex;
        this.LocalStorageService.setItem('lastPlayedIndex', (lastIndex !== -1 ? lastIndex : 0));
    };
    PlaylistService.prototype.setPlaylist = function (playlist) {
        this.list = playlist.slice(0);
        this.setIdIndex();
        this.updateTotalTime();
        this.onChangeList();
    };
    PlaylistService.prototype.clearPlaylist = function () {
        this.clearIdIndex();
        this.setPlaylist([]);
        this.stop();
    };
    PlaylistService.prototype.concatPlaylist = function (playlist) {
        if (playlist['playlist']) {
            playlist = playlist['playlist'];
        }
        if (this.listLength) {
            var that_1 = this;
            this.clearIdIndex();
            playlist = this.list.concat(playlist).filter(function (item, position, self) {
                if (!that_1.idIndex[item.id]) {
                    that_1.idIndex[item.id] = true;
                    return true;
                }
                return false;
            });
        }
        this.setPlaylist(playlist);
    };
    PlaylistService.prototype.setIdIndex = function () {
        var _this = this;
        this.clearIdIndex();
        this.list.forEach(function (item) {
            _this.idIndex[item.id] = true;
        });
    };
    PlaylistService.prototype.clearIdIndex = function () {
        this.idIndex = {};
    };
    PlaylistService.prototype.onChangeList = function () {
        this.savePlaylist();
        this.LocalStorageService.setItem('playlist_idIndex', this.idIndex);
        this.setLastPlayedIndex();
        if (this.selectedIndex === -1) {
            this.select(0);
        }
    };
    PlaylistService.prototype.getPlaylist = function () {
        return this.StorageService.getItem('playlist')
            .then(function (playlist) {
            return playlist || [];
        });
    };
    PlaylistService.prototype.savePlaylist = function () {
        return this.StorageService.setItem('playlist', this.list);
    };
    PlaylistService.prototype.onEnd = function () {
        if (!this.isRepeat) {
            if (!this.isLast || (this.isLast && this.isLooping)) {
                this.selectNext();
                this.play();
            }
        }
        else {
            this.play();
        }
    };
    PlaylistService.prototype.updateTotalTime = function () {
        var _this = this;
        var totalTime = 0;
        setTimeout(function () {
            _this.list.forEach(function (item) {
                totalTime += item.duration;
            });
            _this.totalTime = _this.UtilsService.Time.secondsToReadable(totalTime);
        }, 100);
    };
    return PlaylistService;
}());
PlaylistService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__local_storage_service__["a" /* LocalStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__local_storage_service__["a" /* LocalStorageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__storage_service__["a" /* StorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__storage_service__["a" /* StorageService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__utils_service__["a" /* UtilsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__utils_service__["a" /* UtilsService */]) === "function" && _c || Object])
], PlaylistService);

var _a, _b, _c;
//# sourceMappingURL=playlist.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/search.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_service__ = __webpack_require__("../../../../../src/app/services/utils.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchService = (function () {
    function SearchService(UtilsService) {
        this.UtilsService = UtilsService;
        this.searchText = '';
        this.lastSearch = '_';
        this.videosId = [];
        this.list = [];
    }
    Object.defineProperty(SearchService.prototype, "key", {
        get: function () {
            return localStorage['searchKey'] || 'AIzaSyBNWIg9CEBpjpjakt9PMKGm-wu7miyc5yM';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchService.prototype, "searchUrl", {
        get: function () {
            return "https://www.googleapis.com/youtube/v3/search?part=id,snippet&maxResults=50&q=" + this.searchText + "&key=" + this.key;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(SearchService.prototype, "videoListUrl", {
        get: function () {
            return "https://www.googleapis.com/youtube/v3/videos?part=contentDetails,snippet&id=" + this.videosId.join(',') + "&key=" + this.key;
        },
        enumerable: true,
        configurable: true
    });
    ;
    SearchService.prototype.fetch = function () {
        var _this = this;
        this.videosId = [];
        if (this.searchText !== '' && this.searchText !== this.lastSearch) {
            this.lastSearch = this.searchText;
            return fetch(this.searchUrl)
                .then(function (response) { return response.json(); })
                .then(function (response) {
                response['items'].forEach(function (item) {
                    _this.videosId.push(item['id']['videoId']);
                });
                return _this.getVideos();
            });
        }
    };
    SearchService.prototype.getVideos = function () {
        var _this = this;
        return fetch(this.videoListUrl)
            .then(function (response) { return response.json(); })
            .then(function (response) {
            var data = _this.processData(response);
            return data;
        });
    };
    SearchService.prototype.processData = function (response) {
        var videos = [], timeToSeconds = this.UtilsService.Time.YTTime.PTToSeconds, secondsToReadable = this.UtilsService.Time.secondsToReadable;
        response.items.forEach(function (item) {
            var duration = timeToSeconds(item.contentDetails.duration);
            videos.push({
                author: item.snippet.channelTitle,
                duration: duration,
                id: item.id,
                prettyDuration: secondsToReadable(duration),
                title: item.snippet.title,
                url: "https://youtu.be/" + item.id
            });
        });
        this.list = videos;
        return videos;
    };
    return SearchService;
}());
SearchService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__utils_service__["a" /* UtilsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__utils_service__["a" /* UtilsService */]) === "function" && _a || Object])
], SearchService);

var _a;
//# sourceMappingURL=search.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/storage.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StorageService = (function () {
    function StorageService() {
        this.isStarted = false;
        this.dbVersion = 1;
        this.stores = ['lists', 'playlist'];
        this.start();
    }
    StorageService.prototype.start = function () {
        var _this = this;
        return new Promise(function (resolve) {
            if (_this.isStarted) {
                resolve(_this);
            }
            else {
                var request_1 = indexedDB.open('playmix', _this.dbVersion);
                request_1.onsuccess = function (event) {
                    _this.db = request_1.result;
                    _this.isStarted = true;
                    resolve(_this);
                };
                request_1.onupgradeneeded = function (event) {
                    _this.isStarted = true;
                    _this.db = event.target['result'];
                    _this.db.createObjectStore('pmx', { keyPath: 'key' });
                };
            }
        });
    };
    StorageService.prototype.getObjectStore = function () {
        return this.start().then(function (db) {
            return db['db']['transaction'](['pmx'], 'readwrite').objectStore('pmx');
        });
    };
    StorageService.prototype.insertItem = function (itemName, value) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.getObjectStore().then(function (objStore) {
                var request = objStore.add({ key: itemName, value: value });
                request.onsuccess = function (event) {
                    resolve(value);
                };
            });
        });
    };
    StorageService.prototype.getItem = function (itemName) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.getObjectStore().then(function (objStore) {
                var request = objStore.get(itemName);
                request.onsuccess = function (event) {
                    if (request.result) {
                        resolve(request.result.value);
                    }
                    else {
                        resolve(null);
                    }
                };
            });
        });
    };
    StorageService.prototype.setItem = function (itemName, value) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.getItem(itemName).then(function (item) {
                if (item) {
                    _this.getObjectStore().then(function (objStore) {
                        var request = objStore.put({ key: itemName, value: value });
                        request.onsuccess = function (event) { resolve(value); };
                    });
                }
                else {
                    resolve(_this.insertItem(itemName, value));
                }
            });
        });
    };
    StorageService.prototype.removeItem = function (itemName) {
        var _this = this;
        return new Promise(function (resolve) {
            return _this.setItem(itemName, null);
        });
    };
    StorageService.prototype.clearAll = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.getObjectStore().then(function (objStore) {
                var request = objStore.clear();
                request.onsuccess = function (event) { resolve(); };
            });
        });
    };
    return StorageService;
}());
StorageService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], StorageService);

//# sourceMappingURL=storage.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/utils.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return YT_event; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var YT_event;
(function (YT_event) {
    YT_event[YT_event["UNSTARTED"] = -1] = "UNSTARTED";
    YT_event[YT_event["ENDED"] = 0] = "ENDED";
    YT_event[YT_event["PLAY"] = 1] = "PLAY";
    YT_event[YT_event["PAUSE"] = 2] = "PAUSE";
    YT_event[YT_event["BUFFERRING"] = 3] = "BUFFERRING";
    YT_event[YT_event["STOP"] = 4] = "STOP";
    YT_event[YT_event["CUED"] = 5] = "CUED";
    YT_event[YT_event["STATUS_CHANGE"] = 6] = "STATUS_CHANGE";
})(YT_event || (YT_event = {}));
var UtilsService = (function () {
    function UtilsService() {
        this.Dialog = {
            alert: function (message, buttonText) {
                if (message === void 0) { message = ''; }
                if (buttonText === void 0) { buttonText = 'OK'; }
                /*$mdDialog.show(
                  $mdDialog.alert()
                    .parent(angular.element(document.querySelector('.pmx-app-container')))
                    .clickOutsideToClose(true)
                    .textContent(message)
                    .ok(buttonText)
                    .targetEvent(event)
                );*/
            }
        };
        this.Time = {
            secondsToReadable: function (time) {
                var hours = Math.floor(time / 3600) /*% 24*/, minutes = ('0' + (Math.floor(time / 60) % 60)).slice(-2), seconds = ('0' + (time % 60)).slice(-2);
                var hoursDec = (hours < 10 ? '0' + hours : hours);
                hoursDec = (hoursDec !== '00' ? hours + ":" : '');
                return (hoursDec + minutes + ':' + seconds);
            },
            YTTime: {
                PTToSeconds: function (ptTime) {
                    var hoursReg = /PT(\d{0,})H\d{0,}M?\d{0,}S?/, minutesReg = /PT(\d{0,}H)?(\d{0,})M\d{0,}S?/, secondsReg = /PT\d{0,}H?\d{0,}M?(\d{0,})S/;
                    var hours = parseInt(ptTime.match(hoursReg) ? ptTime.replace(hoursReg, '$1') : 0, 10), minutes = parseInt(ptTime.replace(minutesReg, '$2'), 10) || 0, seconds = parseInt(ptTime.replace(secondsReg, '$1'), 10) || 0, total = (hours * 3600) + (minutes * 60) + seconds;
                    return total;
                }
            }
        };
    }
    return UtilsService;
}());
UtilsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], UtilsService);

//# sourceMappingURL=utils.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map