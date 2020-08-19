const gulp = require('gulp');
const concat = require('gulp-concat');

// 注册合并压缩js的任务
gulp.task('js', () => {
  // return gulp.src('src/js/**/*.js')  // 深遍历
  return gulp.src('src/js/*.js')  // 浅遍历 找到目标原文件
    .pipe(concat('build.js')) // 临时合并文件
    .pipe(gulp.dest('dist/js/'));
});

gulp.task('default', gulp.series('js'));