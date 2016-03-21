/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	angular.module('playMixApp', ['ngMaterial', 'angular-sortable-view','angularResizable']) 
	
	.constant('YT_event', {
	  STOP:            0,
	  PLAY:            1,
	  PAUSE:           2,
	  STATUS_CHANGE:   3,
	  ENDED:           4
	})
	
	/* SERVICES
	*************************/
	__webpack_require__(1); 
	__webpack_require__(2); 
	__webpack_require__(3); 
	__webpack_require__(4); 
	
	/* FILTERS
	*************************/
	
	
	/* DIRECTIVES
	*************************/
	__webpack_require__(5); 
	
	/* CONTROLLERS
	*************************/
	__webpack_require__(6);

/***/ },
/* 1 */
/***/ function(module, exports) {

	angular.module("playMixApp")
	.factory('utilsFct', [function(){
	    
	    var Utils = {
	        Time: {
	            secondsToReadable: function(time){
	                var hours = parseInt( time / 3600 ) /*% 24*/,
	                    minutes = ("0" + ( parseInt( time / 60 ) % 60 ) ).slice(-2),
	                    seconds = ("0" + (time % 60) ).slice(-2);
	                    
	                hours = (hours < 10 ? "0" + hours : hours);
	                hours = (hours!=='00' ? `${hours}:` : "");
	                 
	                return ( hours + minutes + ":" + seconds );
	            },
	            YTTime: {
	                PTToSeconds: function(ptTime){
	                    var hoursReg = /PT(\d{0,})H\d{0,}M\d{0,}S/,
	                        minutesReg = /PT(\d{0,}H)?(\d{0,})M\d{0,}S/,
	                        secondsReg = /PT\d{0,}H?\d{0,}M(\d{0,})S/;
	                    
	                    var hours = parseInt( ptTime.match(hoursReg) ? ptTime.replace(hoursReg, '$1') : 0),
	                        minutes = parseInt( ptTime.replace(minutesReg, '$2') ),
	                        seconds = parseInt( ptTime.replace(secondsReg, '$1') ),
	                        total = (hours * 3600) + (minutes * 60) + seconds;
	                        
	                    return total;
	                }
	            }
	        }
	    };
	    
	    return Utils; 
	     
	}]) 

/***/ },
/* 2 */
/***/ function(module, exports) {

	angular.module("playMixApp")
	.factory('searchFct', ['$http', 'utilsFct', function($http, utilsFct){
	    
	    var Search = {
	        get key(){
	            return 'AIzaSyBNWIg9CEBpjpjakt9PMKGm-wu7miyc5yM';
	        },
	        searchText: "",
	        lastSearch: "_", 
	        videosId: [],
	        list: [],
	        get searchUrl(){
	            return `https://www.googleapis.com/youtube/v3/search?part=id,snippet&maxResults=50&q=${this.searchText}&key=${this.key}`;
	        },
	        get videoListUrl(){
	            return `https://www.googleapis.com/youtube/v3/videos?part=contentDetails,snippet&id=${this.videosId.join(',')}&key=${this.key}`;    
	        },
	        fetch: function(callback){
	            Search.videosId = [];
	            if(this.searchText !== "" && this.searchText !== this.lastSearch){
	                this.lastSearch = this.searchText;
	                
	                $http.get(this.searchUrl)
	                    .then((response) =>{
	                        response.data.items.forEach((item)=>{
	                            Search.videosId.push(item.id.videoId);
	                        }) 
	                        Search.getVideos(callback);
	                    })
	            }
	        },
	        getVideos: function(callback){
	            $http.get(this.videoListUrl)
	                .then((response)=>{
	                    var data = Search.processData(response.data);
	                    callback && callback(data); 
	                });
	        },
	        processData: function(response){
	            var videos = [],
	                timeToSeconds = utilsFct.Time.YTTime.PTToSeconds,
	                secondsToReadable = utilsFct.Time.secondsToReadable;
	                
	            response.items.forEach(item => {
	                var duration = timeToSeconds(item.contentDetails.duration);
	                
	                videos.push({
	                   author: item.snippet.channelTitle,
	                   duration: duration,
	                   id: item.id,
	                   prettyDuration: secondsToReadable(duration),
	                   title: item.snippet.title,
	                   url: `https://youtu.be/${item.id}`
	                });
	            });
	            Search.list = videos;
	            return videos;
	        }
	    };
	    
	    return Search; 
	     
	}]) 

/***/ },
/* 3 */
/***/ function(module, exports) {

	angular.module("playMixApp")
	.factory('listFct', [function(){
	    var List = {
	        selected: null,
	        playlists: [
	          {"name": "Others", playlist: [{"title":"I Have A Dream-Abba","id":"Ad9U3h2UmcA","url":"https://youtu.be/Ad9U3h2UmcA","author":"tranquilatus","duration":285,"prettyDuration":"04:45"},{"title":"Berlin - Take My Breath Away","id":"Bx51eegLTY8","url":"https://youtu.be/Bx51eegLTY8","author":"BerlinVEVO","duration":252,"prettyDuration":"04:12"},{"title":"Baby Can I hold you ... Tracy Chapman.","id":"kjRo_CHSdt0","url":"https://youtu.be/kjRo_CHSdt0","author":"cherubijntje","duration":186,"prettyDuration":"03:06"},{"title":"jimmy cliff - i can see clearly now","id":"xzGV9Bl6CGg","url":"https://youtu.be/xzGV9Bl6CGg","author":"mikeylepford222","duration":198,"prettyDuration":"03:18"},{"title":"puff daddy - every breath you take - Nasser","id":"NVVFvKYUAlo","url":"https://youtu.be/NVVFvKYUAlo","author":"masterarabredy","duration":311,"prettyDuration":"05:11"},{"title":"Shaggy - Angel ft. Rayvon","id":"XWJrPzAUzAs","url":"https://youtu.be/XWJrPzAUzAs","author":"ShaggyVEVO","duration":237,"prettyDuration":"03:57"}]},
	          {"name": "MPB", playlist: [{"title":"Firmamento - Cidade Negra","id":"xgolqRtNTPY","url":"https://youtu.be/xgolqRtNTPY","author":"amandasilveira107","duration":226,"prettyDuration":"03:46"},{"title":"Mauricio Manieri Bem querer","id":"zdedznsVsUw","url":"https://youtu.be/zdedznsVsUw","author":"silva2209","duration":250,"prettyDuration":"04:10"},{"title":"Ed Motta - Colombina","id":"3PzK_OLROGs","url":"https://youtu.be/3PzK_OLROGs","author":"Dj Mário","duration":277,"prettyDuration":"04:37"},{"title":"Os travessos - To te Filmando Sorria","id":"UYy1qAE7q3o","url":"https://youtu.be/UYy1qAE7q3o","author":"marcos antonio","duration":253,"prettyDuration":"04:13"},{"title":"Orlando Moraes - Cruzando raios","id":"AhQYlRVM-_A","url":"https://youtu.be/AhQYlRVM-_A","author":"Erika Montoro","duration":207,"prettyDuration":"03:27"},{"title":"Marisa Monte - Não É Proibido","id":"D05vdXdvJIk","url":"https://youtu.be/D05vdXdvJIk","author":"emimusic","duration":199,"prettyDuration":"03:19"},{"title":"LUIZA POSSI - Dias Iguais.mp4","id":"2r7M1uupDpg","url":"https://youtu.be/2r7M1uupDpg","author":"025mgs","duration":264,"prettyDuration":"04:24"},{"title":"Senhora do Destino - Tudo que há de bom - Luiza Possi","id":"jpbKWQdUsT0","url":"https://youtu.be/jpbKWQdUsT0","author":"Trilha Sonora de Novelas Vol. 2","duration":212,"prettyDuration":"03:32"},{"title":"Luiza Possi - Eu Sou Assim","id":"TjfNqjkx4zE","url":"https://youtu.be/TjfNqjkx4zE","author":"Os Melhores Hits","duration":232,"prettyDuration":"03:52"},{"title":"Luiza Possi - Let It Go (Frozen)","id":"GkYk0DiZOcE","url":"https://youtu.be/GkYk0DiZOcE","author":"Renan Sousa de Assis.","duration":177,"prettyDuration":"02:57"},{"title":"Roupa Nova - Anjo","id":"IKVLJOO4h70","url":"https://youtu.be/IKVLJOO4h70","author":"RoupaNovaVEVO","duration":196,"prettyDuration":"03:16"},{"title":"Roupa Nova - Amor de Índio","id":"7s6YkzHQeQo","url":"https://youtu.be/7s6YkzHQeQo","author":"RoupaNovaVEVO","duration":200,"prettyDuration":"03:20"},{"title":"Roupa Nova - A Viagem","id":"t-zb_hdU24o","url":"https://youtu.be/t-zb_hdU24o","author":"RoupaNovaVEVO","duration":209,"prettyDuration":"03:29"},{"title":"Dona - Roupa Nova","id":"tCa-LCYVW4M","url":"https://youtu.be/tCa-LCYVW4M","author":"Ellem Todão","duration":242,"prettyDuration":"04:02"}]},
	          {"name": "Pop / Eletro", playlist: [{"title":"The B-52's ♫ Love Shack","id":"4QC2ZoumzEw","url":"https://youtu.be/4QC2ZoumzEw","author":"Music Only Knows","duration":256,"prettyDuration":"04:16"},{"title":"Survivor - Eye Of The Tiger","id":"btPJPFnesV4","url":"https://youtu.be/btPJPFnesV4","author":"SurvivorVEVO","duration":251,"prettyDuration":"04:11"},{"title":"K.C & THE SUNSHINE BAND - That's the way I like it (1975)","id":"83I9El6C47A","url":"https://youtu.be/83I9El6C47A","author":"nerisob","duration":188,"prettyDuration":"03:08"},{"title":"Kool & The Gang - Celebration  (1980)","id":"oQvzvu2TZsY","url":"https://youtu.be/oQvzvu2TZsY","author":"DiscoBar80","duration":211,"prettyDuration":"03:31"},{"title":"You're The One That I Want - Grease Lyrics","id":"a_864Y7G4tk","url":"https://youtu.be/a_864Y7G4tk","author":"Based God","duration":192,"prettyDuration":"03:12"},{"title":"Bee Gees - More Than a Woman | THE GREATEST HITS |","id":"BQPBk0RD8d0","url":"https://youtu.be/BQPBk0RD8d0","author":"Filip Sovrlic","duration":198,"prettyDuration":"03:18"},{"title":"Bee Gees - Stayin' Alive (1977)","id":"I_izvAbhExY","url":"https://youtu.be/I_izvAbhExY","author":"beegees","duration":243,"prettyDuration":"04:03"},{"title":"Billy Joel Uptown Girl with Lyrics","id":"nEIcTstEmnQ","url":"https://youtu.be/nEIcTstEmnQ","author":"jc88620","duration":197,"prettyDuration":"03:17"},{"title":"Gloria Gaynor - I Love You Baby","id":"nJEKohJloxA","url":"https://youtu.be/nJEKohJloxA","author":"daddyrap89","duration":338,"prettyDuration":"05:38"},{"title":"Flashdance What A Feeling - Irene Cara Official Video","id":"ILWSp0m9G2U","url":"https://youtu.be/ILWSp0m9G2U","author":"UnidiscMusic","duration":200,"prettyDuration":"03:20"},{"title":"Chic - Le Freak","id":"h1qQ1SKNlgY","url":"https://youtu.be/h1qQ1SKNlgY","author":"CaptainCarlossi","duration":218,"prettyDuration":"03:38"},{"title":"Car Wash Song","id":"3v8I5egzoMo","url":"https://youtu.be/3v8I5egzoMo","author":"JaneCole111","duration":196,"prettyDuration":"03:16"},{"title":"Spice Girls - Wannabe - Lyrics - Official Lyric Video","id":"8X-2czaa3WA","url":"https://youtu.be/8X-2czaa3WA","author":"VolleyballKyra","duration":191,"prettyDuration":"03:11"},{"title":"Spice Girls - Spice - 7. Who Do You Think You Are","id":"UgpqVNoTr0Y","url":"https://youtu.be/UgpqVNoTr0Y","author":"Bryan Tolliver","duration":240,"prettyDuration":"04:00"},{"title":"Spice Girls - Say You'll Be There","id":"9ro0FW9Qt-4","url":"https://youtu.be/9ro0FW9Qt-4","author":"emimusic","duration":233,"prettyDuration":"03:53"},{"title":"Shania Twain - Man! I Feel Like A Woman","id":"ZJL4UGSbeFg","url":"https://youtu.be/ZJL4UGSbeFg","author":"ShaniaTwainVEVO","duration":237,"prettyDuration":"03:57"},{"title":"Black Eyed Peas Shut Up","id":"F7m9jxVcwO0","url":"https://youtu.be/F7m9jxVcwO0","author":"1993AmyCakes","duration":297,"prettyDuration":"04:57"},{"title":"The Black Eyed Peas - Pump It","id":"ZaI2IlHwmgQ","url":"https://youtu.be/ZaI2IlHwmgQ","author":"BlackEyedPeasVEVO","duration":226,"prettyDuration":"03:46"},{"title":"Lyrics to 'All the Things She Said' by t.A.T.u","id":"2jC5WAJzp34","url":"https://youtu.be/2jC5WAJzp34","author":"Katherine10101","duration":224,"prettyDuration":"03:44"},{"title":"Vanessa Carlton-A Thousand Miles Lyrics","id":"ERw2LuU6Jj8","url":"https://youtu.be/ERw2LuU6Jj8","author":"Based God","duration":243,"prettyDuration":"04:03"},{"title":"Lasgo - Something","id":"G0M703prHw4","url":"https://youtu.be/G0M703prHw4","author":"D Finlay","duration":222,"prettyDuration":"03:42"},{"title":"Lasgo - Alone","id":"ujNh0O-Eyrw","url":"https://youtu.be/ujNh0O-Eyrw","author":"jeekay","duration":228,"prettyDuration":"03:48"},{"title":"Kelly Clarkson - Breakaway","id":"c-3vPxKdj6o","url":"https://youtu.be/c-3vPxKdj6o","author":"kellyclarksonVEVO","duration":236,"prettyDuration":"03:56"},{"title":"Kelly Clarkson - Since U Been Gone with Lyrics","id":"qdBoUlBo_6k","url":"https://youtu.be/qdBoUlBo_6k","author":"MidnighteSun","duration":195,"prettyDuration":"03:15"},{"title":"JoJo - Leave (Get Out) Official Music Video in Best Quality Available! HQ [2004]","id":"ggWyUEuGcWY","url":"https://youtu.be/ggWyUEuGcWY","author":"Jake SG Steven","duration":246,"prettyDuration":"04:06"},{"title":"Corinne Bailey Rae - Put Your Records On Lyrics HD HQ","id":"7gPD7kY1amE","url":"https://youtu.be/7gPD7kY1amE","author":"ColdSupreme","duration":214,"prettyDuration":"03:34"},{"title":"Midnight Bottle - Colbie Caillat (lyrics)","id":"n7RiBRqeZgQ","url":"https://youtu.be/n7RiBRqeZgQ","author":"blondie112794","duration":223,"prettyDuration":"03:43"},{"title":"Jessie J ft. B.o.B - Price Tag (On-Screen Lyrics) (HD)","id":"Oz2LoNfpmZs","url":"https://youtu.be/Oz2LoNfpmZs","author":"MusicLoverGal369","duration":215,"prettyDuration":"03:35"},{"title":"Odyssey - Move Your Body (16:9 HD) /1994/","id":"dUxBAebkzz0","url":"https://youtu.be/dUxBAebkzz0","author":"I Love The 90s","duration":189,"prettyDuration":"03:09"},{"title":"Outkast Hey Ya w/lyrics (high quality)","id":"GK_rxVsqTHA","url":"https://youtu.be/GK_rxVsqTHA","author":"Wiitendo49","duration":250,"prettyDuration":"04:10"},{"title":"Bump in the Night by Allstars [LYRICS]","id":"FQyM53uDIT8","url":"https://youtu.be/FQyM53uDIT8","author":"TangledGreenAngels","duration":205,"prettyDuration":"03:25"},{"title":"Let me show you the way Natasha Thomas","id":"Imyq0QmqZvY","url":"https://youtu.be/Imyq0QmqZvY","author":"Toshka225","duration":240,"prettyDuration":"04:00"},{"title":"Natasha Thomas - It's Over Now","id":"tMIyzxizSvQ","url":"https://youtu.be/tMIyzxizSvQ","author":"Hayek Von","duration":218,"prettyDuration":"03:38"},{"title":"DHT - Listen to your heart (Techno) w/ lyrics","id":"idskoqdeSa8","url":"https://youtu.be/idskoqdeSa8","author":"d1dream","duration":211,"prettyDuration":"03:31"},{"title":"I'LL FLY WITH YOU (Subtitulado)","id":"NCvHMZq4jIk","url":"https://youtu.be/NCvHMZq4jIk","author":"stefarex","duration":243,"prettyDuration":"04:03"},{"title":"Kylie Minogue - Can't Get You Out Of My Head (Music Video)","id":"IFx3WX4DES0","url":"https://youtu.be/IFx3WX4DES0","author":"chrisranfordays","duration":235,"prettyDuration":"03:55"},{"title":"Sarina Paris - Baby Look At Us - Lyrics -","id":"x--MtrNvyk4","url":"https://youtu.be/x--MtrNvyk4","author":"Robyn Shaw","duration":202,"prettyDuration":"03:22"},{"title":"We're in Heaven dj sammy with lyrics","id":"dGsJsxjYklc","url":"https://youtu.be/dGsJsxjYklc","author":"pushingdazy","duration":236,"prettyDuration":"03:56"},{"title":"Astroline Close my Eyes","id":"ikEDS3glwl8","url":"https://youtu.be/ikEDS3glwl8","author":"cookietopia","duration":215,"prettyDuration":"03:35"},{"title":"Madonna - Hung Up (Official Music Video)","id":"EDwb9jOVRtU","url":"https://youtu.be/EDwb9jOVRtU","author":"Warner Bros. Records","duration":327,"prettyDuration":"05:27"},{"title":"The Free - Lover On The Line","id":"gzfM7GaMtoM","url":"https://youtu.be/gzfM7GaMtoM","author":"sgtrenato","duration":234,"prettyDuration":"03:54"},{"title":"Edward Maya & Vika Jigulina - Stereo Love (Official Music Video)","id":"p-Z3YrHJ1sU","url":"https://youtu.be/p-Z3YrHJ1sU","author":"Spinnin' Records","duration":253,"prettyDuration":"04:13"},{"title":"Kasino - Can't Get Over","id":"SUBZ0e4aRE4","url":"https://youtu.be/SUBZ0e4aRE4","author":"Edilson C","duration":211,"prettyDuration":"03:31"},{"title":"David Guetta - Baby When The Light","id":"t1jWUPXVams","url":"https://youtu.be/t1jWUPXVams","author":"emimusic","duration":211,"prettyDuration":"03:31"},{"title":"Flo Rida feat. David Guetta - Club Can't Handle Me - Step Up 3D Music Video","id":"zyUA_6sV2AU","url":"https://youtu.be/zyUA_6sV2AU","author":"ClevverTV","duration":237,"prettyDuration":"03:57"},{"title":"KT Tunstall - Suddenly I See","id":"Wh2AEwOtFHA","url":"https://youtu.be/Wh2AEwOtFHA","author":"emimusic","duration":196,"prettyDuration":"03:16"},{"title":"Counting Crows - Accidentally in Love Official","id":"QUypt2nvorM","url":"https://youtu.be/QUypt2nvorM","author":"Counting Crows","duration":193,"prettyDuration":"03:13"},{"title":"All Star - Smash Mouth [Lyrics]","id":"5ZYgIrqELFw","url":"https://youtu.be/5ZYgIrqELFw","author":"FourLyrics","duration":203,"prettyDuration":"03:23"},{"title":"Funky town Lyrics","id":"ax68rWI4Tuk","url":"https://youtu.be/ax68rWI4Tuk","author":"sarahtheperson","duration":237,"prettyDuration":"03:57"},{"title":"Ricky Martin - Livin' La Vida Loca","id":"p47fEXGabaY","url":"https://youtu.be/p47fEXGabaY","author":"RickyMartinVEVO","duration":223,"prettyDuration":"03:43"},{"title":"I'm A Believer Shrek Music Video","id":"gUyu5prWjTE","url":"https://youtu.be/gUyu5prWjTE","author":"LilMissPenguin16","duration":186,"prettyDuration":"03:06"},{"title":"Get Lucky (Official Audio)","id":"5NV6Rdv1a3I","url":"https://youtu.be/5NV6Rdv1a3I","author":"DaftPunkVEVO","duration":249,"prettyDuration":"04:09"},{"title":"Cascada- Everytime We Touch lyrics","id":"3YV14KjbRIA","url":"https://youtu.be/3YV14KjbRIA","author":"Yan-Caesha Cabiton","duration":201,"prettyDuration":"03:21"},{"title":"Toxic - Britney Spears (Lyrics)","id":"uCRT8IItGpw","url":"https://youtu.be/uCRT8IItGpw","author":"LeChez Bowser","duration":209,"prettyDuration":"03:29"},{"title":"britney spears - My Prerogative lyrics.","id":"vd79XC8kzbI","url":"https://youtu.be/vd79XC8kzbI","author":"zdifferent","duration":208,"prettyDuration":"03:28"},{"title":"britney spears - overprotected - lyrics","id":"wwQ7X1Pjpvs","url":"https://youtu.be/wwQ7X1Pjpvs","author":"Paweł Pablo","duration":200,"prettyDuration":"03:20"},{"title":"Britney Spears - Oops!...I Did It Again (With Lyrics)","id":"DEsqGOHo0nI","url":"https://youtu.be/DEsqGOHo0nI","author":"nkousar","duration":206,"prettyDuration":"03:26"},{"title":"Britney Spears - I Wanna Go [Full Song]","id":"F94hVx3cw88","url":"https://youtu.be/F94hVx3cw88","author":"Matheus Fernandes","duration":211,"prettyDuration":"03:31"},{"title":"Jennifer Lopez - Play, Lyrics In Video","id":"haIpoOCFdzM","url":"https://youtu.be/haIpoOCFdzM","author":"Freshtopher","duration":214,"prettyDuration":"03:34"},{"title":"Jennifer Lopez-Get Right","id":"o-JOjy8CyIk","url":"https://youtu.be/o-JOjy8CyIk","author":"JloFans900","duration":225,"prettyDuration":"03:45"},{"title":"Jennifer Lopez-If You Had My Love (Lyrics)","id":"vgV8Lk_jVr4","url":"https://youtu.be/vgV8Lk_jVr4","author":"921Lovely","duration":266,"prettyDuration":"04:26"},{"title":"Lady Gaga - Bad Romance","id":"qrO4YZeyl0I","url":"https://youtu.be/qrO4YZeyl0I","author":"LadyGagaVEVO","duration":308,"prettyDuration":"05:08"},{"title":"Lady Gaga - Poker Face","id":"bESGLojNYSo","url":"https://youtu.be/bESGLojNYSo","author":"LadyGagaVEVO","duration":216,"prettyDuration":"03:36"},{"title":"Lady Gaga - Just Dance ft. Colby O'Donis","id":"2Abk1jAONjw","url":"https://youtu.be/2Abk1jAONjw","author":"LadyGagaVEVO","duration":247,"prettyDuration":"04:07"},{"title":"TiK ToK Kesha With Lyrics On Screen HQ","id":"GQ3f9UfTcVQ","url":"https://youtu.be/GQ3f9UfTcVQ","author":"1cheer95","duration":206,"prettyDuration":"03:26"},{"title":"Katy Perry - Firework (Lyric Video)","id":"b3bkpyNiv8Y","url":"https://youtu.be/b3bkpyNiv8Y","author":"KatyPerryVEVO","duration":227,"prettyDuration":"03:47"},{"title":"Katy Perry - Hot N'Cold Lyrics","id":"P466Nq-kjY4","url":"https://youtu.be/P466Nq-kjY4","author":"katarinnamoura","duration":219,"prettyDuration":"03:39"},{"title":"Hilary Duff - What Dreams are made of Lyrics","id":"uen-A9Yw67Y","url":"https://youtu.be/uen-A9Yw67Y","author":"invisiblelive","duration":238,"prettyDuration":"03:58"},{"title":"Hilary Duff - The Getaway (Lyrics On Screen)","id":"8wmLHuBZZSQ","url":"https://youtu.be/8wmLHuBZZSQ","author":"xTheLyricsManiax","duration":209,"prettyDuration":"03:29"},{"title":"Hannah Montana - The best of both Worlds [w/Lyrics] HQ","id":"wAPWGmvrqqw","url":"https://youtu.be/wAPWGmvrqqw","author":"miiLeyfanx3","duration":192,"prettyDuration":"03:12"},{"title":"Ashley Tisdale - It's Alright, It's OK","id":"On_ZPiDEqkA","url":"https://youtu.be/On_ZPiDEqkA","author":"Ashley Tisdale","duration":196,"prettyDuration":"03:16"},{"title":"Selena Gomez - Tell Me Something I Don't Know Lyrics","id":"7HDoLfg7Ahg","url":"https://youtu.be/7HDoLfg7Ahg","author":"Ashley🙈🙉🙊","duration":199,"prettyDuration":"03:19"},{"title":"Selena Gomez - Magic (legendado)","id":"cAUzae_H55c","url":"https://youtu.be/cAUzae_H55c","author":"Day Martins","duration":172,"prettyDuration":"02:52"},{"title":"Shake It Up - Selena Gomez HQ Lyrics","id":"3S6VUwqpOWw","url":"https://youtu.be/3S6VUwqpOWw","author":"SuperFragaliciousify","duration":179,"prettyDuration":"02:59"},{"title":"Bridget Mendler- Hang In There Baby (Lyrics + HQ Download)","id":"TvDADTjzt9Y","url":"https://youtu.be/TvDADTjzt9Y","author":"HollyBerry905","duration":161,"prettyDuration":"02:41"},{"title":"\"Watch Me\" from Disney Channel's \"Shake It Up\"","id":"PPNMGYOm1aM","url":"https://youtu.be/PPNMGYOm1aM","author":"ShakeItUpVEVO","duration":194,"prettyDuration":"03:14"}]},
	          {"name": "Rock", playlist: [{"title":"Jota Quest - Amor Maior","id":"g00GIGw04jg","url":"https://youtu.be/g00GIGw04jg","author":"jotaquestVEVO","duration":208,"prettyDuration":"03:28"},{"title":"JOTA QUEST - SÓ HOJE","id":"Ivaqcws6HVA","url":"https://youtu.be/Ivaqcws6HVA","author":"Musicas ama","duration":223,"prettyDuration":"03:43"},{"title":"Jota Quest - Do Seu Lado","id":"VaoPjRF6uzM","url":"https://youtu.be/VaoPjRF6uzM","author":"maufbr","duration":359,"prettyDuration":"05:59"},{"title":"Jota Quest - O Sol (Video Clipe)","id":"wPBFZldSsMI","url":"https://youtu.be/wPBFZldSsMI","author":"jotaquestVEVO","duration":245,"prettyDuration":"04:05"},{"title":"Jota Quest - Sempre Assim","id":"ncIopcNqz80","url":"https://youtu.be/ncIopcNqz80","author":"jotaquestVEVO","duration":245,"prettyDuration":"04:05"},{"title":"Facil - Jota Quest","id":"uehgINuGgxo","url":"https://youtu.be/uehgINuGgxo","author":"Franstarfix","duration":321,"prettyDuration":"05:21"},{"title":"Jota Quest - Além Do Horizonte (Video Clipe)","id":"KnmWg7aEyiE","url":"https://youtu.be/KnmWg7aEyiE","author":"jotaquestVEVO","duration":247,"prettyDuration":"04:07"},{"title":"Skank - Resposta","id":"81Szobx5SLM","url":"https://youtu.be/81Szobx5SLM","author":"SkankVEVO","duration":246,"prettyDuration":"04:06"},{"title":"Skank - Garota Nacional","id":"DjPtwYunRq4","url":"https://youtu.be/DjPtwYunRq4","author":"SkankVEVO","duration":293,"prettyDuration":"04:53"},{"title":"Skank - Te Ver","id":"NK88geNsUmQ","url":"https://youtu.be/NK88geNsUmQ","author":"SkankVEVO","duration":272,"prettyDuration":"04:32"},{"title":"Skank - De Repente","id":"o5g6g4ogUbo","url":"https://youtu.be/o5g6g4ogUbo","author":"SkankVEVO","duration":258,"prettyDuration":"04:18"},{"title":"Skank - Vou Deixar","id":"j9tAJ3ZyLMY","url":"https://youtu.be/j9tAJ3ZyLMY","author":"SkankVEVO","duration":231,"prettyDuration":"03:51"},{"title":"Skank - Ainda gosto dela","id":"FBVV13YiBCc","url":"https://youtu.be/FBVV13YiBCc","author":"SkankVEVO","duration":221,"prettyDuration":"03:41"},{"title":"Detonautas - Você me faz tão bem","id":"2Nt8aRLQM8Y","url":"https://youtu.be/2Nt8aRLQM8Y","author":"detonautasVEVO","duration":228,"prettyDuration":"03:48"},{"title":"Detonautas - O dia que não terminou","id":"aJzDdSP_LHY","url":"https://youtu.be/aJzDdSP_LHY","author":"detonautasVEVO","duration":252,"prettyDuration":"04:12"},{"title":"Detonautas - Quando o Sol Se For","id":"9s3o85FqiVA","url":"https://youtu.be/9s3o85FqiVA","author":"Warner Music Brasil","duration":223,"prettyDuration":"03:43"},{"title":"Detonautas - Olhos Certos","id":"taisJwf21sM","url":"https://youtu.be/taisJwf21sM","author":"Joshua Fantini","duration":264,"prettyDuration":"04:24"},{"title":"Detonautas - Outro Lugar","id":"8zsZ3Ql8x7o","url":"https://youtu.be/8zsZ3Ql8x7o","author":"Warner Music Brasil","duration":234,"prettyDuration":"03:54"},{"title":"Detonautas - Só por hoje","id":"NNak75p3Xu8","url":"https://youtu.be/NNak75p3Xu8","author":"El ton","duration":241,"prettyDuration":"04:01"},{"title":"Detonautas - Dia Comum (Ao Vivo No Programa Altas Horas)","id":"9conDZnFLPY","url":"https://youtu.be/9conDZnFLPY","author":"Erick Gurgel","duration":346,"prettyDuration":"05:46"},{"title":"Pitty - Me Adora (Videoclipe Oficial)","id":"66PrK9b_WD8","url":"https://youtu.be/66PrK9b_WD8","author":"Deckdisc","duration":274,"prettyDuration":"04:34"},{"title":"Pitty - Na Sua Estante - ao vivo","id":"Wss27HmVwDM","url":"https://youtu.be/Wss27HmVwDM","author":"Deusdete Oliveira","duration":248,"prettyDuration":"04:08"},{"title":"Pitty - Equalize","id":"wKRpQ4uZFhY","url":"https://youtu.be/wKRpQ4uZFhY","author":"Deckdisc","duration":233,"prettyDuration":"03:53"},{"title":"Pitty - Temporal","id":"NdJQUiHY1R4","url":"https://youtu.be/NdJQUiHY1R4","author":"Deckdisc","duration":246,"prettyDuration":"04:06"},{"title":"Ira! e Pitty - Eu Quero Sempre Mais","id":"iydqURMhUGk","url":"https://youtu.be/iydqURMhUGk","author":"Deckdisc","duration":237,"prettyDuration":"03:57"},{"title":"Assim caminha a humanidade","id":"iP9zV5iAYJI","url":"https://youtu.be/iP9zV5iAYJI","author":"arauuujjoo","duration":187,"prettyDuration":"03:07"},{"title":"LULU SANTOS - ninguém merece","id":"r_Gctm4eEI4","url":"https://youtu.be/r_Gctm4eEI4","author":"Wesley Olivveir","duration":238,"prettyDuration":"03:58"},{"title":"Ruanitas - Fui Eu - Malhação ID 2010 (Gravação da música)","id":"NIJLqLN2pCQ","url":"https://youtu.be/NIJLqLN2pCQ","author":"felipemmello","duration":183,"prettyDuration":"03:03"},{"title":"Ruanitas - Vaza !","id":"OSIZFlp2bWU","url":"https://youtu.be/OSIZFlp2bWU","author":"horsetorce","duration":213,"prettyDuration":"03:33"},{"title":"Reação Em Cadeia - Me Odeie (Clipe Oficial)","id":"_PA42sCi8JA","url":"https://youtu.be/_PA42sCi8JA","author":"channelrec","duration":207,"prettyDuration":"03:27"},{"title":"Charlie Brown Jr. - Só os Loucos Sabem","id":"JRJj4z-prvM","url":"https://youtu.be/JRJj4z-prvM","author":"charliebrownjrVEVO","duration":206,"prettyDuration":"03:26"},{"title":"Charlie Brown Jr. - Senhor Do Tempo","id":"FfvXafsDcws","url":"https://youtu.be/FfvXafsDcws","author":"Zangados iMusic","duration":203,"prettyDuration":"03:23"},{"title":"Te levar Charlie Brown Jr","id":"UhEYsC9F2Kw","url":"https://youtu.be/UhEYsC9F2Kw","author":"wellitdb1992","duration":182,"prettyDuration":"03:02"},{"title":"(Malhação Nacional 2006) Lutar Pelo que É Meu - Charlie Brown","id":"8v_P8mhFnCM","url":"https://youtu.be/8v_P8mhFnCM","author":"JUNIOR SILVA","duration":201,"prettyDuration":"03:21"},{"title":"Charlie Brown Jr. Ela Vai Voltar MALHAÇÃO 2013/2014 (Com legenda) HD","id":"twXw5ysWogE","url":"https://youtu.be/twXw5ysWogE","author":"luana camara","duration":189,"prettyDuration":"03:09"},{"title":"Charlie Brown Jr - Papo Reto","id":"u5AVFBGzscc","url":"https://youtu.be/u5AVFBGzscc","author":"SubWooferVideos","duration":217,"prettyDuration":"03:37"},{"title":"Só por uma noite Charlie Brown Jr.","id":"reRSNLlFLoY","url":"https://youtu.be/reRSNLlFLoY","author":"Ingrid Ivana","duration":198,"prettyDuration":"03:18"},{"title":"Ls Jack - Sem radar (letra)","id":"S1P4uQltWPY","url":"https://youtu.be/S1P4uQltWPY","author":"Matheus Jr.","duration":233,"prettyDuration":"03:53"},{"title":"LS JACK - AMANHÃ NÃO SE SABE","id":"9H7sHEBn2PA","url":"https://youtu.be/9H7sHEBn2PA","author":"Vanessa Oliveira","duration":263,"prettyDuration":"04:23"},{"title":"Capital Inicial - Primeiros Erros (Chove) (Ao Vivo) (Video)","id":"jabmx3QoJGA","url":"https://youtu.be/jabmx3QoJGA","author":"capitalinicialVEVO","duration":336,"prettyDuration":"05:36"},{"title":"A sua maneira ( Capital Inicial )","id":"DehjjDvK1jk","url":"https://youtu.be/DehjjDvK1jk","author":"MARATAY1","duration":261,"prettyDuration":"04:21"},{"title":"Capital Inicial - Nao Olhe Pra Trás (video Clip)","id":"pMGPz8x8wMU","url":"https://youtu.be/pMGPz8x8wMU","author":"capitalinicialVEVO","duration":260,"prettyDuration":"04:20"},{"title":"Capital Inicial - Eu Nunca Disse Adeus (Letra)","id":"8Puw8wnHRqI","url":"https://youtu.be/8Puw8wnHRqI","author":"Larissa Alessandra","duration":218,"prettyDuration":"03:38"}]},
	          {"name": "S & J", playlist: [{"title":"Cade voce que nao esta - Sandy e Junior (Legendado)","id":"RaxTET0SDSw","url":"https://youtu.be/RaxTET0SDSw","author":"Roberta Brandão","duration":219,"prettyDuration":"03:39"},{"title":"Sandy e Junior - O Principe Dos Mares","id":"PR8mRG4Ti_c","url":"https://youtu.be/PR8mRG4Ti_c","author":"htown1671","duration":262,"prettyDuration":"04:22"},{"title":"Sandy e Junior - Deixa eu tentar","id":"J0Fx1qrHFyk","url":"https://youtu.be/J0Fx1qrHFyk","author":"luknha santos","duration":234,"prettyDuration":"03:54"},{"title":"Me leve com voce - Sandy e Junior (Legendado)","id":"V4LVQW9KJvo","url":"https://youtu.be/V4LVQW9KJvo","author":"Roberta Brandão","duration":249,"prettyDuration":"04:09"},{"title":"Nada é por Acaso - Sandy e Junior","id":"L9jdR0xYWMs","url":"https://youtu.be/L9jdR0xYWMs","author":"Roberto Ruiz","duration":255,"prettyDuration":"04:15"},{"title":"Sandy & Junior - Não Ter (com letra)","id":"INIvIzEGulk","url":"https://youtu.be/INIvIzEGulk","author":"Luka3Kellll","duration":286,"prettyDuration":"04:46"},{"title":"Sandy & Junior - As Quatro Estações","id":"G2gtONmxh4Q","url":"https://youtu.be/G2gtONmxh4Q","author":"SandyAndJuniorVEVO","duration":248,"prettyDuration":"04:08"},{"title":"Sandy e Junior Words are not enough","id":"sYCJv9QAvB4","url":"https://youtu.be/sYCJv9QAvB4","author":"liah14","duration":198,"prettyDuration":"03:18"},{"title":"Sandy e Junior - O Amor Faz","id":"XZ4OL9HDsGo","url":"https://youtu.be/XZ4OL9HDsGo","author":"Polysss","duration":260,"prettyDuration":"04:20"},{"title":"Sandy e Junior - Bye Bye","id":"FIO0aTxGDmk","url":"https://youtu.be/FIO0aTxGDmk","author":"vanessa freitas","duration":200,"prettyDuration":"03:20"},{"title":"Sandy e junior Clipe Eu Quero Mais","id":"daLfLVlng2c","url":"https://youtu.be/daLfLVlng2c","author":"Blogeraumavez","duration":223,"prettyDuration":"03:43"},{"title":"Na boa e sem chorar - Sandy e Junior (Legendado)","id":"hXQzXpb3h1I","url":"https://youtu.be/hXQzXpb3h1I","author":"Roberta Brandão","duration":245,"prettyDuration":"04:05"},{"title":"Arte do coração - Sandy e Junior (Legendado)","id":"vDISwtl6B5o","url":"https://youtu.be/vDISwtl6B5o","author":"Roberta Brandão","duration":278,"prettyDuration":"04:38"},{"title":"Seriado Sandy e Junior   Clipe Endless love","id":"HRpC925be-U","url":"https://youtu.be/HRpC925be-U","author":"Eraumavezsej","duration":253,"prettyDuration":"04:13"},{"title":"Sandy e Junior - Como Um Flash","id":"92xUUuDDmXE","url":"https://youtu.be/92xUUuDDmXE","author":"amamosej","duration":224,"prettyDuration":"03:44"},{"title":"Sandy & Junior - Inesquecível","id":"ZMzHjjy3Ja0","url":"https://youtu.be/ZMzHjjy3Ja0","author":"Rogi Semog","duration":223,"prettyDuration":"03:43"},{"title":"Sandy e Junior - Um Lugar Perfeito Pro Amor Viver","id":"sDn_-7_Y87g","url":"https://youtu.be/sDn_-7_Y87g","author":"biaprsejr","duration":233,"prettyDuration":"03:53"},{"title":"Sandy & Junior - Eu Acho Que Pirei","id":"VwT1rgN4mCg","url":"https://youtu.be/VwT1rgN4mCg","author":"Rogi Semog","duration":200,"prettyDuration":"03:20"},{"title":"Sandy & Junior - A Lenda","id":"IUXwjFmUUxU","url":"https://youtu.be/IUXwjFmUUxU","author":"SandyAndJuniorVEVO","duration":271,"prettyDuration":"04:31"},{"title":"Sandy e Junior e Enrique Iglesias - You're My Number One (Legendado)","id":"GSSEfSO56rU","url":"https://youtu.be/GSSEfSO56rU","author":"RickCaverinha","duration":251,"prettyDuration":"04:11"},{"title":"Sandy e Junior - Eu posso Quase Tudo (com Letra)","id":"lu8Q9puAQNg","url":"https://youtu.be/lu8Q9puAQNg","author":"Polysss","duration":202,"prettyDuration":"03:22"},{"title":"Sandy e Junior - I Will Lift You Up (As Quatro Estações)","id":"znQdos56REc","url":"https://youtu.be/znQdos56REc","author":"Precisa Saber","duration":240,"prettyDuration":"04:00"},{"title":"Sandy e Junior - Pot Pourri Bee Gees","id":"L2bKT8C5Gf4","url":"https://youtu.be/L2bKT8C5Gf4","author":"biaprsejr","duration":200,"prettyDuration":"03:20"}]},
	          {"name": "OST", playlist: [{"title":"The Magical Quest Starring Mickey Mouse Music - Treetops (Stage 1)","id":"mtVpkfYrlsk","url":"https://youtu.be/mtVpkfYrlsk","author":"FiroshiITA","duration":159,"prettyDuration":"02:39"},{"title":"Magical Quest, The - Starring Mickey Mouse (SNES) Music - Stage 02 Dark Forest","id":"JOgLl9dbm6M","url":"https://youtu.be/JOgLl9dbm6M","author":"gbelair3","duration":178,"prettyDuration":"02:58"},{"title":"Magical Quest, The - Starring Mickey Mouse (SNES) Music - Stage 03 Fire Grotto","id":"mq-jFRMtn5w","url":"https://youtu.be/mq-jFRMtn5w","author":"gbelair3","duration":180,"prettyDuration":"03:00"},{"title":"The Magical Quest Starring Mickey Mouse OST- stage 4 pet's peek","id":"AaU6jEfZ1o0","url":"https://youtu.be/AaU6jEfZ1o0","author":"Wolfox Folf","duration":187,"prettyDuration":"03:07"},{"title":"The Magical Quest Starring Mickey Mouse Music - Snow Valley (Stage 5)","id":"lIg6Hfj4sQM","url":"https://youtu.be/lIg6Hfj4sQM","author":"FiroshiITA","duration":147,"prettyDuration":"02:27"},{"title":"Magical Quest, The - Starring Mickey Mouse (SNES) Music - Boss Battle 02","id":"_u-1D3De1YI","url":"https://youtu.be/_u-1D3De1YI","author":"gbelair3","duration":99,"prettyDuration":"01:39"},{"title":"Disney's Magical Mirror Starring Mickey Mouse - Soundtrack - 01","id":"i_8SYY4rIfY","url":"https://youtu.be/i_8SYY4rIfY","author":"Som2106","duration":181,"prettyDuration":"03:01"},{"title":"Disney's Magical Mirror Starring Mickey Mouse - Soundtrack - 03","id":"NUDpKbJ4N3s","url":"https://youtu.be/NUDpKbJ4N3s","author":"Som2106","duration":181,"prettyDuration":"03:01"},{"title":"Street Fighter 2 - Balrog Theme Soundtrack - SNES","id":"ptx0l7Szdq0","url":"https://youtu.be/ptx0l7Szdq0","author":"Soap Tsary","duration":223,"prettyDuration":"03:43"},{"title":"Street Fighter 2 - Guile Theme Soundtrack - SNES","id":"TBR2x1v-5s4","url":"https://youtu.be/TBR2x1v-5s4","author":"Soap Tsary","duration":146,"prettyDuration":"02:26"},{"title":"Donkey Kong Country OST - Jungle Groove","id":"F17pCaCCLKA","url":"https://youtu.be/F17pCaCCLKA","author":"SonicSpeedsMyGame","duration":280,"prettyDuration":"04:40"},{"title":"Donkey Kong Country OST 5 Cranky's Theme","id":"-urk0nWomxU","url":"https://youtu.be/-urk0nWomxU","author":"Cychreus VGE","duration":121,"prettyDuration":"02:01"},{"title":"Donkey Kong Country Soundtrack - 01 Theme","id":"2pYpBNlDdlU","url":"https://youtu.be/2pYpBNlDdlU","author":"YX2S","duration":122,"prettyDuration":"02:02"},{"title":"Donkey Kong 64 Music - Jungle Japes","id":"pAdh0O-Zu-A","url":"https://youtu.be/pAdh0O-Zu-A","author":"Nawaf Mario","duration":151,"prettyDuration":"02:31"},{"title":"Donkey Kong 64 - Frantic Factory","id":"B3vBKW7nybU","url":"https://youtu.be/B3vBKW7nybU","author":"mariodonkeykong1990","duration":268,"prettyDuration":"04:28"},{"title":"Donkey Kong 64 Music - DK Isle","id":"P7OcrCl9Hy8","url":"https://youtu.be/P7OcrCl9Hy8","author":"Nawaf Mario","duration":153,"prettyDuration":"02:33"},{"title":"Main Title - Banjo-Kazooie","id":"dQNAVqW1shA","url":"https://youtu.be/dQNAVqW1shA","author":"GilvaSunner","duration":69,"prettyDuration":"01:09"},{"title":"Treasure Trove Cove - Banjo-Kazooie","id":"3nxFYoGNJKc","url":"https://youtu.be/3nxFYoGNJKc","author":"GilvaSunner","duration":247,"prettyDuration":"04:07"},{"title":"Witchyworld - Banjo-Tooie","id":"diqeH6PLUTs","url":"https://youtu.be/diqeH6PLUTs","author":"GilvaSunner","duration":263,"prettyDuration":"04:23"},{"title":"Spiral Mountain - Banjo-Tooie","id":"RAw-ZXwUUTA","url":"https://youtu.be/RAw-ZXwUUTA","author":"GilvaSunner","duration":257,"prettyDuration":"04:17"},{"title":"Banjo-Tooie Music: Terrydactyland","id":"Zfs5yLrmTM4","url":"https://youtu.be/Zfs5yLrmTM4","author":"southernpickle","duration":255,"prettyDuration":"04:15"},{"title":"Banjo-Tooie - OST - Jinjo Village","id":"CVFKQHGVW7U","url":"https://youtu.be/CVFKQHGVW7U","author":"LinLockheart","duration":271,"prettyDuration":"04:31"},{"title":"Kirby Super Star OST - Green Greens","id":"yZrgeGt9sGw","url":"https://youtu.be/yZrgeGt9sGw","author":"SonicSpeedsMyGame","duration":111,"prettyDuration":"01:51"},{"title":"Kirby Super Star OST - Run, Kirby, Run!","id":"n1LMKVoSZ28","url":"https://youtu.be/n1LMKVoSZ28","author":"Paineity","duration":138,"prettyDuration":"02:18"},{"title":"Kirby Super Star OST - Marshmallow Castle","id":"ddIKFWLS42I","url":"https://youtu.be/ddIKFWLS42I","author":"Paineity","duration":123,"prettyDuration":"02:03"},{"title":"Kirby Squeak Squad OST - Having Fun Outside","id":"tcHCmo11Fyo","url":"https://youtu.be/tcHCmo11Fyo","author":"Paineity","duration":98,"prettyDuration":"01:38"},{"title":"Kirby Super Star Ultra OST - Float Islands","id":"a6lKjgmMoZ4","url":"https://youtu.be/a6lKjgmMoZ4","author":"Paineity","duration":69,"prettyDuration":"01:09"},{"title":"Kirby Super Star OST - Candy Mountain","id":"0RxAzFLuc1o","url":"https://youtu.be/0RxAzFLuc1o","author":"Paineity","duration":103,"prettyDuration":"01:43"},{"title":"Kirby Super Star OST - Save Hut","id":"E9DXXtSdpOs","url":"https://youtu.be/E9DXXtSdpOs","author":"Paineity","duration":55,"prettyDuration":"00:55"},{"title":"Kirby Super Star Ultra OST - Peanut Plain","id":"4C00_DqAkKk","url":"https://youtu.be/4C00_DqAkKk","author":"Paineity","duration":94,"prettyDuration":"01:34"},{"title":"Quiet Forest - Kirby 64: The Crystal Shards","id":"LvD6AyM31B0","url":"https://youtu.be/LvD6AyM31B0","author":"GilvaSunner","duration":144,"prettyDuration":"02:24"},{"title":"Shiver Star - Kirby 64: The Crystal Shards","id":"bGUZG8V1OMU","url":"https://youtu.be/bGUZG8V1OMU","author":"GilvaSunner","duration":165,"prettyDuration":"02:45"},{"title":"Kirby 64: The Crystal Shards OST - Down the Mountain Stream","id":"dDgB4_ZXB6w","url":"https://youtu.be/dDgB4_ZXB6w","author":"Video Game Soundtracks","duration":108,"prettyDuration":"01:48"},{"title":"Rock Star - Kirby 64: The Crystal Shards","id":"PBHVycBi-oU","url":"https://youtu.be/PBHVycBi-oU","author":"GilvaSunner","duration":167,"prettyDuration":"02:47"},{"title":"Kirby 64: The Crystal Shards - Dedede's Castle","id":"aMXfmKhm9wE","url":"https://youtu.be/aMXfmKhm9wE","author":"allkirbysongs","duration":267,"prettyDuration":"04:27"},{"title":"Kirby 64: The Crystal Shards Music- Big Eruption!","id":"P-PPSw_cjWQ","url":"https://youtu.be/P-PPSw_cjWQ","author":"SilverShadowMusic","duration":160,"prettyDuration":"02:40"},{"title":"Kirby 64 :The Crystal Shards Music- Grasslands 1","id":"HmyoM3JS2GU","url":"https://youtu.be/HmyoM3JS2GU","author":"SilverShadowMusic","duration":177,"prettyDuration":"02:57"},{"title":"Kirby 64: The Crystal Shards OST - Shiver Star","id":"6lnX5ilby9Y","url":"https://youtu.be/6lnX5ilby9Y","author":"Video Game Soundtracks","duration":110,"prettyDuration":"01:50"},{"title":"Kirby 64: The Crystal Shards Music- Boss Battle","id":"wpiyrB-R11k","url":"https://youtu.be/wpiyrB-R11k","author":"SilverShadowMusic","duration":142,"prettyDuration":"02:22"},{"title":"Pop Star - Kirby 64: The Crystal Shards","id":"KjFaq2rueKs","url":"https://youtu.be/KjFaq2rueKs","author":"GilvaSunner","duration":176,"prettyDuration":"02:56"},{"title":"Kirby 64: The Crystal Shards Music- Snow","id":"lzROIaEItjQ","url":"https://youtu.be/lzROIaEItjQ","author":"SilverShadowMusic","duration":174,"prettyDuration":"02:54"},{"title":"Super Smash Bros Brawl  Music- Fountain of Dreams (Melee) - (HD)","id":"CSEr74W04oA","url":"https://youtu.be/CSEr74W04oA","author":"YoshiCrazyPrime","duration":325,"prettyDuration":"05:25"},{"title":"Forest / Nature Area - Super Smash Bros. Brawl","id":"W0DyrphuNoc","url":"https://youtu.be/W0DyrphuNoc","author":"GilvaSunner","duration":108,"prettyDuration":"01:48"},{"title":"Super Mario 64 Soundtrack - Bomb-omb Battlefield","id":"g4TOM5Mitps","url":"https://youtu.be/g4TOM5Mitps","author":"rudreadingiam","duration":142,"prettyDuration":"02:22"},{"title":"Super Mario 64 - Snow Mountain - HD","id":"8w7pGMnKqaM","url":"https://youtu.be/8w7pGMnKqaM","author":"YoshiCrazyPrime","duration":182,"prettyDuration":"03:02"},{"title":"Super Mario 64 Soundtrack - Water World","id":"qAXoL8TnE0I","url":"https://youtu.be/qAXoL8TnE0I","author":"Hawelo92","duration":187,"prettyDuration":"03:07"},{"title":"Super Mario 64: Slide Theme","id":"M-otEdq-Ozo","url":"https://youtu.be/M-otEdq-Ozo","author":"SparktheYoshi","duration":274,"prettyDuration":"04:34"},{"title":"Super Mario 64 Music- Bowser's Road","id":"eM5nOBgpDsQ","url":"https://youtu.be/eM5nOBgpDsQ","author":"SilverShadowMusic","duration":172,"prettyDuration":"02:52"},{"title":"Super Mario Sunshine Soundtrack: Delfino Plaza","id":"Ca7ewkwSYb8","url":"https://youtu.be/Ca7ewkwSYb8","author":"rudreadingiam","duration":163,"prettyDuration":"02:43"},{"title":"Super Mario Sunshine OST - Hidden Realm / The Sand Bird","id":"-XtDQRgjdJs","url":"https://youtu.be/-XtDQRgjdJs","author":"Video Game Soundtracks","duration":239,"prettyDuration":"03:59"},{"title":"Delfino Plaza - Super Mario Sunshine","id":"dcSPK5yn9K8","url":"https://youtu.be/dcSPK5yn9K8","author":"GilvaSunner","duration":177,"prettyDuration":"02:57"},{"title":"Ricco Harbor - Super Mario Sunshine","id":"P5iSWG8RHAs","url":"https://youtu.be/P5iSWG8RHAs","author":"GilvaSunner","duration":238,"prettyDuration":"03:58"},{"title":"Secret Course  - Super Mario Sunshine [OST]","id":"CEbVLf43aUE","url":"https://youtu.be/CEbVLf43aUE","author":"DeoxysPrimeX2","duration":182,"prettyDuration":"03:02"},{"title":"Bianco Hills - Super Mario Sunshine","id":"JA8JClD7jDg","url":"https://youtu.be/JA8JClD7jDg","author":"GilvaSunner","duration":161,"prettyDuration":"02:41"},{"title":"Super Mario Galaxy: OST #18 - Rosalina's Comet Observatory 3","id":"DbyqMdRS09w","url":"https://youtu.be/DbyqMdRS09w","author":"LanceNLT","duration":281,"prettyDuration":"04:41"},{"title":"Super Mario Galaxy: OST #7 - Good Egg Galaxy","id":"GurdjJOhsQs","url":"https://youtu.be/GurdjJOhsQs","author":"LanceNLT","duration":279,"prettyDuration":"04:39"},{"title":"Super Mario Galaxy: OST #28 - Super Mario 2007","id":"lAIzpICx6us","url":"https://youtu.be/lAIzpICx6us","author":"LanceNLT","duration":208,"prettyDuration":"03:28"},{"title":"Baby Park - Mario Kart: Double Dash!!","id":"y99wX-JZGJo","url":"https://youtu.be/y99wX-JZGJo","author":"GilvaSunner","duration":219,"prettyDuration":"03:39"},{"title":"Mario Kart Double Dash OST #1: Luigi Circuit","id":"VOhssH9_SLY","url":"https://youtu.be/VOhssH9_SLY","author":"TheDbzman13","duration":297,"prettyDuration":"04:57"},{"title":"Mario Kart DS [OST] - Frappe Snowland (N64)","id":"TgHnirrLx4w","url":"https://youtu.be/TgHnirrLx4w","author":"DeoxysPrimeX2","duration":143,"prettyDuration":"02:23"},{"title":"Mario Kart DS Soundtrack - Select Mode","id":"D7obvCfGr-o","url":"https://youtu.be/D7obvCfGr-o","author":"MasterOfDesaster6587","duration":83,"prettyDuration":"01:23"},{"title":"Mario Kart DS [OST] - Peach Circuit (GBA)","id":"UKV0Mn_gzvo","url":"https://youtu.be/UKV0Mn_gzvo","author":"DeoxysPrimeX2","duration":116,"prettyDuration":"01:56"},{"title":"Mario Kart DS [OST] - Wi-Fi Menu","id":"0nGZPE25VuU","url":"https://youtu.be/0nGZPE25VuU","author":"DeoxysPrimeX2","duration":119,"prettyDuration":"01:59"},{"title":"Mario Kart DS Music - GBA Sky Garden (No Engine Sound)","id":"tZEjOiYh1x0","url":"https://youtu.be/tZEjOiYh1x0","author":"supahmario1","duration":90,"prettyDuration":"01:30"},{"title":"Rainbow Road - Mario Kart: Double Dash!!","id":"FHdEjH_7YY8","url":"https://youtu.be/FHdEjH_7YY8","author":"GilvaSunner","duration":174,"prettyDuration":"02:54"},{"title":"Rainbow Road - Mario Kart Wii","id":"PhOHzGuYBqA","url":"https://youtu.be/PhOHzGuYBqA","author":"GilvaSunner","duration":174,"prettyDuration":"02:54"},{"title":"Main Menu - Mario Kart Wii","id":"KPa9yWdykLE","url":"https://youtu.be/KPa9yWdykLE","author":"GilvaSunner","duration":128,"prettyDuration":"02:08"},{"title":"Delfino Square (DS) - Mario Kart Wii [OST]","id":"ry4Uu0sxjSo","url":"https://youtu.be/ry4Uu0sxjSo","author":"DeoxysPrimeX2","duration":154,"prettyDuration":"02:34"},{"title":"Sonic Advance Music: Ice Mountain Zone Act 1","id":"YhScNIi2rgI","url":"https://youtu.be/YhScNIi2rgI","author":"sonicKAI","duration":219,"prettyDuration":"03:39"},{"title":"Sonic Advance Music: Casino Paradise Zone Act 1","id":"NjMheEmcGgQ","url":"https://youtu.be/NjMheEmcGgQ","author":"sonicKAI","duration":218,"prettyDuration":"03:38"},{"title":"Sonic Advance 2 Original Soundtrack - 19 Leaf Forest Act 1","id":"02KrvN2s2rg","url":"https://youtu.be/02KrvN2s2rg","author":"HikusonX","duration":150,"prettyDuration":"02:30"},{"title":"Sonic Adventure DX OST: Emerald Coast (Azure Blue World)","id":"lCHm88T1Llo","url":"https://youtu.be/lCHm88T1Llo","author":"3godzilla3","duration":255,"prettyDuration":"04:15"},{"title":"Sonic Adventure OST - Mystic Ruins","id":"Jc_pxobhl4A","url":"https://youtu.be/Jc_pxobhl4A","author":"linkaegar","duration":150,"prettyDuration":"02:30"},{"title":"Sonic Adventure DX OST: Speed Highway (At Dawn)","id":"jfyB7zQqyrw","url":"https://youtu.be/jfyB7zQqyrw","author":"3godzilla3","duration":162,"prettyDuration":"02:42"},{"title":"Sonic Adventure DX OST: Speed Highway (Run through the Speed Highway)","id":"DWhRN2kdBOI","url":"https://youtu.be/DWhRN2kdBOI","author":"3godzilla3","duration":117,"prettyDuration":"01:57"},{"title":"Sonic Adventure OST - Windy Hill (Windy Valley 1)","id":"ln4-d0-uaxc","url":"https://youtu.be/ln4-d0-uaxc","author":"Paineity","duration":178,"prettyDuration":"02:58"},{"title":"Welcome To Station Square - Theme of Station Square (from Sonic Adventure)","id":"8Z9H-gpYPRo","url":"https://youtu.be/8Z9H-gpYPRo","author":"blackblur7","duration":196,"prettyDuration":"03:16"},{"title":"Sonic Heroes Soundtrack [HQ] - Power Plant","id":"U4jIiMjzizU","url":"https://youtu.be/U4jIiMjzizU","author":"StrayRaccoon","duration":124,"prettyDuration":"02:04"},{"title":"Sonic Heroes Music Stage 1 Seaside Hill","id":"4kQe61n6kZw","url":"https://youtu.be/4kQe61n6kZw","author":"TaiTheHedgehog123","duration":164,"prettyDuration":"02:44"},{"title":"Sonic Heroes Soundtrack [HQ] - Ocean Palace","id":"V4SVUlszGfM","url":"https://youtu.be/V4SVUlszGfM","author":"StrayRaccoon","duration":213,"prettyDuration":"03:33"},{"title":"Pokemon Stadium 2 OST - Title","id":"iSBt-hd6HQQ","url":"https://youtu.be/iSBt-hd6HQQ","author":"nutcase170489","duration":46,"prettyDuration":"00:46"},{"title":"Pokemon Stadium 2 OST - My Room","id":"VuUhnCNGLO0","url":"https://youtu.be/VuUhnCNGLO0","author":"nutcase170489","duration":106,"prettyDuration":"01:46"},{"title":"Pokemon Stadium 2 OST - Earl's Academy","id":"Z1Pqy_1q8Po","url":"https://youtu.be/Z1Pqy_1q8Po","author":"nutcase170489","duration":131,"prettyDuration":"02:11"},{"title":"Pokemon Stadium 2 OST - Battle Preparation","id":"Bpw975Z23eg","url":"https://youtu.be/Bpw975Z23eg","author":"nutcase170489","duration":101,"prettyDuration":"01:41"},{"title":"Pokemon Stadium 2 OST - Free Battle","id":"xk4r9UeM6jY","url":"https://youtu.be/xk4r9UeM6jY","author":"nutcase170489","duration":94,"prettyDuration":"01:34"},{"title":"Pokemon Stadium 2 OST - Johto Castle","id":"RErN6Ss-Tfw","url":"https://youtu.be/RErN6Ss-Tfw","author":"nutcase170489","duration":94,"prettyDuration":"01:34"},{"title":"Pokemon Stadium 2 OST - White City","id":"tj8XwDJH0kA","url":"https://youtu.be/tj8XwDJH0kA","author":"nutcase170489","duration":101,"prettyDuration":"01:41"},{"title":"Pokemon Stadium 2 OST - Minigames","id":"QMgUXrEav0k","url":"https://youtu.be/QMgUXrEav0k","author":"nutcase170489","duration":71,"prettyDuration":"01:11"},{"title":"Pokemon Stadium 2 OST - Egg Emergency","id":"bdxcq7RiusA","url":"https://youtu.be/bdxcq7RiusA","author":"nutcase170489","duration":61,"prettyDuration":"01:01"},{"title":"Pokemon Stadium 2 OST - Topsy-Turvy","id":"RgoaNLVatpk","url":"https://youtu.be/RgoaNLVatpk","author":"nutcase170489","duration":61,"prettyDuration":"01:01"},{"title":"Pokemon Stadium 2 OST - Delibird's Delivery","id":"BqmqITPId_M","url":"https://youtu.be/BqmqITPId_M","author":"nutcase170489","duration":51,"prettyDuration":"00:51"},{"title":"Pokemon Stadium 2 OST - Pichu's Power Plant","id":"-5UUB2lrYH8","url":"https://youtu.be/-5UUB2lrYH8","author":"nutcase170489","duration":31,"prettyDuration":"00:31"},{"title":"Phenac City - Pokémon Colosseum","id":"BoBZqp25Dvs","url":"https://youtu.be/BoBZqp25Dvs","author":"GilvaSunner","duration":197,"prettyDuration":"03:17"},{"title":"Pokemon Colosseum Soundtrack - Pyrite Town","id":"FxQxXpRDLDU","url":"https://youtu.be/FxQxXpRDLDU","author":"rudreadingiam","duration":174,"prettyDuration":"02:54"},{"title":"Pokémon Box OST - Title","id":"xU0LbL9hAo8","url":"https://youtu.be/xU0LbL9hAo8","author":"tutajkk","duration":100,"prettyDuration":"01:40"},{"title":"Pokémon Box OST - Museum","id":"sT9FrXrl-2A","url":"https://youtu.be/sT9FrXrl-2A","author":"tutajkk","duration":148,"prettyDuration":"02:28"},{"title":"Pokémon Box OST - Slateport City","id":"gcVjqZ70UQE","url":"https://youtu.be/gcVjqZ70UQE","author":"tutajkk","duration":174,"prettyDuration":"02:54"},{"title":"Pokémon Box OST - Brigette's Room","id":"-hTq0lu0TgU","url":"https://youtu.be/-hTq0lu0TgU","author":"tutajkk","duration":110,"prettyDuration":"01:50"},{"title":"Pokémon Box OST - Box Arrange","id":"MpHVwBaNUqA","url":"https://youtu.be/MpHVwBaNUqA","author":"tutajkk","duration":119,"prettyDuration":"01:59"},{"title":"Pokemon FireRed LeafGreen OST   Viridian City","id":"DLxYVexMSKA","url":"https://youtu.be/DLxYVexMSKA","author":"SuperNeku100","duration":126,"prettyDuration":"02:06"},{"title":"Pokemon FireRed LeafGreen OST   Cerulean City","id":"fIE2LqVTPkQ","url":"https://youtu.be/fIE2LqVTPkQ","author":"SuperNeku100","duration":77,"prettyDuration":"01:17"},{"title":"Pokemon FireRed-LeafGreen OST - Vermillion City","id":"XCP2QiaOsQs","url":"https://youtu.be/XCP2QiaOsQs","author":"SuperNeku100","duration":77,"prettyDuration":"01:17"},{"title":"Pokemon FireRed-LeafGreen OST - Celadon City","id":"rG8hHwwvszc","url":"https://youtu.be/rG8hHwwvszc","author":"SuperNeku100","duration":86,"prettyDuration":"01:26"},{"title":"Pokémon - Firered/Leafgreen OST [OriginalSoundTrack]: Eiland 6 & 7 (Violet City Remix)","id":"uUyj6neKtjA","url":"https://youtu.be/uUyj6neKtjA","author":"OtherSilver17","duration":78,"prettyDuration":"01:18"},{"title":"Pokemon FireRed LeafGreen OST - 37 - Road to Cerulean City from Mt. Moon","id":"YtHvK2xI1-M","url":"https://youtu.be/YtHvK2xI1-M","author":"Nukelear","duration":103,"prettyDuration":"01:43"},{"title":"Pokemon Fire Red and Leaf Green - Lavender Town music","id":"WzW9Xf08GaI","url":"https://youtu.be/WzW9Xf08GaI","author":"cheekoo98","duration":162,"prettyDuration":"02:42"},{"title":"Pokemon Firered and Leafgreen Version OST- Pallet Town","id":"4LwxweoJDP4","url":"https://youtu.be/4LwxweoJDP4","author":"PlasmaTempest39","duration":95,"prettyDuration":"01:35"},{"title":"New Bark Town - Pokémon HeartGold/SoulSilver","id":"iney2we6iTs","url":"https://youtu.be/iney2we6iTs","author":"PocketMonstersMusic","duration":131,"prettyDuration":"02:11"},{"title":"Azalea Town - Pokémon HeartGold/SoulSilver","id":"CSI3sjAl4tE","url":"https://youtu.be/CSI3sjAl4tE","author":"PocketMonstersMusic","duration":129,"prettyDuration":"02:09"},{"title":"Pokemon Heart Gold/Soul Silver - Littleroot Town Music","id":"ldvO6IRxfnY","url":"https://youtu.be/ldvO6IRxfnY","author":"utuber6061","duration":78,"prettyDuration":"01:18"},{"title":"Pokemon HeartGold and SoulSilver - Dark Cave/Ice Path","id":"1rPcKPTiqx8","url":"https://youtu.be/1rPcKPTiqx8","author":"SexeiAlexy","duration":82,"prettyDuration":"01:22"},{"title":"Cherrygrove City & Mahogany Town Music - Pokémon Heart Gold & Soul Silver","id":"2HXEHGZhfiw","url":"https://youtu.be/2HXEHGZhfiw","author":"HGSSMusic","duration":99,"prettyDuration":"01:39"},{"title":"Ecruteak City - Pokémon HeartGold/SoulSilver","id":"hVFnud60qmU","url":"https://youtu.be/hVFnud60qmU","author":"PocketMonstersMusic","duration":194,"prettyDuration":"03:14"},{"title":"Goldenrod City - Pokémon HeartGold/SoulSilver","id":"WB1nJq5V828","url":"https://youtu.be/WB1nJq5V828","author":"PocketMonstersMusic","duration":94,"prettyDuration":"01:34"},{"title":"Cianwood City - Pokémon HeartGold/SoulSilver","id":"m3cR0zmPXgA","url":"https://youtu.be/m3cR0zmPXgA","author":"PocketMonstersMusic","duration":184,"prettyDuration":"03:04"},{"title":"Pokemon Heart Gold / Soul Silver OST - National Park","id":"HQ23GvUD4dQ","url":"https://youtu.be/HQ23GvUD4dQ","author":"Hanksterman Gaming","duration":126,"prettyDuration":"02:06"},{"title":"Pokemon Omega Ruby & Alpha Sapphire OST Rustboro City Music","id":"kfN8UV5nmW4","url":"https://youtu.be/kfN8UV5nmW4","author":"utuber6061backup","duration":129,"prettyDuration":"02:09"},{"title":"Pokemon Omega Ruby & Alpha Sapphire OST Surf Music","id":"cQsB5cfzf_4","url":"https://youtu.be/cQsB5cfzf_4","author":"utuber6061backup","duration":164,"prettyDuration":"02:44"},{"title":"Pokemon Omega Ruby & Alpha Sapphire OST Bicycle Music","id":"qwtRkj-Ux0o","url":"https://youtu.be/qwtRkj-Ux0o","author":"utuber6061backup","duration":112,"prettyDuration":"01:52"},{"title":"Pokemon Omega Ruby & Alpha Sapphire OST Route 120 Music","id":"3UybbN3EBto","url":"https://youtu.be/3UybbN3EBto","author":"utuber6061backup","duration":128,"prettyDuration":"02:08"},{"title":"Pokemon Omega Ruby & Alpha Sapphire OST Route 111 (Desert) Music","id":"YpkGXyCHvDI","url":"https://youtu.be/YpkGXyCHvDI","author":"utuber6061backup","duration":95,"prettyDuration":"01:35"},{"title":"Pokemon Omega Ruby & Alpha Sapphire OST Route 110 Music","id":"4eEn6eOQ-_s","url":"https://youtu.be/4eEn6eOQ-_s","author":"utuber6061backup","duration":86,"prettyDuration":"01:26"},{"title":"Pokemon Omega Ruby & Alpha Sapphire OST Route 101 Music","id":"JQTFbpE8WAs","url":"https://youtu.be/JQTFbpE8WAs","author":"utuber6061backup","duration":84,"prettyDuration":"01:24"},{"title":"Route 118 (East) and 119 (Pokémon Omega Ruby & Alpha Sapphire OST)","id":"FYhQXwfDi7k","url":"https://youtu.be/FYhQXwfDi7k","author":"Dorsal Axe","duration":148,"prettyDuration":"02:28"},{"title":"Pokemon Omega Ruby/Alpha Sapphire - Introduction/Route 123 Music (HQ)","id":"D-jbe3Ikm3U","url":"https://youtu.be/D-jbe3Ikm3U","author":"Pokeli","duration":111,"prettyDuration":"01:51"},{"title":"Route 113 (Pokémon Omega Ruby & Alpha Sapphire OST)","id":"0itajUvizNo","url":"https://youtu.be/0itajUvizNo","author":"Dorsal Axe","duration":149,"prettyDuration":"02:29"},{"title":"Pokemon Omega Ruby & Alpha Sapphire OST Route 104 Music","id":"F94wvhSEhXU","url":"https://youtu.be/F94wvhSEhXU","author":"utuber6061backup","duration":92,"prettyDuration":"01:32"},{"title":"Oceanic Museum (Pokémon Omega Ruby & Alpha Sapphire OST)","id":"ysb-UFMugZ8","url":"https://youtu.be/ysb-UFMugZ8","author":"Dorsal Axe","duration":154,"prettyDuration":"02:34"},{"title":"Pokemon Omega Ruby & Alpha Sapphire OST Lilycove City Music","id":"fyfVyiI_fRk","url":"https://youtu.be/fyfVyiI_fRk","author":"utuber6061backup","duration":127,"prettyDuration":"02:07"},{"title":"Pokemon Omega Ruby & Alpha Sapphire OST Slateport City Music","id":"wW-Pu4Squ8M","url":"https://youtu.be/wW-Pu4Squ8M","author":"utuber6061backup","duration":177,"prettyDuration":"02:57"},{"title":"Pokemon Omega Ruby & Alpha Sapphire OST Sootopolis City Music","id":"MWYiMilDpNU","url":"https://youtu.be/MWYiMilDpNU","author":"utuber6061backup","duration":123,"prettyDuration":"02:03"},{"title":"Pokemon Omega Ruby & Alpha Sapphire OST Petalburg City Music","id":"_Yf8FHjMPk0","url":"https://youtu.be/_Yf8FHjMPk0","author":"utuber6061backup","duration":78,"prettyDuration":"01:18"},{"title":"Pokemon Omega Ruby & Alpha Sapphire OST Fortree City Music","id":"YfPaBPfaU00","url":"https://youtu.be/YfPaBPfaU00","author":"utuber6061backup","duration":94,"prettyDuration":"01:34"},{"title":"Pokemon Omega Ruby & Alpha Sapphire OST Evergrande City Music","id":"xzX9xQjY5ak","url":"https://youtu.be/xzX9xQjY5ak","author":"utuber6061backup","duration":141,"prettyDuration":"02:21"},{"title":"Pokemon Diamond Pearl Platinum OST   Jubilife City","id":"quNbf76dUmI","url":"https://youtu.be/quNbf76dUmI","author":"AnonymousKun","duration":278,"prettyDuration":"04:38"},{"title":"Pokemon Diamond Pearl Platinum OST   Sunyshore City","id":"wNckGt33F3g","url":"https://youtu.be/wNckGt33F3g","author":"AnonymousKun","duration":267,"prettyDuration":"04:27"},{"title":"Pokemon Diamond/Pearl/Platinum OST - Hearthome City","id":"yEOU0vszuo0","url":"https://youtu.be/yEOU0vszuo0","author":"54321Aurora","duration":284,"prettyDuration":"04:44"},{"title":"Pokemon Diamond/Pearl/Platinum OST - Sandgem Town","id":"xMPIuQigrkk","url":"https://youtu.be/xMPIuQigrkk","author":"54321Aurora","duration":276,"prettyDuration":"04:36"},{"title":"Pokemon Diamond & Pearl OST - 79/149 Futaba Town (Night)","id":"eudhW9N4IFQ","url":"https://youtu.be/eudhW9N4IFQ","author":"VideoGamesEra","duration":82,"prettyDuration":"01:22"},{"title":"OST Pokémon Diamond/Pearl - Solaceon Town (Night)","id":"YQJBWidN_ZU","url":"https://youtu.be/YQJBWidN_ZU","author":"Eilee TX","duration":126,"prettyDuration":"02:06"},{"title":"Pokemon Diamond & Pearl OST - 44/149 Hakutai City (Midday)","id":"5BwQgAqvpzs","url":"https://youtu.be/5BwQgAqvpzs","author":"VideoGamesEra","duration":102,"prettyDuration":"01:42"},{"title":"Pokemon Black & White 2 OST Aspertia City","id":"1HsoH-WNTtw","url":"https://youtu.be/1HsoH-WNTtw","author":"utuber6061backup","duration":167,"prettyDuration":"02:47"},{"title":"Pokemon Black/White OST - Mistralton City","id":"6DpvlKoYE-I","url":"https://youtu.be/6DpvlKoYE-I","author":"54321Aurora","duration":166,"prettyDuration":"02:46"},{"title":"Pokémon Black and White OST - Marea City","id":"o6G-4W5N9Nk","url":"https://youtu.be/o6G-4W5N9Nk","author":"Haha56300","duration":90,"prettyDuration":"01:30"},{"title":"Wii Sports - Wii Sports Theme","id":"d5c4KOopwLs","url":"https://youtu.be/d5c4KOopwLs","author":"SomeVideoGameMusic","duration":133,"prettyDuration":"02:13"},{"title":"Super Smash Bros Brawl Theme - Sub English/Español","id":"U0TWcKui5A4","url":"https://youtu.be/U0TWcKui5A4","author":"Andros RT","duration":118,"prettyDuration":"01:58"},{"title":"Super Smash Bros. Brawl OST - Sticker Album","id":"PA2DzZseUo8","url":"https://youtu.be/PA2DzZseUo8","author":"Video Game Soundtracks","duration":74,"prettyDuration":"01:14"},{"title":"Mute City - Super Smash Bros. Brawl","id":"TN36CetQw6I","url":"https://youtu.be/TN36CetQw6I","author":"GilvaSunner","duration":156,"prettyDuration":"02:36"},{"title":"Main Theme (The Legend of Zelda) - Super Smash Bros. Brawl","id":"8-mNw11ZXbY","url":"https://youtu.be/8-mNw11ZXbY","author":"GilvaSunner","duration":172,"prettyDuration":"02:52"},{"title":"Jungle Level - Super Smash Bros. Brawl","id":"SBP1Lxsj0wc","url":"https://youtu.be/SBP1Lxsj0wc","author":"GilvaSunner","duration":246,"prettyDuration":"04:06"},{"title":"Mother (Melee) - Super Smash Bros. Brawl [OST]","id":"RQXjlaoN06g","url":"https://youtu.be/RQXjlaoN06g","author":"DeoxysPrimeX2","duration":231,"prettyDuration":"03:51"},{"title":"Sonic Boom - Super Smash Bros. Brawl","id":"yh7xffO0i1I","url":"https://youtu.be/yh7xffO0i1I","author":"GilvaSunner","duration":136,"prettyDuration":"02:16"},{"title":"Meta Knight's Revenge - Super Smash Bros. Brawl","id":"d3gLNomXwlw","url":"https://youtu.be/d3gLNomXwlw","author":"GilvaSunner","duration":162,"prettyDuration":"02:42"}]},
	          {"name": "ポケット モンスター", playlist: [{"title":"Mezase Pokemon Master (Aim to be a Pokemon Master)","id":"oprKrUcG8yA","url":"https://youtu.be/oprKrUcG8yA","author":"Whescha","duration":252,"prettyDuration":"04:12"},{"title":"Pokémon - Opening 02 Rival [Full] Japan","id":"y4WYzSs4BII","url":"https://youtu.be/y4WYzSs4BII","author":"Jhoung100","duration":239,"prettyDuration":"03:59"},{"title":"Pokémon - Opening 03 Johto OK [Full] Japan","id":"aVd2oHP_rW8","url":"https://youtu.be/aVd2oHP_rW8","author":"Jhoung100","duration":207,"prettyDuration":"03:27"},{"title":"Pokemon - Theme 4 - JPN Full","id":"Cs-OCMY6kLU","url":"https://youtu.be/Cs-OCMY6kLU","author":"Hinoarashii","duration":248,"prettyDuration":"04:08"},{"title":"Pokémon - Opening 05 Ready GO! [Full] Japan","id":"lEKnSvosXl8","url":"https://youtu.be/lEKnSvosXl8","author":"Jhoung100","duration":293,"prettyDuration":"04:53"},{"title":"Pokémon - Opening 07 Challenger! [Full] Japan","id":"kJqcj7fmJ2w","url":"https://youtu.be/kJqcj7fmJ2w","author":"Jhoung100","duration":228,"prettyDuration":"03:48"},{"title":"Pokémon - Opening 09 Battle Frontier [Full] Japan","id":"tnv7qQDGIqQ","url":"https://youtu.be/tnv7qQDGIqQ","author":"Jhoung100","duration":213,"prettyDuration":"03:33"},{"title":"Pokémon AG Opening 5 - Spurt! HD","id":"QvftmTrqOO4","url":"https://youtu.be/QvftmTrqOO4","author":"Patrickg95","duration":91,"prettyDuration":"01:31"},{"title":"Pokemon - Watashi Makenai! ~Haruka no Theme~ (Lyrics)","id":"QvXxIvoz40w","url":"https://youtu.be/QvXxIvoz40w","author":"marsshmeellow","duration":272,"prettyDuration":"04:32"},{"title":"Pokémon Anime Song - Smile","id":"xL3O2A3Cd1E","url":"https://youtu.be/xL3O2A3Cd1E","author":"PocketMonstersMusic","duration":301,"prettyDuration":"05:01"},{"title":"Pokemon - Glory Day - Full","id":"w8CYo78Je4A","url":"https://youtu.be/w8CYo78Je4A","author":"Hinoarashii","duration":230,"prettyDuration":"03:50"},{"title":"Kaze No Message (Full Version)","id":"xmCPJ39RNiE","url":"https://youtu.be/xmCPJ39RNiE","author":"TontoX2","duration":237,"prettyDuration":"03:57"},{"title":"Mamoru beki mono [Sub. español]","id":"fF49FQ4HAoQ","url":"https://youtu.be/fF49FQ4HAoQ","author":"MindyLizzie","duration":272,"prettyDuration":"04:32"},{"title":"Crystal Kay-One-Pokemon Movie 11 ending- subtitulado-guia-","id":"tKabmuqqG2w","url":"https://youtu.be/tKabmuqqG2w","author":"Elias Cooper","duration":247,"prettyDuration":"04:07"},{"title":"Pokémon Movie08 Song - Hajimari no Uta","id":"QtrdGYyDQpk","url":"https://youtu.be/QtrdGYyDQpk","author":"PocketMonstersMusic","duration":264,"prettyDuration":"04:24"},{"title":"Pokémon Movie12 Song - Kokoro no Antenna ~Haruomi Hosono Original Mix~","id":"OnJMXOiBbN8","url":"https://youtu.be/OnJMXOiBbN8","author":"PocketMonstersMusic","duration":258,"prettyDuration":"04:18"}]},
	          {"name": "日本", playlist: [{"title":"Rainbow by Sowelu","id":"g_S6Ic8znUA","url":"https://youtu.be/g_S6Ic8znUA","author":"ksonagiel","duration":276,"prettyDuration":"04:36"},{"title":"breath ～想いの容量～ by Sowelu","id":"gmEPJz9u4Ps","url":"https://youtu.be/gmEPJz9u4Ps","author":"ksonagiel","duration":298,"prettyDuration":"04:58"},{"title":"Dear friend by Sowelu","id":"X302kECzhkM","url":"https://youtu.be/X302kECzhkM","author":"ksonagiel","duration":223,"prettyDuration":"03:43"},{"title":"Sowelu - Last Forever","id":"q8Hov7m1__8","url":"https://youtu.be/q8Hov7m1__8","author":"choozemyway","duration":277,"prettyDuration":"04:37"},{"title":"No Limit by Sowelu","id":"bggi8Os_TF0","url":"https://youtu.be/bggi8Os_TF0","author":"kyokoksg","duration":284,"prettyDuration":"04:44"},{"title":"Fortune by Sowelu","id":"U-N-ksI11rQ","url":"https://youtu.be/U-N-ksI11rQ","author":"ksonagiel","duration":310,"prettyDuration":"05:10"},{"title":"Sowelu- Mamoru Beki Mono","id":"PvDf9-uvF7Q","url":"https://youtu.be/PvDf9-uvF7Q","author":"gabriela villasante","duration":281,"prettyDuration":"04:41"},{"title":"ケツメイシ　 さくら","id":"cZ_lbDOw2yM","url":"https://youtu.be/cZ_lbDOw2yM","author":"small ben","duration":307,"prettyDuration":"05:07"},{"title":"Orange Range - Hana","id":"DCOEOVvN7oE","url":"https://youtu.be/DCOEOVvN7oE","author":"Juliano Mota","duration":251,"prettyDuration":"04:11"},{"title":"Momoiro Kataomoi; aya matsurra","id":"v1YdimPKvvo","url":"https://youtu.be/v1YdimPKvvo","author":"eddyC","duration":265,"prettyDuration":"04:25"},{"title":"Love Hina OST - Sakura Saku [Opening theme]","id":"V1_L6fsWvO0","url":"https://youtu.be/V1_L6fsWvO0","author":"OST4allchannels","duration":194,"prettyDuration":"03:14"},{"title":"Ayumi Hamasaki - Fly High ~AT 2008~ (sub esp + romaji)","id":"4oGj6Jz4Ego","url":"https://youtu.be/4oGj6Jz4Ego","author":"Ayumi Fansub","duration":266,"prettyDuration":"04:26"},{"title":"Do As Infinity / 君がいない未来（Kimi Ga Inai Mirai）","id":"Leo3g_PAMCc","url":"https://youtu.be/Leo3g_PAMCc","author":"avexnetwork","duration":274,"prettyDuration":"04:34"},{"title":"Digimon Song Brave Heart","id":"b1uH4BnswKQ","url":"https://youtu.be/b1uH4BnswKQ","author":"vegeth100","duration":254,"prettyDuration":"04:14"}]}
	        ],
	        select: function(playlist){
	          this.selected = playlist; 
	        },
	        addVideo: function(video){
	          var playlist = this.selected.playlist;
	          if(!~playlist.indexOf(video)){
	            playlist.push(video);
	          }
	        },
	        removeVideo: function(video){
	          var playlist = this.selected.playlist,
	              index = playlist.indexOf(video);
	          if(~index){
	            playlist.splice(index, 1);
	          }
	        }
	    }; 
	    
	    return List;
	}]);

/***/ },
/* 4 */
/***/ function(module, exports) {

	angular.module("playMixApp")
	.factory('playlistFct', ['$rootScope','$timeout','YT_event','utilsFct', function($rootScope,$timeout, YT_event, utilsFct){
	    
	    var Playlist = {
	        selected: null,
	        isRepeat: false, 
	        isLooping: true,
	        playerStatus: "NOT PLAYING",
	        YT_EVENT: YT_event,
	        list: [],
	        idIndex: {},
	        totalTime: "00:00",
	        get listLength(){ 
	          return this.list.length;  
	        },
	        get selectedIndex(){
	          return this.list.indexOf(this.selected); 
	        },
	        get isFirst(){
	          return (this.selectedIndex === 0);
	        },
	        get isLast(){
	          return (this.selectedIndex+1 === this.listLength);
	        },
	        sendControlEvent : function (ctrlEvent) {
	          $rootScope.$broadcast(ctrlEvent);
	        },
	        togglePlay: function(){
	          if(this.playerStatus === 'PLAYING'){
	            this.pause();
	          }else{
	            this.play();
	          }
	        },
	        play: function(position){
	          if(this.listLength){
	            if(!this.selected){
	               this.select(this.list[0])
	            }
	            if(position){
	              if(position === 'next'){
	                this.selectNext();
	              }else if(position === 'previous'){
	                this.selectPrevious();
	              }
	            }
	            $timeout(()=>{ 
	              this.sendControlEvent(YT_event.PLAY);  
	            },300); 
	          }
	        },
	        pause: function(){
	          this.sendControlEvent(YT_event.PAUSE);
	        },
	        stop: function(){
	          this.sendControlEvent(YT_event.STOP);
	          PlaylistSection.scroll();
	        },
	        select: function(media){
	          if(media){
	            this.selected = media;
	          }
	        },
	        selectNext: function(){
	          var index = !this.isLast ? this.selectedIndex+1 : 0;
	          this.select(this.list[index]);
	          PlaylistSection.scrollToVideo(index);
	        }, 
	        selectPrevious: function(){
	          var index = !this.isFirst ? this.selectedIndex-1 : this.listLength-1;
	          this.select(this.list[index]);
	          PlaylistSection.scrollToVideo(index);
	        },
	        addVideo: function(video){
	          var playlist = this.list;
	          if(!this.idIndex[video.id]){
	            this.idIndex[video.id] = true;
	            playlist.push(angular.copy(video));
	            this.updateTotalTime();
	          }
	        },
	        removeVideo: function(video){
	          var playlist = this.list,
	              index = playlist.indexOf(video);
	          if(this.idIndex[video.id]){
	            this.idIndex[video.id] = null;
	            playlist.splice(index, 1);
	            this.updateTotalTime();
	          }
	        },
	        setPlaylist: function(playlist){ 
	          this.list = playlist.slice(0);
	          this.setIdIndex();
	          this.updateTotalTime(); 
	        },
	        clearPlaylist: function(){
	          this.clearIdIndex();
	          this.setPlaylist([]);    
	        }, 
	        concatPlaylist: function(playlist){
	          if(this.listLength){
	            var that = this;
	            this.clearIdIndex();
	            playlist = this.list.concat(playlist).filter((item, position, self) => { 
	              if(!that.idIndex[item.id]){
	                that.idIndex[item.id] = true;
	                return true;
	              }
	              return false;
	            }); 
	          }
	          this.setPlaylist(playlist);
	        },
	        setIdIndex: function(){
	          this.clearIdIndex();
	          this.list.forEach((item)=>{
	            this.idIndex[item.id] = true;
	          });
	        },
	        clearIdIndex: function(){
	          this.idIndex = {};  
	        },
	        onEnd: function(){
	          if(!this.isRepeat){
	            if( !this.isLast || (this.isLast && this.isLooping) ){
	              this.selectNext();
	              this.play();
	            }
	          }else{
	            this.play();
	          }
	        }, 
	        updateTotalTime: function(){ 
	            var totalTime = 0;
	            $timeout(()=>{
	              this.list.forEach((item)=>{  
	                totalTime += item.duration;
	              });
	              this.totalTime = utilsFct.Time.secondsToReadable(totalTime);
	            },100);
	        }
	    };
	    
	    var PlaylistSection = {
	      get element(){ 
	        return document.getElementsByClassName('pmx-playlist-section')[0];
	      },
	      scroll: function(top){
	        if(this.element){
	          this.element.scrollTop = top || 0; 
	        }
	      },
	      scrollToVideo: function(videoIndex){
	        var headerHeight = 148,
	          videoHeight = 88;
	        this.scroll( headerHeight + ((videoIndex || 0) * videoHeight) );
	      }
	    }
	    
	  
	  return Playlist;
	}]);

/***/ },
/* 5 */
/***/ function(module, exports) {

	angular.module("playMixApp")
	.directive('youtubePlayer',['$window', 'YT_event',function($window, YT_event) {
	  return {
	    restrict: "E",
	
	    scope: {
	      height: "@",
	      width: "@",
	      videoid: "@"
	    },
	
	    template: '<div></div>',
	
	    link: function(scope, element, attrs, $rootScope) {
	      var tag = document.createElement('script');
	      tag.src = "https://www.youtube.com/iframe_api";
	      var firstScriptTag = document.getElementsByTagName('script')[0];
	      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
	      
	      var player;
	
	      $window.onYouTubeIframeAPIReady = function() {
	
	        player = new YT.Player(element.children()[0], {
	          playerVars: {
	            autoplay: 0,
	            html5: 1,
	            theme: "light",
	            modesbranding: 0,
	            color: "white",
	            iv_load_policy: 3,
	            showinfo: 1,
	            controls: 1
	          },
	          
	          height: scope.height || 100,
	          width: scope.width || 100,
	          videoId: scope.videoid, 
	
	          events: {
	            'onStateChange': function(event) {
	              
	              var message = {
	                event: YT_event.STATUS_CHANGE,
	                data: ""
	              };
	              
	              switch(event.data) {
	                case YT.PlayerState.PLAYING:
	                  message.data = "PLAYING";
	                  break;
	                case YT.PlayerState.ENDED:
	                  message.data = "ENDED";
	                  break;
	                case YT.PlayerState.UNSTARTED:
	                  message.data = "NOT PLAYING";
	                  break;
	                case YT.PlayerState.PAUSED:
	                  message.data = "PAUSED";
	                  break;
	              }
	
	              scope.$apply(function() {
	                scope.$emit(message.event, message.data);
	              });
	            }
	          } 
	        });
	      };
	
	      scope.$watch('height + width', function(newValue, oldValue) {
	        if (newValue == oldValue) {
	          return;
	        }
	        
	        player.setSize(scope.width, scope.height);
	      
	      });
	
	      scope.$watch('videoid', function(newValue, oldValue) {
	        if (newValue == oldValue) {
	          return;
	        }
	        
	        player.cueVideoById(scope.videoid);
	      
	      });
	
	      scope.$on(YT_event.STOP, function () {
	        player.seekTo(0);
	        player.stopVideo();
	      });
	
	      scope.$on(YT_event.PLAY, function () {
	        player.playVideo();
	      }); 
	
	      scope.$on(YT_event.PAUSE, function () {
	        player.pauseVideo();
	      });  
	
	    }  
	  };
	}]);

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict"
	
	angular.module("playMixApp")
	.controller('mainCtrl', function ($scope, $rootScope, $timeout, $mdSidenav, $log, YT_event, listFct, playlistFct, searchFct) {
	
	
	      $scope.topDirections = ['left', 'up'];
	      $scope.bottomDirections = ['down', 'right']; 
	      $scope.isOpen = false;
	      $scope.availableModes = ['md-fling', 'md-scale'];
	      $scope.selectedMode = 'md-fling'; 
	      $scope.availableDirections = ['up', 'down', 'left', 'right'];
	      $scope.selectedDirection = 'right';
	
	
	
	
	
	
	
	
	
	  $rootScope.$on(YT_event.STATUS_CHANGE, function(event, data) {
	      $scope.Playlist.playerStatus = data;
	      if(data === "ENDED"){
	        $scope.Playlist.onEnd();
	      }
	  });
	  
	  $scope.Search = searchFct;
	  
	  $scope.Lists = listFct;
	
	  $scope.Playlist = playlistFct;
	  
	  class SectionManager{
	    constructor(){
	      this.isClosed = true;
	    }
	    close(){
	      this.isClosed = true;
	    }
	    open(){
	      this.isClosed = false;
	    }
	    toggle(){
	      this.isClosed = !this.isClosed;
	    }
	  }
	  
	  $scope.SectionsManager = {
	    List: new SectionManager(),
	    ListVideo: new SectionManager(), 
	    Playlist: new SectionManager(),
	    Search: new SectionManager(),
	    LeftSection: {
	      url: function(){
	        var listUrl = 'templates/lists.html',
	            listVideoUrl = 'templates/listVideo.html';
	        return ($scope.SectionsManager.ListVideo.isClosed ? listUrl : listVideoUrl);
	      },
	      isClosed: function(){
	        var sectionManager = $scope.SectionsManager;
	        return (sectionManager.List.isClosed && sectionManager.ListVideo.isClosed);
	      }
	    }
	  }
	  
	})

/***/ }
/******/ ]);
//# sourceMappingURL=scripts.js.map