'use strict'

// Using gulp to watch files and restart node if there are changes.

const gulp = require('gulp'),
	  gutil = require('gulp-util'),
	  spawn = require('child_process').spawn,
	  paths = {
	  	src: 'src'
	  }

let node = null

gulp.task( 'server', () => {
    if ( node ) node.kill()
    node = spawn( 'node', [paths.src + '/index.js'], { stdio: 'inherit' } )
    node.on( 'close', code => {
        if ( code === 8 )
            gutil.log( gutil.colors.red( 'Error detected, waiting for changes...' ) )
    })
})

gulp.task( 'watch', ['server'], () => {
    gulp.watch( './**/*.js', ['server'] )
    //gulp.watch( './**/*.json', ['server'] )
})

gulp.task( 'default', ['watch'] )

process.on( 'exit', () => {
    if ( node ) node.kill()
})
