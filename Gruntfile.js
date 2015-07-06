/**
 * Grunt project configuration.
 */
module.exports = function(grunt) {
    // configuration for the plugins.
    grunt.initConfig({
        typescript: {
            "dist" : {
                options: {
                    module : 'commonjs',
                    sourceMap: true,
                    declaration: true
                },
                files: [{
                    dest: "lib/",
                    src: [
                        "src/main/core/*.ts",
                        "src/main/core/*.d.ts"
                    ]
                }]
            }
        }
    });

    // load NPM tasks:
    grunt.loadNpmTasks('grunt-typescript');

    // register our tasks:
    grunt.registerTask('default', ['typescript:dist']);
};
