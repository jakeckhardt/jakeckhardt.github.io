"use strict"

var gulp = require("gulp"),
    rename = require("gulp-rename"),
    sass = require("gulp-sass"),
    browserSync = require("browser-sync").create();

gulp.task('serve', ["sass"], function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch("scss/*.scss", ['sass']);
    gulp.watch("js/*.js").on("change", browserSync.reload);
    gulp.watch("*.html").on('change', browserSync.reload);
    gulp.watch("*.php").on('change', browserSync.reload);
});

gulp.task('sass', function() {
    return gulp.src("scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("./css"))
        .pipe(browserSync.stream());
});

gulp.task('default',["serve"]);
