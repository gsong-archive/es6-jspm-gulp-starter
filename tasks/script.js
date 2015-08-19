import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';

import * as paths from './paths';
import {OUTFILE} from './utils';


const $ = gulpLoadPlugins();


gulp.task('js:replace_paths', () =>
  gulp.src(OUTFILE)
  .pipe($.replace(paths.fontAwesomePath, ''))
  .pipe($.replace(paths.tmpDir, ''))
  .pipe(gulp.dest(paths.buildScriptsDir))
)
