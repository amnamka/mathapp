module.exports = function(grunt) {

    grunt.initConfig({
        less: {
            development: {
                options: {
                    yuicompress: true
                },
                files: [{
                        //{"./public/stylesheets/base.css": "./less/base.less"}
                        expand: true,
                        cwd: './less',
                        src: ['{,*/}*.less', 'bower_components/**/*.less'],
                        dest: './public/stylesheets',
                        ext: '.css'
                }]
            }
        },

        coffee: {
            dist: {
                files: [{
                    cwd: './lib',
                    src: ['{,*/}*.coffee'],
                    dest: './public/javascript',
                    ext: '.js',
                    expand: true
                }]
            }
        },

        watch: {
            styles: {
                // all .less files recursively in the less directory
                files: ['less/**/*.less'],
                tasks: ['less'],
                options: {
                    nospawn: true
                }
            },
            scripts: {
                files: ['lib/**/*.coffee'],
                tasks: ['coffee']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks("grunt-contrib-jade");

    grunt.registerTask('default', ['watch']);
};