import path from 'path';

import gulp from 'gulp';
import jspm from 'jspm';

import * as paths from './paths';


const SCRIPT = 'main';
const INFILE = path.join(paths.TMP_SCRIPTS_DIR, SCRIPT);
export const OUTFILE = path.join(paths.BUILD_SCRIPTS_DIR, SCRIPT + '.js');


export default (options) => {
  let builder = new jspm.Builder();

  return builder.buildSFX(INFILE, OUTFILE, options);
}


gulp.task('utils:copy_to_tmp', ['clean:tmp'], () =>
  gulp.src(paths.SRC_ALL)
  .pipe(gulp.dest(paths.TMP_DIR))
);
