/*eslint-disable no-alert, no-console */
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import runSequence from 'run-sequence';

import * as paths from './settings/paths';
import babelOptions from './settings/babel';


const $ = gulpLoadPlugins();

gulp.task('build-system', () =>
  gulp.src(paths.source)
  .pipe($.plumber({
    errorHandler: (err) => {
      console.log(err);
      this.emit('end');
    }
  }))
  .pipe($.changed(paths.buildDir, {extension: '.js'}))
  .pipe($.sourcemaps.init({loadMaps: true}))
  .pipe($.babel(babelOptions))
  .pipe($.sourcemaps.write({
    includeContent: false, sourceRoot: paths.sourceMapRelativePath
  }))
  .pipe(gulp.dest(paths.buildDir))
);

gulp.task('build-html', () =>
  gulp.src(paths.html)
  .pipe($.changed(paths.buildDir, {extension: '.html'}))
  .pipe(gulp.dest(paths.buildDir))
);

gulp.task('build-styles', () =>
  gulp.src(paths.style)
  .pipe($.plumber({
    errorHandler: (err) => {
      console.log(err);
      this.emit('end');
    }
  }))
  .pipe($.changed(paths.buildDir, {extension: '.css'}))
  .pipe($.sourcemaps.init({loadMaps: true}))
  .pipe($.sass().on('error', $.sass.logError))
  .pipe($.sourcemaps.write({
    includeContent: false, sourceRoot: paths.sourceMapRelativePath
  }))
  .pipe(gulp.dest(paths.buildDir))
);

gulp.task('build', (callback) =>
  runSequence(
    'clean',
    ['build-system', 'build-html', 'build-styles'],
    callback
  )
);
