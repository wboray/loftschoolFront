const { src, dest, task, series, watch } = require('gulp');

/*
const files = [
    'src/styles/one.scss',
    '!src/styles/two.scss',
]*/

const rm = require('gulp-rm');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;
const sassGlob = require('gulp-sass-glob');
const autoprefixer = require('gulp-autoprefixer');
//const px2rem = require('gulp-smile-px2rem');
const gcmq = require('gulp-group-css-media-queries');
const babel = require('gulp-babel');



task('clean', () => {
    return src('dist/**/*', {read: false}).pipe(rm());
});


task(
    'copy:html', () => {
        return src('src/*.html')
            .pipe(dest('dist'))
            .pipe(reload({ stream: true }));
});

const styles = [
    'node_modules/normalize.css/normalize.css',
    'src/css/main.scss',
]

task(
    'styles', () => {
        return src(styles)
            .pipe(concat('main.scss'))
            .pipe(sassGlob())
            .pipe(sass().on('error', sass.logError))
            //.pipe(px2rem())
            .pipe(
                autoprefixer({
                    browsers: ['last 2 version'],
                    cascade: false
                })
            )
            .pipe(gcmq())
            .pipe(dest('dist'));
});


task(
    'scripts', () => {
        return src('src/js/*.js')
            .pipe(concat('main.js', {newLine: ';'}))
            .pipe(
                babel({
                    presets: ['@babel/env']
                })
            )
            .pipe(dest('dist'));
});

task(
    'img', () => {
        return src('src/img/**/*')
            .pipe(dest('dist/img'));
});

task(
    'fonts', () => {
        return src('src/fonts/**/*')
            .pipe(dest('dist/fonts'));
});


task(
    'server', () => {
        browserSync.init({
            server: {
                baseDir: "./dist"
            },
            open: false
        })
});


//watch('./src/scc/**/*.scss', series('styles'));
//watch('./src/js/**/*.js', series('scripts'));
//watch('./src/*.html', series('copy:html'));

task('default', series('clean', 'copy:html', 'styles', 'scripts', 'img', 'fonts', 'server'));
