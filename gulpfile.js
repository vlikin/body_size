var gulp = require('gulp'),
  server = require('gulp-express');

gulp.task('server', function () {
    server.run(['server/build/server.js']);
    gulp.watch(['server/build/**/*.js'], [server.run]);
});
