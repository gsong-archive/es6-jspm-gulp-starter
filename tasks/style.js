/*eslint-disable no-alert, no-console */
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';

import * as paths from './paths';


const $ = gulpLoadPlugins();


gulp.task('compile:styles', () =>
  gulp.src(paths.SRC_STYLE)
  .pipe($.plumber({
    errorHandler: (err) => {
      console.log(err);
      this.emit('end');
    }
  }))
  .pipe($.changed(paths.BUILD_DIR, {extension: '.css'}))
  .pipe($.sass().on('error', $.sass.logError))
  .pipe(gulp.dest(paths.TMP_DIR))
);
