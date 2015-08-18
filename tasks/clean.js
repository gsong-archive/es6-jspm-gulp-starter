import del from 'del';
import gulp from 'gulp';
import vinylPaths from 'vinyl-paths';

import {buildDir, tmpDir} from './settings/paths';


gulp.task('clean:build', () =>
  gulp.src([buildDir])
  .pipe(vinylPaths(del))
);


gulp.task('clean:tmp', () =>
  gulp.src([tmpDir])
  .pipe(vinylPaths(del))
);
