var gulp = require('gulp');
var config = require('../config');
var ejs = require('gulp-ejs');
var browser = require("browser-sync");

gulp.task('ejs', function() {
    gulp.src(config.ejs.src)
    .pipe(ejs(null, {"ext": ".html"}))
    .pipe(gulp.dest(config.dir.tmp))
    .pipe(browser.reload({stream:true}));
});

gulp.task('b.ejs', function() {
    gulp.src(config.ejs.src)
    .pipe(ejs(null, {"ext": ".html"}))
    .pipe(gulp.dest(config.dir.build));
});