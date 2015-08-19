import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';

import * as paths from './paths';
import {OUTFILE} from './utils';


const $ = gulpLoadPlugins();


gulp.task('js:replace_paths', () =>
  gulp.src(OUTFILE)
  .pipe($.replace(paths.FONT_AWESOME_PATH, ''))
  .pipe($.replace(paths.TMP_DIR, ''))
  .pipe(gulp.dest(paths.BUILD_SCRIPTS_DIR))
)
