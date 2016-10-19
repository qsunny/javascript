var gulp = require('gulp');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var changed = require('gulp-changed');
var imagemin = require('gulp-imagemin');
var autoprefix = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');
var browserSync = require('browser-sync').create();
var stripDebug = require('gulp-strip-debug');
var del = require('del');

gulp.task('browserSync', function() {
   browserSync.init({
      server: {
         baseDir: 'build'
      },
   })
});

// JS hint task
gulp.task('jshint', function() {
    gulp.src('./src/scripts/*.js')
      .pipe(jshint())
      .pipe(jshint.reporter('default'));
});

gulp.task('minify',function(){
	gulp.src('./src/scripts/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'))
		.pipe(concat('app.js'))
		.pipe(stripDebug())
		.pipe(uglify())
		.pipe(gulp.dest('./build/srcipts'))
});

gulp.task('styles', function() {
   gulp.src(['./src/styles/*.css'])
   .pipe(concat('styles.css'))
   .pipe(autoprefix('last 2 versions'))
   .pipe(minifyCSS())
   .pipe(gulp.dest('./build/styles/'))
   .pipe(browserSync.reload({
      stream: true
   }));
});

gulp.task('imagemin', function() {
   var img_src = 'src/images/*.+(png|jpg|gif)',img_dest = 'build/images';

   gulp.src(img_src)
   .pipe(changed(img_dest))
   .pipe(imagemin())
   .pipe(gulp.dest(img_dest));
});

//执行压缩前，先删除dest文件夹里的内容
gulp.task('clean', function(cb) {
    del.sync(['build/*'],cb)
});


gulp.task('default',['clean','imagemin','minify','styles'],function(){
	// place code for your default task here
	// watch for JS changes
	gulp.watch('./src/scripts/*.js', function() {
	    gulp.run('jshint', 'minify');
	  });

	// watch for CSS changes
   gulp.watch('./src/styles/*.css', function() {
      // run styles upon changes
      gulp.run('styles');
   });
});


