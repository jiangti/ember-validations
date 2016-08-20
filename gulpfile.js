var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require("gulp-rename");
var wrap = require("gulp-wrap");

 
gulp.task('default', function(){
  gulp.src([
  	'packages/ember-validations/lib/error.js',
  	'packages/ember-validations/lib/errors.js',
  	'packages/ember-validations/lib/validations.js',
  	'packages/ember-validations/lib/validators.js',
  	'packages/ember-validations/lib/validator.js',
  	'packages/ember-validations/lib/validators/*',
  ])
  	.pipe(wrap("(function() {\n<%= contents %>\n})();"))
	.pipe(concat('ember-validations.js'))    
    .pipe(gulp.dest('dist/'));
});
