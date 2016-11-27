module.exports = function(grunt) {

    grunt.initConfig({
        sources: 'bower_components/',
        concat: {
            options: {
                separator: ';\n',
            },
            js: {
                src: [
                    '<%= sources %>/angular/angular.min.js',
                    '<%= sources %>/angular-animate/angular-animate.min.js',
                    '<%= sources %>/angular-aria/angular-aria.min.js',
                    '<%= sources %>/angular-material/angular-material.min.js',
                    '<%= sources %>/angular-messages/angular-messages.min.js',
                    '<%= sources %>/angular-filter/dist/angular-filter.min.js',
                    '<%= sources %>/underscore/underscore-min.js'
                ],
                dest: 'assets/libs/bundle.js'
            },
            css: {
                src: [
                    '<%= sources %>/angular-material/angular-material.min.css'
                ],
                dest: 'assets/libs/bundle.css'
            }
        },
        sass: {
            target: {
                files: {
                    'assets/css/main.css': 'assets//scss/main.scss'
                }
            }
        },
        watch: {
            sass: {
                files: ['assets/scss/**/*.scss'],
                tasks: ['sass'],
                options: {
                    spawn: false
                },
            },
        },
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.registerTask('default', [ 'concat' ]);

};
