import gulpLoadPlugins from 'gulp-load-plugins';
import runSequence from 'run-sequence';

import * as paths from './paths';
import gulp from './_gulp';
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
);


gulp.task('dist:html', () =>
  gulp.src(paths.SRC_INDEX)
  .pipe($.htmlReplace({'js': 'scripts/main.js'}))
  .pipe($.minifyHtml({empty: true}))
  .pipe(gulp.dest(paths.BUILD_DIR))
);


gulp.task('dist:copy', () => {
  const htmlFilter = $.filter('**/*.!(html)', {restore: true});

  return gulp.src(paths.BUILD_ALL)
  .pipe(htmlFilter)
  .pipe($.rev())
  .pipe(htmlFilter.restore)
  .pipe($.revReplace())
  .pipe(gulp.dest(paths.DIST_DIR))
  .pipe($.gzip())
  .pipe(gulp.dest(paths.DIST_DIR));
});


gulp.task('dist', (callback) =>
  runSequence(
    ['clean:build', 'clean:dist', 'utils:copy_to_tmp'],
    ['dist:js', 'dist:html', 'build:images', 'build:fonts'],
    'dist:copy',
    callback
  )
);
