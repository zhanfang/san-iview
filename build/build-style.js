var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var stylus = require('gulp-stylus');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');

// 编译stylus
gulp.task('css', function () {
    gulp.src('../src/styles/index.styl')
        .pipe(stylus())
        .pipe(autoprefixer({
            browsers: ['last 2 versions', 'ie > 8']
        }))
        .pipe(cleanCSS({
            inline: ['none']
        }))
        .pipe(rename('san-iview.css'))
        .pipe(gulp.dest('../dist/styles'));
});

// 拷贝字体文件
gulp.task('fonts', function () {
    gulp.src('../src/styles/common/iconfont/fonts/*.*')
        .pipe(gulp.dest('../dist/styles/fonts'));
});

gulp.task('default', ['css', 'fonts']);
