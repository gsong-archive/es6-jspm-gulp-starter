/*eslint-disable no-alert, no-console */
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import runSequence from 'run-sequence';
import jspm from 'jspm';

import * as paths from './settings/paths';


const $ = gulpLoadPlugins();

gulp.task('build-system', () => {
  let builder = new jspm.Builder();
  builder.buildSFX('app/scripts/index', 'build/scripts/index.js', {
    minify: false,
    mangle: true,
    sourceMaps: true
  });
});

gulp.task('build-html', () =>
  gulp.src(paths.htmlSrc)
  .pipe($.changed(paths.buildDir, {extension: '.html'}))
  .pipe(gulp.dest(paths.buildDir))
);

gulp.task('build-styles', () =>
  gulp.src(paths.styleSrc)
  .pipe($.plumber({
    errorHandler: (err) => {
      console.log(err);
      this.emit('end');
    }
  }))
  .pipe($.changed(paths.buildDir, {extension: '.css'}))
  .pipe($.sass().on('error', $.sass.logError))
  .pipe(gulp.dest(paths.buildDir))
);

gulp.task('build', (callback) =>
  runSequence(
    'clean', 'build-styles',
    ['build-system', 'build-html'],
    callback
  )
);
