var gulp = require('gulp');
var config = require('../config');
var browser = require("browser-sync");

gulp.task("browser", function() {
    browser({
        notify: false,
        server: {
            baseDir: config.dir.tmp
        }
    });
});