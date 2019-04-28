var gulp = require("gulp");
var sass = require("gulp-sass");
var sourcemaps = require("gulp-sourcemaps");
var slash = require("slash");

var paths = {
  scss: "./src/sass/**/*.scss",
  dist: "./Layouts/TypeScriptSolution/dist",
  sources: "./Layouts/TypeScriptSolution/dist/**.*.*",
  prod: "D:\\test"
};

gulp.task("compile:sass", function() {
  gulp
    .src(paths.scss)
    .pipe(sass())
    .pipe(gulp.dest(paths.dist));
});

//watch sass

gulp.task("watch:sass", function() {
  gulp.watch(paths.scss, ["compile:sass"]);
});
