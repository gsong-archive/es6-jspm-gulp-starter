/*eslint-disable no-alert, no-console */
import path from 'path';

import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import runSequence from 'run-sequence';

import * as paths from './paths';
import jspmBuild from './utils';


const $ = gulpLoadPlugins();


gulp.task('build:jspm', ['compile:styles'], () =>
  jspmBuild({
    minify: false,
    mangle: false,
    sourceMaps: true
  })
);


gulp.task('build:js', (callback) =>
  runSequence('build:jspm', 'js:replace_paths', callback)
)


gulp.task('build:html', () =>
  gulp.src(paths.srcHtml)
  .pipe($.htmlReplace({'js': 'scripts/main.js'}))
  .pipe(gulp.dest(paths.buildDir))
);


gulp.task('build:images', () =>
  gulp.src(paths.tmpImage)
  .pipe($.imagemin({
    progressive: true,
    interlaced: true
  }))
  .pipe(gulp.dest(paths.buildDir))
)


gulp.task('build:fonts', () =>
  gulp.src(paths.fontSrc)
  .pipe(gulp.dest(path.join(paths.buildDir, 'fonts')))
)


gulp.task('build', (callback) =>
  runSequence(
    ['clean:build', 'utils:copy_to_tmp'],
    ['build:js', 'build:html', 'build:images', 'build:fonts'],
    callback
  )
);
