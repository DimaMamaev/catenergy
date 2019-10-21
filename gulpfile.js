const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const svgSprite = require('gulp-svg-sprite');
const autoprefixer = require ('gulp-autoprefixer');
const svgmin = require('gulp-svgmin');
const cheerio = require('gulp-cheerio');
const replace = require('gulp-replace');
const rename = require("gulp-rename");
const svgstore = require('gulp-svgstore');
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
    .pipe(autoprefixer({
        cascade: false
    }))
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


function Sprite() {
    return gulp.src('./img/*.svg')
    .pipe(svgmin({
		js2svg: {
			pretty: true
		}
	}))
    .pipe(cheerio({
        run: function ($) {
            $('[fill]').removeAttr('fill');
            $('[stroke]').removeAttr('stroke');
            $('[style]').removeAttr('style');
        },
        parserOptions: {xmlMode: true}
    }))
    .pipe(replace('&gt;', '>'))
    .pipe(svgSprite({
        mode: {
            symbol: {
                sprite: "../sprite.svg",
                render: {
                    scss: {
                        dest:'build/css/_sprite.scss',
                        template:"build/css/_sprite_template.scss"
                    }
                }
            }
        }
    }))
    .pipe(gulp.dest('./img/'));

}




gulp.task("svgstore", function () {
    return gulp.src('./img/*.svg')
    .pipe(svgstore({
      inlineSvg: true
    }))
    .pipe(rename("sprite.svg"))
    .pipe(gulp.dest("build/img"));
  });



gulp.task('styles', styles);
gulp.task('scripts', scripts);
gulp.task('watch', watch);
gulp.task('Sprite', Sprite);