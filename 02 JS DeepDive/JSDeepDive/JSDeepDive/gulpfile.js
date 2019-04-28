var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var babel = require('gulp-babel');
var sourcemaps = require('gulp-sourcemaps');
var spsave = require('gulp-spsave');

var paths = {
	scriptSource: './Layouts/JavaScript/demos/es6*.js',
	scriptDest: './Layouts/JavaScript/bundle/',
	scss: './Layouts/JavaScript/sass/**/*.scss',
	scssDest: './Layouts/JavaScript/css/'
};

// Bable

gulp.task('babel', () => {
	return gulp
		.src([ paths.scriptSource ])
		.pipe(sourcemaps.init())
		.pipe(babel({ presets: [ '@babel/preset-env' ] }))
		.pipe(concat('es5bundle.js'))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest(paths.scriptDest));
});

// Compile sass

gulp.task('compile-sass', function() {
	return gulp.src(paths.scss).pipe(sass()).pipe(gulp.dest(paths.scssDest));
});

// Use watchers

gulp.task('watch:sass', function() {
	gulp.watch(paths.scss, [ 'compile-sass' ]);
});

gulp.task('watch:babel', function() {
	gulp.watch(paths.scss, [ 'babel' ]);
});

// Upload to Files to SharePoint - local SharePoint @ http://sp2019 installed

var spsaveCoreOption = {
	siteUrl: 'http://sp2019',
	folder: 'Shared%20Documents',
	checkin: true,
	checkinType: 1,
	flatten: false,
	notification: true
};

var spsaveCredential = {
	username: 'spdom\\administrator',
	password: 'Pa$$w0rd'
};

gulp.task('uploadsp', function() {
	return gulp.src('./dist/**/*').pipe(spsave(spsaveCoreOption, spsaveCredential));
});
