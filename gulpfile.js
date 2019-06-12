const { src, dest, task, series, watch, parallel } = require('gulp');

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
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const svgo = require('gulp-svgo');
const svgSprite = require('gulp-svg-sprite');
const gulpif = require('gulp-if');
const env = process.env.NODE_ENV;



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
            .pipe(gulpif(env == 'dev', sourcemaps.init()))
            .pipe(concat('main.min.scss'))
            .pipe(sassGlob())
            .pipe(sass().on('error', sass.logError))
            //.pipe(px2rem())
            .pipe(
                gulpif(env == 'dev', 
                    autoprefixer({
                        browsers: ['last 2 version'],
                        cascade: false
                    })
                )
            )
            .pipe(gulpif(env == 'prod', gcmq()))
            .pipe(gulpif(env == 'prod', cleanCSS()))
            .pipe(gulpif(env == 'dev', sourcemaps.write()))
            .pipe(dest('dist'));
});


task(
    'scripts', () => {
        return src('src/js/*.js')
            .pipe(gulpif(env == 'dev', sourcemaps.init()))
            .pipe(concat('main.min.js', {newLine: ';'}))
            .pipe(
                gulpif(env == 'dev', 
                    babel({
                        presets: ['@babel/env']
                    })
                )    
            )
            .pipe(gulpif(env == 'dev', uglify()))
            .pipe(gulpif(env == 'dev', sourcemaps.write()))
            .pipe(dest('dist'));
});

task(
    'copy:img', () => {
        return src('src/img/**/*')
            .pipe(dest('dist/img'))
            .pipe(reload({ stream: true }));            
});

task(
    'copy:fonts', () => {
        return src('src/fonts/**/*')
            .pipe(dest('dist/fonts'))
            .pipe(reload({ stream: true }));      
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

task("watch", ()=>{
    watch('./src/scc/**/*.scss', series('styles'));
    watch('./src/js/**/*.js', series('scripts'));
    watch('./src/*.html', series('copy:html'));
    watch('./src/img/**/*', series('copy:img'));
    watch('./src/fonts/**/*', series('copy:fonts'));
})

task('default', series(
        'clean', 
        parallel('copy:html', 'styles', 'scripts', 'copy:img', 'copy:fonts'),
        parallel('watch', 'server')
    )
)

task('build', series(
        'clean', 
        parallel('copy:html', 'styles', 'scripts', 'copy:img', 'copy:fonts')
    )
)