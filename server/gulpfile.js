const gulp = require('gulp');
const nodemon = require('gulp-nodemon');
const eslint = require('gulp-eslint');


gulp.task('develop', () => {
    nodemon({
        script: 'bin/www',
        ext: 'js',
        stdout: false,
    }).on('readable', function() {
        this.stdout.pipe(process.stdout);
        this.stderr.pipe(process.stderr);
    });
});

gulp.task('lint', function() {
    return gulp.src('server/**/*.js')
        .pipe(eslint())
        .pipe(eslint.format());
});

gulp.task('default', [
    'develop',
]);