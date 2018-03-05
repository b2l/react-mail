
'use strict';

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        watch: {
            dist: {
                files: 'src/**/*.js',
                tasks: ['browserify']
            }
        },

        browserify: {
            dist: {
                files: {
                    'build/main.js': ['src/main.js']
                },
                options: {
                    transform: ['reactify']
                }
            }
        }
    });

    grunt.registerTask('default', ['browserify', 'watch']);

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browserify');
};