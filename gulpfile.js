var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested');


gulp.task('default', function() {
	console.log("Hooray you created a GULP Task");
});

gulp.task('html', function(){	
	console.log("image something useful here");
});

gulp.task('styles', function(){	
	return gulp.src('styles/styles.css')
	
	.pipe(postcss([cssvars, nested, autoprefixer]))
	.pipe(gulp.dest('temp/styles/'));
});

gulp.task('watch', function() 
{	
	watch('video.html', function() 
	{
		gulp.start('html');
	});
	
	watch('styles/**/*.css', function()
	{
		gulp.start('styles');
	});
});