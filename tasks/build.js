/*eslint-disable no-alert, no-console */
import path from 'path';

import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import runSequence from 'run-sequence';
import jspm from 'jspm';

import * as paths from './paths';


const $ = gulpLoadPlugins();


gulp.task('build:copy_to_tmp', ['clean:tmp'], () =>
  gulp.src(paths.srcAll)
  .pipe(gulp.dest(paths.tmpDir))
);


gulp.task('build:jspm', ['compile:styles'], () => {
  let builder = new jspm.Builder();
  let script = 'scripts/main';
  let infile = path.join(paths.tmpDir, script);
  let outfile = path.join(paths.buildDir, script + '.js');

  return builder.buildSFX(infile, outfile, {
    minify: false,
    mangle: false,
    sourceMaps: true
  });
});


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


gulp.task('build', (callback) =>
  runSequence(
    ['clean:build', 'build:copy_to_tmp'],
    ['build:jspm', 'build:html', 'build:images'],
    callback
  )
);
