var gulp = require('gulp');
var less = require('gulp-less');
var concat = require('gulp-concat');
var minify = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var nunjucks = require('gulp-nunjucks');
var rename = require('gulp-rename');

var i18nEN = require('./src/html/i18n/en');
var i18nKO = require('./src/html/i18n/ko');

var vendorScripts = [
  './src/js/vendor/TweenMax.min.js',
  './src/js/vendor/jquery.min.js',
  './src/js/vendor/aos.js',
  './src/js/vendor/wavify.js',
  './src/js/vendor/scroll.js',
]

var scripts = [
  './src/js/gtm.js',
  './src/js/main.js',
  './src/js/popover.js',
  './src/js/tokens.js',
]

gulp.task('html-en', function() {
  return gulp
    .src('./src/html/index.html')
    .pipe(nunjucks.compile(i18nEN))
    .pipe(rename('index.html'))
    .pipe(gulp.dest('./public/'));
});

gulp.task('html-ko', function() {
  return gulp
    .src('./src/html/index.html')
    .pipe(nunjucks.compile(i18nKO))
    .pipe(rename('ko.html'))
    .pipe(gulp.dest('./public/'));
});

gulp.task('css', function() {
  return gulp
    .src('./src/less/**/*.less')
    .pipe(less())
    .pipe(concat('style.css'))
    .pipe(gulp.dest('./public/assets/css'));
});

gulp.task('js-vendor', function() {
  return gulp
    .src(vendorScripts)
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest('./public/assets/js'));
});

gulp.task('js', function() {
  return gulp
    .src(scripts)
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest('./public/assets/js'));
});

gulp.task('img', function() {
  return gulp
    .src(['./src/img/**/*'])
    .pipe(gulp.dest('./public/assets/img'));
});

gulp.task('docs', function() {
  return gulp
    .src(['./src/docs/**/*'])
    .pipe(gulp.dest('./public/docs'));
});

gulp.task('css-min', function() {
  return gulp
    .src('./src/less/**/*.less')
    .pipe(less())
    .pipe(concat('style.min.css'))
    .pipe(minify())
    .pipe(gulp.dest('./public/assets/css'));
});

gulp.task('js-vendor-min', function() {
  return gulp
    .src(vendorScripts)
    .pipe(concat('vendor.min.js'))
    .pipe(uglify({ mangle: false }))
    .pipe(gulp.dest('./public/assets/js'));
});

gulp.task('js-min', function() {
  return gulp
    .src(scripts)
    .pipe(concat('bundle.min.js'))
    .pipe(uglify({ mangle: false }))
    .pipe(gulp.dest('./public/assets/js'));
});

gulp.task('html', ['html-en', 'html-ko']);

gulp.task('watch', function() {
  gulp.watch('./src/html/**/*', ['html']);
  gulp.watch('./src/less/*.less', ['css', 'css-min']);
  gulp.watch('./src/js/**/*.js', ['js', 'js-vendor', 'js-vendor-min', 'js-min']);
});

gulp.task('default', ['html', 'css', 'js-vendor', 'js', 'img', 'docs']);
gulp.task('prod', ['html', 'css-min', 'js-vendor-min', 'js-min', 'img', 'docs']);
gulp.task('all', ['default', 'prod']);
