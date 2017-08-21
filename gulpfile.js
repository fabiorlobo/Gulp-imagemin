/* * * * * * * * * * * * * *
  REQUIRES
* * * * * * * * * * * * * */

// Gulp
gulp = require('gulp'),

// Image Optimization
imagemin = require('gulp-imagemin'),
gifsicle = require('imagemin-gifsicle'),
guetzli = require('imagemin-guetzli'),
optipng = require('imagemin-optipng'),
svgo = require('imagemin-svgo');

/* * * * * * * * * * * * * *
  IMAGE OPTIMIZATION
* * * * * * * * * * * * * */

// GIF

function gif() {
  return gulp.src('input/**/*.gif')
  .pipe(imagemin([
		gifsicle()
	], {
		verbose: true
	}))
  .pipe(gulp.dest('output'));
};

gulp.task('gif', gif);

// JPG

function jpg() {
	return gulp.src('input/**/*.{jpg,jpeg}')
	.pipe(imagemin([
		guetzli({
			quality: 88
		})
	], {
		verbose: true
	}))
	.pipe(gulp.dest('output'));
};

gulp.task('jpg', jpg);

// PNG

function png() {
  return gulp.src('input/**/*.png')
  .pipe(imagemin([
		optipng()
	], {
		verbose: true
	}))
  .pipe(gulp.dest('output'));
};

gulp.task('png', png);

// SVG

function svg() {
  return gulp.src('input/**/*.svg')
  .pipe(imagemin([
		svgo()
	], {
		verbose: true
	}))
  .pipe(gulp.dest('output'));
};

gulp.task('svg', svg);

gulp.task('images', ['gif', 'jpg', 'png', 'svg']);