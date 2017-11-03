var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
browserSync = require('browser-sync').create(),
cssImport = require('postcss-import');


gulp.task('default', function() {
	console.log("Hooray you created a GULP Task");
});

gulp.task('html', function(){	
	console.log("image something useful here");
});

gulp.task('styles', function(){	
	
	return gulp.src('./app/assets/styles/styles.css')		
		.pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
		.pipe(gulp.dest('./app/temp/styles/'));
});

gulp.task('watch', function()
{
	browserSync.init({		
		server: {
			baseDir: "app"
		}
	}); 
	
	watch('./app/index.html', function() 
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