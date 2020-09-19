var gulp = require("gulp");
var cssnano = require("gulp-cssnano");
var rename = require("gulp-rename");
var uglify = require("gulp-uglify");
var concat = require("gulp-concat");
var imagemin = require("gulp-imagemin");
var cache = require("gulp-cache");
var watch = require("gulp-watch");
var bs = require("browser-sync").create();
var sass = require("gulp-sass");
var util = require("gulp-util");
var sourcemaps = require("gulp-sourcemaps");


gulp.task('html', function (done) {
    gulp.src('./templates/*.html')
    .pipe(bs.reload({
        stream: true
    }));
    done();
});

gulp.task("css",function (done) {
    gulp.src("./css/*.scss")
        .pipe(sass()).on('error',sass.logError)
        .pipe(cssnano())
        .pipe(rename({"suffix":".min"}))
        .pipe(gulp.dest("./static/css/"))
        .pipe(bs.reload({
            stream: true
        }));
    done();
});

gulp.task("js", function (done) {
    gulp.src("./js/*.js")
        .pipe(sourcemaps.init())
        .pipe(uglify()).on('error',util.log)
        .pipe(rename({'suffix':'.min'}))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("./static/js/"))
        .pipe(bs.reload({stream: true}));
    done();
});

gulp.task("images", function (done) {
    gulp.src("./images/*.*")
        .pipe(cache(imagemin()))
        .pipe(gulp.dest("./static/images/"));
    done();
});

gulp.task("watch", function () {
    gulp.watch('./templates/*.html', gulp.series('html'));
    gulp.watch("./css/*.scss",gulp.series("css"));
    gulp.watch("./js/*.js",gulp.series("js"));
});

gulp.task("bs", function () {
    bs.init({
        'server':{
            'baseDir': './',
        }
    });
});

gulp.task("default", gulp.parallel('bs', 'watch'));
