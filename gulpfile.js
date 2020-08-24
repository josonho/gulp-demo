const concat = require('gulp-concat');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const cleanCss = require('gulp-clean-css');
const rename = require('gulp-rename');

const { series, parallel, src, dest } = require('gulp');

// 注册合并压缩js的任务
function concatJs() {
  // return src('src/js/**/*.js')  // 深遍历
  return src('src/js/*.js')  // 浅遍历 找到目标原文件
    .pipe(concat('build.js')) // 临时合并文件
    .pipe(babel({  // build.js es6转化为es5
      presets: ['env']
    }))
    .pipe(uglify()) // 压缩build.js
    .pipe(rename((path) => {  // 修改文件命名
      path.basename += '.min' 
    }))
    .pipe(dest('dist/js/'));  // 输出目录
}

// 注册合并压缩js的任务
function sassToCss() {
  return src('src/scss/*.scss')
    .pipe(sass())  // scss --> css
    .pipe(cleanCss()) // 压缩
    .pipe(rename((path) => {
      path.basename += '.min'
    }))
    .pipe(dest('dist/css/'));
}

exports.default = series(concatJs, sassToCss); // 默认任务 执行命令：gulp
exports.concatJs = series(concatJs); // 单独任务 执行命令：gulp js