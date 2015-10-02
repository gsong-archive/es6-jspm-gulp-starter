import browserSync from 'browser-sync';
import gulpLoadPlugins from 'gulp-load-plugins';
import runSequence from 'run-sequence';

import * as paths from './paths';
import gulp from './_gulp';


const $ = gulpLoadPlugins();

const BS_OPTIONS = {
  ghostMode: false,
  open: false,
  notify: false,
  port: 9000
};

const BS_SERVER_OPTIONS = {
    baseDir: ['.', paths.SRC_DIR, paths.TMP_DIR],
    middleware: (req, res, next) => {
      res.setHeader('Access-Control-Allow-Origin', '*');
      next();
    }
};


function reportChange(event) {
  $.util.log(
    `File ${event.path} was ${event.type}, running tasks…`
  );
}


function _serve(baseDir, reloadTasks, done) {
  const serverOpts = Object.assign(
    {}, BS_SERVER_OPTIONS, {baseDir: baseDir}
  );
  const opts = Object.assign({}, BS_OPTIONS, {server: serverOpts});
  browserSync(opts, done);

  return gulp.watch(paths.SRC_ALL, reloadTasks).on('change', reportChange);
}


gulp.task('reload', () => browserSync.reload());


gulp.task('reload:build', (callback) => {
  return runSequence('build', 'reload', callback);
});


gulp.task('reload:dist', (callback) => {
  return runSequence('dist', 'reload', callback);
});


gulp.task('serve:dev', ['compile:styles', 'js:lint'], (done) => {
  const opts = Object.assign({}, BS_OPTIONS, {server: BS_SERVER_OPTIONS});
  browserSync(opts, done);

  gulp.watch(paths.SRC_SCRIPT, ['js:lint', 'reload'])
  .on('change', reportChange);
  gulp.watch(paths.SRC_INDEX, ['reload']).on('change', reportChange);
  gulp.watch(paths.SRC_STYLE, ['compile:styles', 'reload'])
  .on('change', reportChange);
});


gulp.task('serve:build', ['build'], (done) => {
  return _serve([paths.BUILD_DIR], ['reload:build'], done);
});


gulp.task('serve:dist', ['dist'], (done) => {
  return _serve([paths.DIST_DIR], ['reload:dist'], done);
});
