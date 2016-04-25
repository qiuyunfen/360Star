var gulp = require('gulp');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var concat = require('gulp-concat');
var del = require('del');
var babel = require('gulp-babel');

var paths = {
	scripts: 'app/js/*.js',
	images: ['app/img/*.jpg', 'app/img/*.png']
};

gulp.task('scripts',  function() {
	return gulp.src(paths.scripts)
		.pipe(babel())
		.pipe(uglify())
		.pipe(concat('all.min.js'))
		.pipe(gulp.dest('build/js'));
});

gulp.task('babel', function() {

});

gulp.task('images', function() {
	return gulp.src(paths.images)
		.pipe(imagemin({optimizationLevel: 5}))
		.pipe(gulp.dest('build/img')) 
});

gulp.task('clean', function() {
	return del(['build']);
});

gulp.task('watch', function() {
	gulp.watch(paths.scripts, ['scripts']);
	gulp.watch(paths.images, ['images']);
});


gulp.task('default', ['watch', 'scripts', 'images'])