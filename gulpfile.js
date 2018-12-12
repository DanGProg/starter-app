var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var watch = require('gulp-watch');
var sass = require('gulp-sass');

// Concatenate & Minify JS
// gulp.task('scripts', function() {
//     return gulp.src('js/*.js')
//         .pipe(concat('all.js'))
//         .pipe(gulp.dest('dist'))
//         .pipe(rename('all.min.js'))
//         .pipe(uglify())
//         .pipe(gulp.dest('dist'));
// });

// static server
gulp.task('serve', ['sass'], function() {
    browserSync.init({
        server: "./"
    });
    gulp.watch("dev/scss/*.scss", ['sass']);
    gulp.watch("*.html").on('change', browserSync.reload);
});

// Compile Sass
gulp.task('sass', function() {
    return gulp.src('dev/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('css'))
        .pipe(browserSync.stream());
});

// Watch Files For Changes
gulp.task('watch', function() {
    // gulp.watch('js/*.js', ['lint', 'scripts']);
    gulp.watch('dev/scss/*.scss', ['sass']);
});

// Default Task
gulp.task('default', ['serve']);
