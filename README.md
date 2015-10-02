# ES6 + jspm + Gulp Starter

Starter template for developing ES6+ apps using jspm & Gulp. This is heavily
geared toward single page applications ("SPA"), but can be modified for use for
a regular website as well.

## Primary Technologies

* Transpiles ES6+ automagically using [Babel][]
* Package management using [jspm][]
* Develop and build using [Gulp][] and friends

## Starter Features

* Uses jspm instead of Bower or npm to manage packages for the browser
* Uses [SystemJS][] to load modules via jspm
* Sass compilation using [LibSass][] and [Autoprefixer][]
* Local dev server with [LiveReload](http://livereload.com/) using
    [Browsersync][]
* Define and maintain consistent coding styles between different editors using
    [EditorConfig][]
* Linting with [ESLint][]
* Gulp tasks are written using ES6, of course.
* Build task deals with simple case of fonts, images, and CSS url references
    properly.
* Multiple `serve` modes to facilitate development speed or simulate production
    environment.
* [Unlicensed][]

## Usage

1. Clone this repo from `https://github.com/gsong/es6-jspm-gulp-starter.git`.
2. Make sure you have `node` installed on your machine. [nvm][] is highly
   recommended.
3. Install Gulp and jspm globally: `npm install -g gulp jspm`.
4. `npm install` then `jspm install` to instal development and browser packages.
5. Run `gulp` to start the local dev server.
6. Write an awesome app! 😀

## Building

Run `gulp dist` to build the app for distribution in the `/dist` folder.

## Hint

Use [gulper][] if you want to automatically reload the Gulp runtime whenever you
change Gulp task files. This is especially nice if you're customizing the task
files to fit your own workflow. Otherwise you would have to constantly restart
gulp.

## Contributing

1. Pick something from [TODO][] to work on.
2. If there's a problem, please file a [new issue][], or better yet, submit a
   [pull request][]!

---

[No rights reserved][unlicensed]. Made with 🐣 by [George Song][gs twitter].


[autoprefixer]: https://github.com/postcss/autoprefixer
[babel]: https://babeljs.io/
[browsersync]: http://www.browsersync.io
[editorconfig]: http://editorconfig.org
[eslint]: http://eslint.org/
[gs twitter]: https://twitter.com/zukefresh
[gulp]: http://gulpjs.com
[gulper]: https://github.com/anatoo/gulper
[jspm]: http://jspm.io
[libsass]: http://libsass.org/
[new issue]: https://github.com/gsong/es6-jspm-gulp-starter/issues/new
[nvm]: https://github.com/creationix/nvm
[pull request]: https://github.com/gsong/es6-jspm-gulp-starter/compare/
[systemjs]: https://github.com/systemjs/systemjs
[todo]: https://github.com/gsong/es6-jspm-gulp-starter/blob/development/TODO.md
[unlicensed]: http://unlicense.org/
