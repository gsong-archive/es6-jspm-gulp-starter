/*eslint-disable no-alert, no-console */
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import runSequence from 'run-sequence';

import * as paths from './paths';
import jspmBuild from './utils';


const $ = gulpLoadPlugins();


gulp.task('dist:jspm', ['compile:styles'], () =>
  jspmBuild({
    minify: true,
    mangle: true,
    sourceMaps: false
  })
);


gulp.task('dist:js', (callback) =>
  runSequence('dist:jspm', 'js:replace_paths', callback)
)


gulp.task('dist:html', () =>
  gulp.src(paths.srcHtml)
  .pipe($.htmlReplace({'js': 'scripts/main.js'}))
  .pipe($.minifyHtml({empty: true}))
  .pipe(gulp.dest(paths.buildDir))
);


gulp.task('dist:copy', () => {
  const htmlFilter = $.filter("**/*.!(html)", {restore: true});

  return gulp.src(paths.buildAll)
  .pipe(htmlFilter)
  .pipe($.rev())
  .pipe(htmlFilter.restore)
  .pipe($.revReplace())
  .pipe(gulp.dest(paths.distDir))
});


gulp.task('dist', (callback) =>
  runSequence(
    ['clean:build', 'clean:dist', 'utils:copy_to_tmp'],
    ['dist:js', 'dist:html', 'build:images', 'build:fonts'],
    'dist:copy',
    callback
  )
);
