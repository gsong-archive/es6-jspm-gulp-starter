/*eslint-disable no-console */
import gulp from 'gulp';
import requireDir from 'require-dir';

// Load custom tasks from the `tasks` directory
try { requireDir('tasks'); } catch (err) { console.error(err); }

gulp.task('default', ['serve:dev'], () => {});
