const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const browserSync = require('browser-sync').create();

const cssFiles = [
    './css/style.css'
]
const jsFiles = [
    './js/js.js',
    './js/map.js'
]


function styles() {
    return gulp.src(cssFiles)
    .pipe(cleanCSS({
        level:2
}))
    .pipe(gulp.dest('./build/css'))
}

function scripts() {
    return gulp.src(jsFiles)
    
    .pipe(concat('script.js'))
    .pipe(uglify ())
    .pipe(gulp.dest('./build/js'))
}


function watch() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch("./*.html").on('change', browserSync.reload);
    gulp.watch("./css/style.css").on('change', browserSync.reload);
    gulp.watch("./js/*.js").on('change', browserSync.reload);
}


gulp.task('styles', styles);
gulp.task('scripts', scripts);
gulp.task('watch', watch);