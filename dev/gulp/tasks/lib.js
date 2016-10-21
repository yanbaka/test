var gulp = require('gulp');
var config = require('../config');
var pleeease = require("gulp-pleeease");
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");

gulp.task('lib', function() {
    gulp.src(config.lib.sass)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(config.dir.tmp+'/'+config.dir.name+'/'));

    gulp.src(config.lib.js, {base: 'dev'})
    .pipe(gulp.dest(config.dir.tmp));
});

gulp.task('b.lib', function() {
    gulp.src(config.lib.sass)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(config.dir.build+'/'+config.dir.name+'/'));

    gulp.src(config.lib.js, {base: 'dev'})
    .pipe(gulp.dest(config.dir.build));

    gulp.src(config.lib.sass)
    .pipe(sass().on('error', sass.logError))
    .pipe(pleeease())
    .pipe(rename({
      extname: '.min.css'
    }))
    .pipe(gulp.dest(config.dir.build+'/'+config.dir.name+'/'));

    gulp.src(config.lib.js)
    .pipe(uglify())
    .pipe(rename({
      extname: '.min.js'
    }))
    .pipe(gulp.dest(config.dir.build+'/'+config.dir.name+'/'));
});