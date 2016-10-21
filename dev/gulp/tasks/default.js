var gulp = require('gulp');
var config = require('../config');
var runSequence = require('run-sequence');
var browser = require("browser-sync");
var watch = require("gulp-watch");

gulp.task('reload', function() {
    browser.reload();
});

gulp.task('run', function(callback) {
    return runSequence(
        'clean',
        ['ejs', 'sass', 'lib'],
        'copy',
        'browser',
        callback
    );
});

gulp.task('tmp.reload', function(callback) {
    return runSequence(
        'tmp.clean',
        'lib',
        'copy',
        'reload',
        callback
    );
});

gulp.task('default', ['run'], function() {
    watch(config.sass.src, function(event) {
        gulp.start('sass');
    });
    watch(config.watch.ejs, function(event) {
        gulp.start('ejs');
    });
    watch(config.watch.dir, function(event) {
        gulp.start('tmp.reload');
    });
});