var gulp = require('gulp'),
requirejsOptimize = require('gulp-requirejs-optimize'),
clean = require('gulp-clean');//清理文件或文件夹
var src = 'src';
var dist = 'dist';

//清理构建目录
gulp.task('clean', function () {
    return gulp.src(dist, {read: false})
        .pipe(clean());
});



gulp.task('move',  function(){
gulp.src('src/js/lib/*.js')
        .pipe(gulp.dest('dist/js/lib'));

  gulp.src('src/js/*.js')
        .pipe(gulp.dest('dist/js'));

  return gulp.src('src/*.html').pipe(gulp.dest('dist'));
});

gulp.task('rjs', function () {
  return gulp.src('src/js/mod/*.js')
    .pipe(requirejsOptimize({
      mainConfigFile: 'src/js/config.js',
      exclude: [
       'jquery'//排除不合并的文件，一般是第三方，公用度比较高的组件
      ]
    }))
    .pipe(gulp.dest('dist/js/mod'));
});


gulp.task('build', ['clean'],function() {
  return gulp.start('move','rjs');
});



gulp.task('default',['build'] ,function() {
  // 将你的默认的任务代码放在这
  console.log("defaultTask")
});