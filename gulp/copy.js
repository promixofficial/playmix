var gulp = require('gulp');


gulp.task('copy', function () {
    return gulp.src(['./client/vendors/**/*'])
    .pipe(gulp.dest('./public/vendors'));
});

gulp.task('copyImages', function () {
    return gulp.src(['./client/images/**/*'])
    .pipe(gulp.dest('./public/images'));
});