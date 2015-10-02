import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';

const $ = gulpLoadPlugins();
const _gulpsrc = gulp.src;


gulp.src = (globs, options) => _gulpsrc.apply(gulp, [globs, options])
.pipe($.plumber({
  errorHandler: function(err) {
    $.notify.onError({
      title: err.name, message: err.message, sound: 'Sosumi'
    })(err);
    this.emit('end');
  }
}));


export default gulp;
