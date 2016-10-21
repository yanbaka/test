var gulp = require('gulp');
var config = require('../config');
var del = require('del');

gulp.task('clean', function() {
    return del(config.del.dir);
});

gulp.task('tmp.clean', function() {
    return del(config.del.tmp_dir);
});