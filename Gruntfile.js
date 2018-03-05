
'use strict';

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        watch: {
            js: {
                files: 'src/**/*.js',
                tasks: ['browserify']
            },
            css: {
                files: 'src/css/**/*.css',
                tasks: ['copy']
            }
        },

        browserify: {
            dist: {
                files: {
                    'build/js/main.js': ['.build/main.js']
                },
                options: {
                    transform: ["reactify"]
                }
            }
        },

        copy: {
            dist: {
                files: [
                    {expand: true, cwd: 'src/html/', src: ['**'], dest: './build/'},
                    {expand: true, cwd: 'src/css/', src: ['**'], dest: './build/css/'},
                    {expand: true, cwd: 'bower_components/bootstrap/dist/css', src: ['**'], dest: './build/css'}
                ]
            }
        }
    });

    grunt.registerTask('default', ['copy', 'browserify', 'watch']);
    grunt.registerTask('build', ['browserify', 'copy'])

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-browserify');
};