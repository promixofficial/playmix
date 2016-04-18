var gulp = require('gulp');
var jsdoc = require('gulp-jsdoc3');


var config = {
    "opts":{
        "template": "./node_modules/ink-docstrap/template", // same as -t templates/default
        "encoding": "utf8",                                 // same as -e utf8
        "destination": "./public/docs/",                    // same as -d ./out/
        "recurse": true,                                    // same as -r
        //"tutorials": "path/to/tutorials",                 // same as -u path/to/tutorials
    },
    "templates": {
        "systemName"            : "Play MIX",
        //"footer"                : "{string}",
        "copyright"             :  "Pro-MIX ©2016 ∞ {@link http://promixoficial.com}",
        "includeDate"           : "false",
        //"navType"               : "{vertical|inline}",
        "theme"                 : "cerulean",
        "linenums"              : "true",
        "collapseSymbols"       : "true",
        //"inverseNav"            : "{boolean}",
        //"outputSourceFiles"     : "{boolean}" ,
        //"outputSourcePath"      : "{boolean}",
        //"dateFormat"            : "{string}",
        "syntaxTheme"           : "dark",
        //"sort"                  : "{boolean|string}"
    }
};


gulp.task('docs', function (cb) {
    gulp.src(['./client/scripts/**/*.js'], {read: false})
        .pipe(jsdoc(config, cb));
});