const jspm = require('jspm'),
gulp = require('gulp');

// JSPM-cli api [https://github.com/jspm/jspm-cli/blob/master/docs/api.md]

const PATH = {
 jsFiles: 'public/js/**/*.js',
 jsSrc: 'public/js/app',
 jsDest: 'public/dest/bundle.js',
};

jspm.setPackagePath('.');

gulp.task('scripts', () => {
    return jspm
  .bundleSFX(PATH.jsSrc, PATH.jsDest, 
   {
    minify: false,
    mangle: false,
    lowResSourceMaps: false,
    sourceMaps: true
   })
  .then(() => {
  });
});

gulp.task('watch', () => {
 gulp.watch(PATH.jsFiles, ['scripts']).on('change', (event) => {
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    return;
 });
});

gulp.task('default', ['watch', 'scripts']);