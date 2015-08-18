import del from 'del';
import gulp from 'gulp';
import vinylPaths from 'vinyl-paths';

import {buildDir} from './settings/paths';


gulp.task('clean', () =>
  gulp.src([buildDir])
  .pipe(vinylPaths(del))
);
