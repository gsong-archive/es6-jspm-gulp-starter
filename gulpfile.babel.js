import gulp from 'gulp';
import gulpUtil from 'gulp-util';
import requireDir from 'require-dir';


// Load custom tasks from the `tasks` directory
try {
  requireDir('tasks');
} catch (err) {
  gulpUtil.log(err);
}


gulp.task('default', ['serve:dev'], () => {});
