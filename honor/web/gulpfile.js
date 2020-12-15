const gulp = require("gulp");
const cssnano = require("gulp-cssnano");
const sass = require("gulp-sass");
const bs = require("browser-sync").create();
const rename = require("gulp-rename");
const htmlmin = require("gulp-htmlmin");
const del = require("del");
const uglify = require("gulp-uglify");
const util = require("gulp-util");
const sourcemaps = require("gulp-sourcemaps");
const less = require("gulp-less");
const plumber = require("gulp-plumber");
const concat = require("gulp-concat");
const autoprefixer = require("gulp-autoprefixer");
const cache = require("gulp-cache");
const imagemin = require("gulp-imagemin");

gulp.task("html",done=>{
  gulp.src("./*.html")
  .pipe(htmlmin({
    collapseWhitespace:true
  }))
  .pipe(gulp.dest("./dist"))
  .pipe(bs.reload({"stream":true}))
  done()
})

gulp.task("sass",done=>{
  gulp.src("./css/*.scss")
  .pipe(sass().on("error",sass.logError))
  .pipe(cssnano())
  .pipe(rename({"suffix":".min"}))
  .pipe(autoprefixer())
  .pipe(gulp.dest("./dist/css"))
  .pipe(bs.reload({"stream":true}))
  done()
})

gulp.task("less",(done)=>{
  gulp.src("./css/*.less")
  .pipe(plumber())
  .pipe(less())
  .pipe(rename({"suffix":".min"}))
  .pipe(gulp.dest("./dist/css"))
  .pipe(bs.reload({"stream":true}))
  done()
})

gulp.task("del",(done)=>{
  del(["./dist/*"])
  done()
})

gulp.task("js",(done)=>{
  gulp.src("./js/*.js")
  .pipe(sourcemaps.init())
  .pipe(concat("all.js"))
  .pipe(uglify().on('error',util.log))
  .pipe(rename({"suffix":".min"}))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest("./dist/js"))
  .pipe(bs.reload({"stream":true}))
  done()
})

gulp.task("image",done=>{
  gulp.src("./images/*.*")
  .pipe(cache(imagemin()))
  .pipe(gulp.dest("./dist/images"))
  .pipe(bs.reload({"stream":true}))
  done()
})

gulp.task("watch",()=>{
  gulp.watch("./*.html",gulp.series("html"))
  gulp.watch("./css/*.scss",gulp.series("sass"))
  gulp.watch("./css/*.less",gulp.series("less"))
  gulp.watch("./js/*.js",gulp.series("js"))
  gulp.watch("./images/*.*",gulp.series("image"))
})

gulp.task("bs",()=>{
  bs.init({
    port:8090,
    server:{
      baseDir:"./dist"
    }
  })
})

gulp.task("default",gulp.series("del",gulp.parallel("bs","watch")))