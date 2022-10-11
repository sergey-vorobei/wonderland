const gulp = require('gulp');

gulp.task('default', function() {
    gulp.watch('./sass/*.scss', gulp.series('sass'));
    gulp.watch('pug/*.pug', gulp.series('pug'));
});
