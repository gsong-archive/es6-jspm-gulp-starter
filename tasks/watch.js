/*eslint-disable no-console */

import * as paths from './settings/paths';
import browserSync from 'browser-sync';
import gulp from 'gulp';


function reportChange(event) {
  console.log(
    `File ${event.path} was ${event.type}, running tasks…`
  );
}

gulp.task('watch', ['serve'], () => {
  gulp.watch(paths.source, ['build-system', browserSync.reload]).on(
    'change', reportChange
  );
  gulp.watch(paths.html, ['build-html', browserSync.reload]).on(
    'change', reportChange
  );
  gulp.watch(paths.style, ['build-styles', browserSync.reload]).on(
    'change', reportChange
  );
});
