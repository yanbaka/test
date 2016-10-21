var gulp = require('gulp');
var config = require('../config');
var imagemin = require('gulp-imagemin');

gulp.task('b.imagemin', function() {
    return gulp.src(config.imagemin.src)
    .pipe(imagemin())
    .pipe(gulp.dest(config.dir.build));
});
