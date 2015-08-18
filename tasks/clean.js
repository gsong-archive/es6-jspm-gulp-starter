import del from 'del';
import gulp from 'gulp';
import vinylPaths from 'vinyl-paths';

import * as paths from './paths';


gulp.task('clean:tmp', () =>
  gulp.src([paths.tmpDir])
  .pipe(vinylPaths(del))
);


gulp.task('clean:build', () =>
  gulp.src([paths.buildDir])
  .pipe(vinylPaths(del))
);


gulp.task('clean:dist', () =>
  gulp.src([paths.distDir])
  .pipe(vinylPaths(del))
);
