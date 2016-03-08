var gulp = require('gulp');


gulp.task('watch', function(){
	gulp.watch(['./client/sass/**/*.scss'], ['sass']);
	gulp.watch(['./client/templates/**/*.html','./client/index.html'], ['templates']);
	gulp.watch(['./client/scripts/**/*.js'], ['webpack']);
});