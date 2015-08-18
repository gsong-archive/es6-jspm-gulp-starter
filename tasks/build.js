/*eslint-disable no-alert, no-console */
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import runSequence from 'run-sequence';
import jspm from 'jspm';

import * as paths from './settings/paths';


const $ = gulpLoadPlugins();


gulp.task('build:jspm', ['compile:styles'], () => {
  let builder = new jspm.Builder();
  builder.buildSFX('app/scripts/index', 'build/scripts/index.js', {
    minify: false,
    mangle: false,
    sourceMaps: true
  });
});


gulp.task('build:html', () =>
  gulp.src(paths.htmlSrc)
  .pipe($.changed(paths.buildDir, {extension: '.html'}))
  .pipe(gulp.dest(paths.buildDir))
);


gulp.task('build', (callback) =>
  runSequence(
    'clean',
    ['build:jspm', 'build:html'],
    callback
  )
);
