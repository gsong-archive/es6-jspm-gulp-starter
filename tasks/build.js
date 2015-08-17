import * as compilerOptions from './settings/babel';
import * as paths from './settings/paths';
import babel from 'gulp-babel';
import changed from 'gulp-changed';
import gulp from 'gulp';
import plumber from 'gulp-plumber';
import runSequence from 'run-sequence';
import sass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';


let assign = Object.assign

gulp.task('build-system', () =>
  gulp.src(paths.source)
  .pipe(plumber())
  .pipe(changed(paths.output, {extension: '.js'}))
  .pipe(sourcemaps.init({loadMaps: true}))
  .pipe(babel(assign({}, compilerOptions, {modules:'system'})))
  .pipe(sourcemaps.write({
    includeContent: false, sourceRoot: paths.sourceMapRelativePath
  }))
  .pipe(gulp.dest(paths.output))
);

gulp.task('build-html', () =>
  gulp.src(paths.html)
  .pipe(changed(paths.output, {extension: '.html'}))
  .pipe(gulp.dest(paths.output))
);

gulp.task('build-styles', () =>
  gulp.src(paths.style)
  .pipe(plumber())
  .pipe(changed(paths.output, {extension: '.css'}))
  .pipe(sourcemaps.init({loadMaps: true}))
  .pipe(sass().on('error', sass.logError))
  .pipe(sourcemaps.write({
    includeContent: false, sourceRoot: paths.sourceMapRelativePath
  }))
  .pipe(gulp.dest(paths.output))
);

gulp.task('build', (callback) =>
  runSequence(
    'clean',
    ['build-system', 'build-html', 'build-styles'],
    callback
  )
);
