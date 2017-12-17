let gulp = require('gulp'),
minify = require('gulp-babel-minify'),
concat = require('gulp-concat');
livereload = require('gulp-livereload');
gulp.task('minify', function () {
    gulp.src(['js_sources/Aliens.js','js_sources/AngryAliens.js','js_sources/Boot.js','js_sources/Bullets.js','js_sources/EnemyBullets.js','js_sources/Explosions.js','js_sources/GameOver.js','js_sources/Lives.js','js_sources/Load.js','js_sources/Menu.js','js_sources/Meteors.js','js_sources/Play.js','js_sources/Player.js','js_sources/PowerUps.js','js_sources/SpecialEnemyBullets.js','js_sources/Ufo.js','js_sources/Game.js'])
    .pipe(concat('main.js'))
    .pipe(minify({
    mangle: {
      keepClassName: true
    }
  }))
  .pipe(gulp.dest("js"));
});
gulp.task('watch', function() {
    livereload.listen();
    gulp.watch(['js_sources/Aliens.js','js_sources/AngryAliens.js','js_sources/Boot.js','js_sources/Bullets.js','js_sources/EnemyBullets.js','js_sources/Explosions.js','js_sources/GameOver.js','js_sources/Lives.js','js_sources/Load.js','js_sources/Menu.js','js_sources/Meteors.js','js_sources/Play.js','js_sources/Player.js','js_sources/PowerUps.js','js_sources/SpecialEnemyBullets.js','js_sources/Ufo.js','js_sources/Game.js'], ['minify']);
  });