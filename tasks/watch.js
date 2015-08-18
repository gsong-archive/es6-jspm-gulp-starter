/*eslint-disable no-console */

import * as paths from './settings/paths';
import browserSync from 'browser-sync';
import gulp from 'gulp';


const reload = browserSync.reload;

function reportChange(event) {
  console.log(
    `File ${event.path} was ${event.type}, running tasks…`
  );
}

gulp.task('watch', ['serve'], () => {
  gulp.watch(paths.source, ['build-system', reload]).on('change', reportChange);
  gulp.watch(paths.html, ['build-html', reload]).on('change', reportChange);
  gulp.watch(paths.style, ['build-styles', reload]).on('change', reportChange);
});
