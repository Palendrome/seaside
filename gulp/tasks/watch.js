var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

gulp.task('watch', function()
{
	browserSync.init({		
		server: {
			baseDir: "app"
		}
	}); 
	
	watch('./app/*.html', function() 
	{
		browserSync.reload();
	});
	
	watch('./app/assets/styles/**/*.css', function()
	{
		console.log("styles Watch");
		gulp.start('cssInject');
	});
});

gulp.task('cssInject',['styles'], function() {
	return gulp.src('app/temp/styles/styles.css')
		.pipe(browserSync.stream());
});