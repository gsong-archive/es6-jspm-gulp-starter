import * as paths from '../paths';
import del from 'del';
import gulp from 'gulp';
import vinylPaths from 'vinyl-paths';


gulp.task('clean', () =>
  gulp.src([paths.output])
  .pipe(vinylPaths(del))
);
