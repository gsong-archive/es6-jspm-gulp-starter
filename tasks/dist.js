/*eslint-disable no-alert, no-console */
import path from 'path';

import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import runSequence from 'run-sequence';
import jspm from 'jspm';

import * as paths from './paths';


const $ = gulpLoadPlugins();


gulp.task('dist:jspm', () => {
  let builder = new jspm.Builder();
  let script = 'scripts/main';
  let infile = path.join(paths.tmpDir, script);
  let outfile = path.join(paths.distDir, script + '.js');

  return builder.buildSFX(infile, outfile, {
    minify: true,
    mangle: true,
    sourceMaps: false
  });
});


gulp.task('dist:html', () =>
  gulp.src(paths.srcHtml)
  .pipe($.htmlReplace({'js': 'scripts/main.js'}))
  .pipe(gulp.dest(paths.distDir))
);


gulp.task('dist', (callback) =>
  runSequence('build', 'dist:jspm', 'dist:html', callback)
);
