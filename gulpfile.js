/*var gulp=require("gulp");
var rename=require("gulp-rename");
var uglify=require("gulp-uglify");
var miniHtml=require("gulp-minify-html");

gulp.task("min_js",function(){

	gulp.src("js/*.js")
		.pipe(uglify())
		.pipe(gulp.dest("dist/js"))

})

gulp.task("min_html",function(){
	gulp.src("html/*.html")
		 .pipe(rename({
		    suffix: "-min",
		  }))
		 .pipe(miniHtml())
		 .pipe(gulp.dest("dist/html"))
})*/


var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var loadPlugins = require('gulp-load-plugins')();

	gulp.task("min_js",function(){

		gulp.src("js/*.js")
			.pipe(loadPlugins.uglify())
			.pipe(loadPlugins.rename({
				suffix:".min"
			}))
			.pipe(gulp.dest("dist/js"))

	})


	gulp.task("min_imgage",function(){
		return gulp.src("images/*")
		.pipe(imagemin({
			progressive:true
		}))
		.pipe(gulp.dest("dist/img"))
	})