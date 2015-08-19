import del from 'del';
import gulp from 'gulp';
import vinylPaths from 'vinyl-paths';

import * as paths from './paths';


gulp.task('clean:tmp', () =>
  gulp.src([paths.TMP_DIR])
  .pipe(vinylPaths(del))
);


gulp.task('clean:build', () =>
  gulp.src([paths.BUILD_DIR])
  .pipe(vinylPaths(del))
);


gulp.task('clean:dist', () =>
  gulp.src([paths.DIST_DIR])
  .pipe(vinylPaths(del))
);
