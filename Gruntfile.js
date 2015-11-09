module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);

    // grunt.loadNpmTasks('grunt-babel');

    grunt.initConfig({

        babel: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'wip/dist/test1.js': 'wip/webgl-batched-point05.js'
                }
            }
        }

    });

    grunt.registerTask('build', ['babel']);
    grunt.registerTask('default', ['build']);

};
