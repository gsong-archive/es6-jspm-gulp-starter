import path from 'path';

import gulpLoadPlugins from 'gulp-load-plugins';
import runSequence from 'run-sequence';

import * as paths from './paths';
import gulp from './_gulp';
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
);


gulp.task('build:html', () =>
  gulp.src(paths.SRC_INDEX)
  .pipe($.htmlReplace({'js': 'scripts/main.js'}))
  .pipe(gulp.dest(paths.BUILD_DIR))
);


gulp.task('build:images', () =>
  gulp.src(paths.TMP_IMAGE)
  .pipe($.imagemin({
    progressive: true,
    interlaced: true
  }))
  .pipe(gulp.dest(paths.BUILD_DIR))
);


gulp.task('build:fonts', () =>
  gulp.src(paths.FONT_SRC)
  .pipe(gulp.dest(path.join(paths.BUILD_DIR, 'fonts')))
);


gulp.task('build', (callback) =>
  runSequence(
    ['clean:build', 'utils:copy_to_tmp'],
    ['build:js', 'build:html', 'build:images', 'build:fonts'],
    callback
  )
);
