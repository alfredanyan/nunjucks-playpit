const nunjucksRender = require("gulp-nunjucks-render");
const gulp = require("gulp");

gulp.task("nunjucks-php", () => {
    return gulp.src("src/pages/*.php").pipe(nunjucksRender({
        path: ["src/templates"],
        ext: ".php",
    })).pipe(gulp.dest("dist"));
})
gulp.task("default", () => {
    return gulp.src("src/pages/*.html").pipe(nunjucksRender({
        path: ["src/templates"],
    })).pipe(gulp.dest("dist"));
})