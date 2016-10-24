var baseConfig = {
    name: 'lens',
    tmp: '.tmp',
    dev: 'dev',
    build: 'build'
};

module.exports = {
    dir: baseConfig,

    watch: {
        dir: [
            baseConfig.dev+'/**/*',
            '!'+baseConfig.dev+'gulp/**/*',
            '!'+baseConfig.dev+'ejs/**/*',
            '!'+baseConfig.dev+'sass/**/*'
        ],
        ejs: 'dev/ejs/**/*.ejs'
    },

    del: {
        dir: [
            baseConfig.tmp,
            baseConfig.build
        ],
        tmp_dir: [
            baseConfig.tmp+'/**/images/**/*',
            baseConfig.tmp+'/**/lib/**/*',
            baseConfig.tmp+'/**/js/**/*'
        ]
    },

    copy: {
        dir: [
            baseConfig.dev+'/**/images/**/*',
            baseConfig.dev+'/**/lib/**/*',
            baseConfig.dev+'/**/js/**/*'
        ],
        b_dir: [
            baseConfig.dev+'/**/lib/**/*',
            baseConfig.dev+'/**/js/**/*'
        ]
    },

    ejs: {
        src: ["dev/ejs/**/*.ejs",'!' + "dev/ejs/**/_*.ejs"]
    },

    sass: {
        src: ['dev/sass/**/*.scss']
    },

    lib: {
        sass: ['dev/'+baseConfig.name+'/**/*.scss'],
        js: ['dev/'+baseConfig.name+'/**/*.js']
    },

    imagemin: {
        src: baseConfig.dev+"/**/images/**/*.{png,jpg,jpeg,gif,svg}"
    }
};