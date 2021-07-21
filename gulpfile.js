// Gulp Vars
var gulp               	 = require('gulp'),
	babel									 = require('gulp-babel'),
	siteName               = 'tomtempelaere',
	// Include plugins
	plugins                = require('gulp-load-plugins')(), // tous les plugins de package.json
	// Images
	imagemin               = require('gulp-imagemin');

// Localisations des fichiers
var themePath = './wp-content/themes/' + siteName;
var ignoreThemePath = '!./wp-content/themes/' + siteName;

var paths = {
	directories: {
		theme: themePath,
		ignoreTheme: ignoreThemePath,
		pluginsFiles: './wp-content/plugins',
		imagesCompiled: themePath + '/assets/img',
		imagesSource: themePath + '/assets/img',
		js: themePath + '/assets/js',
		jsCompiled: themePath + '/assets/js/compiled',
		css: themePath + '/assets/css'
	},
	css: [
		themePath + '/*.css',
		themePath + '/*.min.css'
	],
	cssMain: 'wp-content/themes/' + siteName + '/style.min.css',
	sass: themePath + '/assets/sass/**/*.scss',
	sassMain: themePath + '/assets/sass/main.scss',
	php: [
		'./wp-config.php',
		'./.htaccess',
		themePath + '/*.php',
		themePath + '/woocommerce/*.php',
		themePath + '/woocommerce/**/*.php',
		themePath + '/templates/*.php',
		themePath + '/inc/*.php',
		themePath + '/components/*.php',
		themePath + '/languages/*.php'
	],
	images: [
		themePath + '/assets/img/*',
		themePath + '/assets/img/*'
	],
	js: [
		themePath + '/assets/js/*.js',
		ignoreThemePath + '/assets/js/*.min.js'
	],
	jsCompiled: [
		themePath + '/assets/js/compiled/*.js',
		ignoreThemePath + '/assets/js/compiled/*.min.js'
	],
	fonts: themePath + '/assets/fonts/*',
	includes: themePath + '/inc/*',
	// to review
	uploadProdFiles: ['*', 'wp-admin/**', 'wp-content/**', 'wp-includes/**', ignoreThemePath + '/images_src', '!bower_components', '!node_modules', '!gulpfile.js', '!package.json', '!bower.json', '!.gitignore', '!.sublime-gulp.cache', '!package-lock.json', '!sublime-gulp.log']
};


// Compiler SASS en CSS, autoprefixer, minifier...
gulp.task('css', function(){
	return gulp.src(paths.sassMain)
		// Import SASS Partials
		.pipe(plugins.sassGlob())
		// Compilation
		.pipe(plugins.sass({
			includePaths : [paths.sass]
		}).on('error', plugins.sass.logError))
		// On prépare le style.min.css
		.pipe(plugins.rename({ basename: 'style', suffix: '.min' }))
		// On envoie le style.min.css
		.pipe(gulp.dest(paths.directories.theme));
		// .pipe(upload(paths.cssMain));
		// .pipe(browserSync.stream({match: cssTheme}));
});

// Compiler SASS en CSS, autoprefixer, minifier...
gulp.task('css-prod', function(){
	return gulp.src(paths.sassMain)
		// Import SASS Partials
		.pipe(plugins.sassGlob())
		// Compilation
		.pipe(plugins.sass({
			includePaths : [paths.sass]
		}).on('error', plugins.sass.logError))
		// Auto préfixe CSS3...
		.pipe(plugins.autoprefixer())
		// Réordonne les propriétés CSS
		.pipe(plugins.csscomb())
		// Nettoie les indentations
		.pipe(plugins.cssbeautify({indent: '  '}))
		// Renommage
		.pipe(plugins.rename({ basename: 'style' }))
		// On envoie le style.css
		.pipe(gulp.dest(paths.directories.theme))
		// Minifier
		.pipe(plugins.csso())
		// On prépare le style.min.css
		.pipe(plugins.rename({ suffix: '.min' }))
		// On envoie le style.min.css
		.pipe(gulp.dest(paths.directories.theme));
});

// Autoprefixer, minifier tous les CSS...
gulp.task('css-min', function(){
	return gulp.src(paths.directories.css)
		.pipe(plugins.autoprefixer())
		// Réordonne les propriétés CSS
		.pipe(plugins.csscomb())
		// Nettoie les indentations
		.pipe(plugins.cssbeautify({indent: '  '}))
		// Minifier
		.pipe(plugins.csso())
		// On prépare le style.min.css
		.pipe(plugins.rename({ suffix: '.min' }))
		// On envoie le style.min.css
		.pipe(gulp.dest(paths.directories.theme));
		// .pipe(browserSync.stream({match: cssTheme}));
});

// Lint JS
gulp.task('js', function() {
    return gulp.src([paths.js, paths.directories.ignoreTheme + '/js/*.min.js'])
        .pipe(plugins.jshint())
        .pipe(plugins.jshint.reporter('default'))
        .pipe(plugins.jshint.reporter('fail'))
        .pipe(plugins.notify({
            title: 'JSHint',
            message: 'JSHint Passed. Let it fly!',
        }))
});

// Minifier JS
gulp.task('js-min', function() {
	return gulp.src(paths.js)
		.pipe(plugins.minify({
	        ext:{
	            // src:'-debug.js',
	            min:'.min.js'
	        }
	        // exclude: ['tasks'],
	        // ignoreFiles: ['.combo.js', '-min.js']
	    }))
	    .pipe(gulp.dest(paths.directories.js));
});

// Minifier JS
gulp.task('js-min-compiled', function() {
	return gulp.src(paths.jsCompiled)
		.pipe(plugins.minify({
	        ext:{
	            // src:'-debug.js',
	            min:'.min.js'
	        }
	        // exclude: ['tasks'],
	        // ignoreFiles: ['.combo.js', '-min.js']
	    }))
	    .pipe(gulp.dest(paths.directories.jsCompiled));
});

// Concaténer scripts js en main.js
gulp.task('js-concat', function() {
	return gulp.src(paths.js)
		.pipe(plugins.concat('main.js'))
		.pipe(gulp.dest(paths.directories.js));
});

// Minifier main.js
gulp.task('js-min-main', gulp.series('js-concat', function() {
	return gulp.src(paths.directories.js + '/main.js')
		.pipe(plugins.minify({
	        ext:{
	            // src:'-debug.js',
	            min:'.min.js'
	        }
	        // exclude: ['tasks'],
	        // ignoreFiles: ['.combo.js', '-min.js']
	    }))
		.pipe(gulp.dest(paths.directories.js));
}));

// Compresser Images
gulp.task('imagemin', function () {
	// Copie images sources
	return gulp.src(paths.images[0])
		.pipe(gulp.dest(paths.directories.imagesSource))
        .pipe(imagemin([
		    imagemin.gifsicle({interlaced: true}),
		    imagemin.mozjpeg({progressive: true}),
		    // imagemin.optipng({optimizationLevel: 5}),
		    imagemin.optipng({
		    	plugins: [
		    		{pngquant: true}
		    	]
		    }),
		    imagemin.svgo({
		        plugins: [
		            {removeViewBox: true},
		            {cleanupIDs: false}
		        ]
		    })
		]))
        .pipe(gulp.dest(paths.directories.imagesCompiled));
});

gulp.task('babel', function() {
	return gulp.src(paths.js)
	.pipe(babel({
      presets: ['@babel/env']
  }).on('error', function(err) {
    plugins.fancylog(plugins.fancylog.error('[Compilation Error]'));
    plugins.fancylog(err.fileName + ( err.loc ? `( ${err.loc.line}, ${err.loc.column} ): ` : ': '));
    plugins.fancylog(plugins.fancylog.error('error Babel: ' + err.message + '\n'));
    plugins.fancylog(err.codeFrame);
    this.emit('end');
  }))
	.pipe(gulp.dest(paths.directories.jsCompiled))
});


// Watch tasks
gulp.task('watch', function() {
	// Watch for CSS treatment
	gulp.watch(paths.sass, gulp.series('css'));
});

gulp.task('check', function() {
    console.log('Hello');
});

// The default task (called when you run 'gulp' from cli)
gulp.task('default', gulp.series('watch'));

// Prod : Minification des CSS / JS, Compression des images, Upload FTP
gulp.task('optim', gulp.series('css-prod', 'css-min', 'babel', 'js-min', 'js-min-compiled', 'imagemin'));
