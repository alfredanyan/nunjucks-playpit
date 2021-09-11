const gulp = require("gulp");
const nunjucksRender = require("gulp-nunjucks-render");
const data = require("gulp-data");
const page_data = require("./src/page_data.json");

gulp.task("nunjucks-php", () => {
    return gulp.src("src/pages/*.php")
    .pipe(data(page_data))
    .pipe(nunjucksRender({
        path: ["src/templates"],
        ext: ".php",
    })).pipe(gulp.dest("dist"));
})
gulp.task("nunjucks-html", () => {
    return gulp.src("src/pages/*.html")
    .pipe(data(page_data))
    .pipe(nunjucksRender({
        path: ["src/templates"],
    })).pipe(gulp.dest("dist"));
})

gulp.task("default", gulp.parallel("nunjucks-html", "nunjucks-php"));