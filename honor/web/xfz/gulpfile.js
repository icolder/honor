var gulp = require("gulp");
var cssnano = require("gulp-cssnano");
var rename = require("gulp-rename");
var uglify = require("gulp-uglify");
var bs = require("browser-sync").create();
var sass = require("gulp-sass");
var util = require("gulp-util");
var sourcemaps = require("gulp-sourcemaps");

gulp.task("html", function(done){
  gulp.src("./html/*.html")
  .pipe(bs.reload({stream:true}));
  done();
});

gulp.task("css",function (done){
  gulp.src("./css/*.scss")
  .pipe(sass()).on('error',sass.logError)
  .pipe(cssnano())
  .pipe(rename({"suffix":".min"}))
  .pipe(gulp.dest("./dist/css"))
  .pipe(bs.reload({stream:true}));
  done();
});

gulp.task("js", function(done){
  gulp.src("./js/*.js")
  .pipe(sourcemaps.init())
  .pipe(uglify({
    'toplevel':true
  })).on("error", util.log)
  .pipe(rename({"suffix":".min"}))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest("./dist/js"))
  .pipe(bs.reload({stream:true}));
  done();
});

gulp.task("watch", function(){
  gulp.watch("./css/*.scss",gulp.series("css"));
  gulp.watch("./html/*.html",gulp.series('html'));
  gulp.watch("./js/*.js", gulp.series('js'));
});

gulp.task("bs", function(){
  bs.init({
    server: {
      baseDir: './'
    }
  });
});

gulp.task('default', gulp.parallel("bs",'watch'));