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
                        'public/jfolio/js/scripts.min.js': [
                            'public/jfolio/_js/alerts.js',
                            'public/jfolio/_js/config.js',
                            'public/jfolio/_js/core.js',
                            'public/jfolio/_js/exception.js',
                            'public/jfolio/_js/http.js'
                        ],
                        'public/biz/js/scripts.min.js': [
                            'public/biz/_js/index.js',
                            'public/biz/_js/route.js',
                            'public/biz/about/module.js',
                            'public/biz/contact/module.js',
                            'public/biz/nav/module.js',
                            'public/biz/overview/module.js',
                            'public/biz/resources/module.js',
                            'public/biz/resume/module.js',
                            'public/biz/skills/module.js'
                        ]
                    }
                }
            },
            concat: {
                options: {},
                dist: {
                    files: {
                        'public/jfolio/js/scripts.js': [
                            'public/jfolio/_js/alerts.js',
                            'public/jfolio/_js/config.js',
                            'public/jfolio/_js/core.js',
                            'public/jfolio/_js/exception.js',
                            'public/jfolio/_js/http.js'
                        ],
                        'public/biz/js/scripts.js': [
                            'public/biz/_js/index.js',
                            'public/biz/_js/route.js',
                            'public/biz/about/module.js',
                            'public/biz/contact/module.js',
                            'public/biz/nav/module.js',
                            'public/biz/overview/module.js',
                            'public/biz/resources/module.js',
                            'public/biz/resume/module.js',
                            'public/biz/skills/module.js'
                        ]
                    }
                }
            },
            less: {
                development: {
                    options: {
                        compress: false,
                        yuicompress: false,
                        optimization: 2
                    },
                    files: {
                        "public/biz/css/styles.css": [
                            "public/biz/_less/styles.less"
                        ]
                    }
                },
                default: {
                    options: {
                        paths: ["assets/css"],
                        plugins: [
                            //new (require('less-plugin-autoprefix'))({browsers: ["last 2 versions"]}),
                            //new (require('less-plugin-clean-css'))(cleanCssOptions)
                        ],
                        modifyVars: {
                            bizImgPath: '"/biz/images"'
                        }
                    },
                    files: {
                        "public/biz/css/styles.css": [
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
    grunt.registerTask('default', ['uglify', 'concat', 'less']);
};
