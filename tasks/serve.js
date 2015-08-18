/*eslint-disable no-console */
import browserSync from 'browser-sync';
import gulp from 'gulp';
import runSequence from 'run-sequence';

import * as paths from './paths';


let bsOptions = {
  ghostMode: false,
  open: false,
  notify: false,
  port: 9000
}

let bsServerOptions = {
    baseDir: ['.', paths.srcDir, paths.tmpDir],
    middleware: (req, res, next) => {
      res.setHeader('Access-Control-Allow-Origin', '*');
      next();
    }
}


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
  let opts = Object.assign({}, bsOptions, {server: bsServerOptions});
  browserSync(opts, done);

  gulp.watch(paths.srcScript, ['reload']).on('change', reportChange);
  gulp.watch(paths.srcHtml, ['reload']).on('change', reportChange);
  gulp.watch(paths.srcStyle, ['compile:styles', 'reload']).on(
    'change', reportChange
  );
});


gulp.task('serve:build', ['build'], (done) => {
  let serverOpts = Object.assign(
    {}, bsServerOptions, {baseDir: [paths.buildDir]}
  );
  let opts = Object.assign({}, bsOptions, {server: serverOpts});
  browserSync(opts, done);

  gulp.watch(paths.srcAll, ['reload:build']).on('change', reportChange);
});


gulp.task('serve:dist', ['dist'], (done) => {
  let serverOpts = Object.assign(
    {}, bsServerOptions, {baseDir: [paths.distDir]}
  );
  let opts = Object.assign({}, bsOptions, {server: serverOpts});
  browserSync(opts, done);

  gulp.watch(paths.srcAll, ['reload:dist']).on('change', reportChange);
});
