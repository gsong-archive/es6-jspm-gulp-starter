/*eslint-disable no-alert, no-console */
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';

import * as paths from './paths';


const $ = gulpLoadPlugins();


gulp.task('compile:styles', () => {
  const AUTOPREFIXER_BROWSERS = [
    'ie >= 10',
    'ie_mob >= 10',
    'ff >= 30',
    'chrome >= 34',
    'safari >= 7',
    'opera >= 23',
    'ios >= 7',
    'android >= 4.4',
    'bb >= 10'
  ];

  return gulp.src(paths.SRC_STYLE)
  .pipe($.plumber({
    errorHandler: (err) => {
      console.log(err);
      this.emit('end');
    }
  }))
  .pipe($.changed(paths.BUILD_DIR, {extension: '.css'}))
  .pipe($.sass().on('error', $.sass.logError))
  .pipe($.autoprefixer(AUTOPREFIXER_BROWSERS))
  .pipe(gulp.dest(paths.TMP_DIR))
});
