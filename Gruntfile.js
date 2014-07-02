/* global module:false */
module.exports = function(grunt) {
	var port = grunt.option('port') || 8000;
	// Project configuration
	grunt.initConfig({
		connect: {
			server: {
				options: {
					port: port,
					base: '.'
				}
			}
		},

		watch: {
			main: {
				files: [ 'index.html' ],
				tasks: 'default'
			}
		}

	});

	// Dependencies
	grunt.loadNpmTasks( 'grunt-contrib-watch' );
	grunt.loadNpmTasks( 'grunt-contrib-connect' );

	// Default task
	grunt.registerTask( 'default', [ 'jshint', 'cssmin', 'uglify', 'qunit' ] );

	// Serve presentation locally
	grunt.registerTask( 'serve', [ 'connect', 'watch' ] );

};
