/*eslint-disable no-console */
import browserSync from 'browser-sync';
import gulp from 'gulp';

import * as paths from './settings/paths';


function reportChange(event) {
  console.log(
    `File ${event.path} was ${event.type}, running tasks…`
  );
}


gulp.task("reload", function () {
    browserSync.reload();
});


// this task utilizes the browsersync plugin
// to create a dev server instance
// at http://localhost:9000
gulp.task('serve:dev', ['compile:styles'], (done) => {
  browserSync({
    ghostMode: false,
    open: false,
    notify: false,
    port: 9000,
    server: {
      baseDir: ['.', paths.srcDir],
      middleware: (req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        next();
      }
    }
  }, done);

  gulp.watch(paths.scriptSrc, ['reload']).on('change', reportChange);
  gulp.watch(paths.htmlSrc, ['reload']).on('change', reportChange);
  gulp.watch(paths.styleSrc, ['compile:styles', 'reload']).on(
    'change', reportChange
  );
});


gulp.task('serve:build', (done) => {
  browserSync({
    ghostMode: false,
    open: false,
    notify: false,
    port: 9000,
    server: {
      baseDir: ['.', paths.buildDir],
      middleware: (req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        next();
      }
    }
  }, done);
});
