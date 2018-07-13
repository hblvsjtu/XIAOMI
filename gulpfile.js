'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

// 翻译sass文件
gulp.task('sass', function() {
  return gulp.src('./sass/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'expanded'
    }).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./css'));
});

// 设置任务---架设静态服务器
gulp.task('browser-sync', function() {
  browserSync.init({
    files: ['**'],
    server: {
      baseDir: './', // 设置服务器的根目录
      index: './index.html' // 指定默认打开的文件
    },
    browser: "google chrome",
    port: 3000 // 指定访问服务器的端口号
  });
});

gulp.watch('./sass/*.scss', ['sass']);
gulp.watch('./stylesheets/*.css', [reload]);