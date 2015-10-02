import gulpLoadPlugins from 'gulp-load-plugins';

import * as paths from './paths';
import gulp from './_gulp';


const $ = gulpLoadPlugins();


gulp.task('compile:styles', () => {
  // See https://github.com/ai/browserslist for more details on how to set
  // browser versions
  const AUTOPREFIXER_BROWSERS = ['last 2 versions'];

  return gulp.src(paths.SRC_STYLE)
  .pipe($.changed(paths.BUILD_DIR, {extension: '.css'}))
  .pipe($.sass().on('error', $.sass.logError))
  .pipe($.autoprefixer(AUTOPREFIXER_BROWSERS))
  .pipe(gulp.dest(paths.TMP_DIR));
});
