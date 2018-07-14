'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');
var sourcemaps = require('gulp-sourcemaps');
var babel = require('gulp-babel');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var plumber = require('gulp-plumber');
var chalk = require('chalk');
const imagemin = require('gulp-imagemin');
var browserSync = require('browser-sync');
var reload = browserSync.reload;



// 转译js文件
gulp.task('babel', function() {
  console.log(chalk.yellow('[进行中] js(!entry_*.js ES6->ES5)'));
  return gulp.src('./js/*.js')
    .pipe(sourcemaps.init())
    .pipe(plumber())
    .pipe(babel({
      presets: ['env']
    }))
    .pipe(concat('all.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist'))
    .on('end', function() {
      console.log(chalk.green('[已完成] js(!entry_*.js ES6->ES5)'));
    });
});

// 翻译sass文件
gulp.task('sass', function() {
  var plugins = [
    autoprefixer({
      browsers: ['last 4 version']
    }),
    cssnano()
  ];

  return gulp.src('./sass/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'expanded'
    }).on('error', sass.logError))
    .pipe(postcss(plugins))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist'));
});

// 压缩图片
gulp.task('minipicture', function() {
  return gulp.src('./picture/*')
    .pipe(imagemin([
      imagemin.gifsicle({
        interlaced: true
      }),
      imagemin.jpegtran({
        progressive: true
      }),
      imagemin.optipng({
        optimizationLevel: 5
      }),
      imagemin.svgo({
        plugins: [{
          removeViewBox: true
        }, {
          cleanupIDs: false
        }]
      })
    ]))
    .pipe(gulp.dest('dist/picture'));
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
gulp.watch('./js/*.js', ['babel']);
gulp.watch('./picture/*', ['minipicture']);
gulp.watch('./dist/*', [reload]);