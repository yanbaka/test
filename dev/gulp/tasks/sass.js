var gulp = require('gulp');
var config = require('../config');
var pleeease = require("gulp-pleeease");
var sass = require('gulp-sass');
var browser = require("browser-sync");

gulp.task('sass', function() {
    gulp.src(config.sass.src)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(config.dir.tmp))
    .pipe(browser.reload({stream:true}));
});

gulp.task('b.sass', function() {
    gulp.src(config.sass.src)
    .pipe(sass().on('error', sass.logError))
    .pipe(pleeease())
    .pipe(gulp.dest(config.dir.build));
});