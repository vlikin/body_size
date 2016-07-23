var gulp = require('gulp'),
  server = require('gulp-express');

gulp.task('server-watch', function () {
    server.run(['build/source/app.js']);
    gulp.watch(['build/**/*.js'], [server.run]);
});
