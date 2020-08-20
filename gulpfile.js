const concat = require('gulp-concat');
const { series, src, dest } = require('gulp');

// 注册合并压缩js的任务
function concatJs() {
  // return src('src/js/**/*.js')  // 深遍历
  return src('src/js/*.js')  // 浅遍历 找到目标原文件
    .pipe(concat('build.js')) // 临时合并文件
    .pipe(dest('dist/js/'));  // 输出目录
}

exports.default = series(concatJs); // 默认任务 执行命令：gulp
exports.concatJs = series(concatJs); // 单独任务 执行命令：gulp concatJs