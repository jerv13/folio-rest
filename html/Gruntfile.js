module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig(
        {
            pkg: grunt.file.readJSON('package.json'),
            uglify: {
                dist: {
                    options: {
                        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
                        mangle: false,
                        sourceMap: true
                    },
                    files: {
                        'js/scripts.min.js': [
                            'public/biz/index.js',
                            'public/biz/about/module.js',
                            'public/biz/contact/module.js',
                            'public/biz/nav/module.js',
                            'public/biz/overview/module.js',
                            'public/biz/resources/module.js',
                            'public/biz/resources/skills.js'
                        ]
                    }
                }
            },
            concat: {
                options: {},
                dist: {
                    files: {
                        'js/scripts.js': [
                            'public/biz/index.js',
                            'public/biz/about/module.js',
                            'public/biz/contact/module.js',
                            'public/biz/nav/module.js',
                            'public/biz/overview/module.js',
                            'public/biz/resources/module.js',
                            'public/biz/resources/skills.js'
                        ]
                    }
                }
            },
            less: {
                development: {
                    options: {
                        paths: ["assets/css"]
                    },
                    files: {
                        "public/biz/css/test.css": [
                            "public/biz/_less/base.less",
                            "public/biz/_less/page.less",
                            "public/biz/_less/styles.less"
                        ]
                    }
                },
                production: {
                    options: {
                        paths: ["assets/css"],
                        plugins: [
                            new (require('less-plugin-autoprefix'))({browsers: ["last 2 versions"]}),
                            new (require('less-plugin-clean-css'))(cleanCssOptions)
                        ],
                        modifyVars: {
                            bizImgPath: '"/biz/images"'
                        }
                    },
                    files: {
                        "public/biz/css/test.css": [
                            "public/biz/_less/base.less",
                            "public/biz/_less/page.less",
                            "public/biz/_less/styles.less"
                        ]
                    }
                }
            }
        }
    );

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-less');

    // Default task(s).
    grunt.registerTask('default', ['uglify', 'copy', 'concat', 'less']);
};
