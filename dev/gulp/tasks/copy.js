var gulp = require('gulp');
var config = require('../config');

gulp.task('copy', function() {
    return gulp.src(config.copy.dir, {base: config.dir.dev})
    .pipe(gulp.dest(config.dir.tmp));
});

gulp.task('b.copy', function() {
    return gulp.src(config.copy.b_dir, {base: config.dir.dev})
    .pipe(gulp.dest(config.dir.build));
});