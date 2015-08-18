/*eslint-disable no-console */
import browserSync from 'browser-sync';
import gulp from 'gulp';

import * as paths from './settings/paths';


const reload = browserSync.reload;

function reportChange(event) {
  console.log(
    `File ${event.path} was ${event.type}, running tasks…`
  );
}

gulp.task('watch', ['serve'], () => {
  gulp.watch(paths.scriptSrc, ['build-system', reload]).on('change', reportChange);
  gulp.watch(paths.htmlSrc, ['build-html', reload]).on('change', reportChange);
  gulp.watch(paths.styleSrc, ['build-styles', reload]).on('change', reportChange);
});
