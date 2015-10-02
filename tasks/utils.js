import jspm from 'jspm';

import * as paths from './paths';
import gulp from './_gulp';


export default (options) => {
  let builder = new jspm.Builder();

  return builder.buildStatic(paths.MAIN_SRC, paths.MAIN_DEST, options);
};


gulp.task('utils:copy_to_tmp', ['clean:tmp'], () =>
  gulp.src(paths.SRC_ALL)
  .pipe(gulp.dest(paths.TMP_DIR))
);
