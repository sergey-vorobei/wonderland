const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

sass.compiler = require('node-sass');

gulp.task('sass', function () {
	return gulp.src('./sass/*.scss')
	  .pipe(sass().on('error', sass.logError))
	  //autoprefixer
	  .pipe(autoprefixer({cascade: false}))
	  .pipe(gulp.dest('./css'));
	  
  });
