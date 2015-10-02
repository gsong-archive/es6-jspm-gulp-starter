import browserSync from 'browser-sync';
import gulp from 'gulp';
import runSequence from 'run-sequence';

import * as paths from './paths';


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
  console.log(
    `File ${event.path} was ${event.type}, running tasks…`
  );
}


gulp.task('reload', () => browserSync.reload());


gulp.task('reload:build', (callback) => {
  return runSequence('build', 'reload', callback);
});


gulp.task('reload:dist', (callback) => {
  return runSequence('dist', 'reload', callback);
});


gulp.task('serve:dev', ['compile:styles'], (done) => {
  let opts = Object.assign({}, BS_OPTIONS, {server: BS_SERVER_OPTIONS});
  browserSync(opts, done);

  gulp.watch(paths.SRC_SCRIPT, ['reload']).on('change', reportChange);
  gulp.watch(paths.SRC_HTML, ['reload']).on('change', reportChange);
  gulp.watch(paths.SRC_STYLE, ['compile:styles', 'reload']).on(
    'change', reportChange
  );
});


gulp.task('serve:build', ['build'], (done) => {
  let serverOpts = Object.assign(
    {}, BS_SERVER_OPTIONS, {baseDir: [paths.BUILD_DIR]}
  );
  let opts = Object.assign({}, BS_OPTIONS, {server: serverOpts});
  browserSync(opts, done);

  gulp.watch(paths.SRC_ALL, ['reload:build']).on('change', reportChange);
});


gulp.task('serve:dist', ['dist'], (done) => {
  let serverOpts = Object.assign(
    {}, BS_SERVER_OPTIONS, {baseDir: [paths.DIST_DIR]}
  );
  let opts = Object.assign({}, BS_OPTIONS, {server: serverOpts});
  browserSync(opts, done);

  gulp.watch(paths.SRC_ALL, ['reload:dist']).on('change', reportChange);
});
