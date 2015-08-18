import browserSync from 'browser-sync';
import gulp from 'gulp';

import {appRoot, buildDir} from './settings/paths';


// this task utilizes the browsersync plugin
// to create a dev server instance
// at http://localhost:9000
gulp.task('serve', ['build'], (done) => {
  browserSync({
    open: false,
    port: 9000,
    server: {
      baseDir: ['.', appRoot, buildDir],
      middleware: (req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        next();
      }
    }
  }, done);
});
