var gulp = require('gulp');
var config = require('../config');
var runSequence = require('run-sequence');

gulp.task('build', function(callback) {
    return runSequence(
        'clean',
        ['b.imagemin', 'b.sass', 'b.ejs', 'b.lib'],
        'b.copy',
        callback
    );
});
