let gulp = require("gulp");
let cssnano = require("gulp-cssnano");
let rename = require("gulp-rename");
let uglify = require("gulp-uglify");
let concat = require("gulp-concat");
let imagemin = require("gulp-imagemin");
let cache = require("gulp-cache");
let bs = require("browser-sync").create();
let sass = require("gulp-sass");
let webserver = require("gulp-webserver");
let util = require("gulp-util");
let sourcemaps = require("gulp-sourcemaps");

let path = {
    'html': './templates/**/',
    'css': './src/css/**/',
    'js': './src/js/',
    'images': './src/images/',
    'css_dist': './dist/css/',
    'js_dist': './dist/js/',
    'images_dist': './dist/images/'
};

// 定义一个处理html文件的任务
gulp.task('html', function (done) {
    gulp.src(path.html + '*.html')
        .pipe(bs.reload({stream:true}));
    done();
});

// 定义一个处理css任务
gulp.task("css", function (done) {
    gulp.src(path.css + '*.scss')
        .pipe(sass()).on("error",sass.logError)
        .pipe(cssnano())
        .pipe(rename({"suffix":".min"}))
        .pipe(gulp.dest(path.css_dist))
        .pipe(bs.reload({stream:true}));
    done();
});

// 定义一个处理js任务
gulp.task("js", function (done) {
    gulp.src(path.js + '*.js')
        .pipe(sourcemaps.init())
        .pipe(uglify()).on('error',util.log)
        .pipe(rename({'suffix':'.min'}))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.js_dist))
        .pipe(bs.reload({stream:true}));
    done();
});

// 定义一个处理images任务
gulp.task("images", function (done) {
    gulp.src(path.images + '*.*')
        .pipe(cache(imagemin()))
        .pipe(gulp.dest(path.images_dist))
        .pipe(bs.reload({stream:true}));
    done();
});

// 定义监听文件修改的任务
gulp.task("watch", function () {
    gulp.watch(path.html + '*.html', gulp.series("html"));
    gulp.watch(path.css + '*.scss', gulp.series("css"));
    gulp.watch(path.js + '*.js', gulp.series("js"));
    gulp.watch(path.images + '*.*', gulp.series("images"));
});

// 初始化browser_sync的任务
gulp.task("bs", function () {
    bs.init({
        'server': {
            'baseDir': './'
        }
    })
});

// 创建一个默认任务
// gulp.task('default', gulp.parallel('bs','watch')); 在Django中就不是通过'browser-sync'来监听文件修改了。
gulp.task('default', gulp.series('watch'));