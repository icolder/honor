var gulp = require("gulp");
var cssnano = require("gulp-cssnano");
var rename = require("gulp-rename");
var uglify = require("gulp-uglify");
var bs = require("browser-sync").create();

gulp.task("css",function(done){
  gulp.src("./css/*.css")
  .pipe(cssnano())
  .pipe(rename({"suffix":".min"}))
  .pipe(gulp.dest("./dist/css"))
  .pipe(bs.reload({stream:true}));
  done();
});

gulp.task("js",function(done){
  gulp.src("./js/*.js")
  .pipe(uglify({
    toplevel:true
  }))
  .pipe(rename({"suffix":".min"}))
  .pipe(gulp.dest("./dist/js"))
  .pipe(bs.reload({stream:true}));
  done();
});

gulp.task("watch",function(){
  gulp.watch("./css/*.css",gulp.series("css"));
  gulp.watch("./js/*.js",gulp.series("js"));
});

gulp.task("bs",function(){
  bs.init({
    server:{
      baseDir:"./"
    }
  });
});

gulp.task("default",gulp.parallel("bs","watch"));