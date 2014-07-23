module.exports = function(grunt) {

    var cssFilesToInject = [
      "assets/css/style.css",

      "assets/js/skin-select/skin-select.css",
      "assets/css/font-awesome.css",
      "assets/css/entypo-icon.css",
      "assets/css/maki-icons.css",
      "assets/css/weather-icons.min.css",
      "assets/css/dripicon.css",
      "assets/css/open-sans.css",
      "assets/js/pnotify/jquery.pnotify.default.css",
      "assets/js/tip/tooltipster.css",
      "assets/js/pace/themes/pace-theme-center-simple.css",
      "assets/js/slidebars/slidebars.css",
      "assets/js/gage/jquery.easy-pie-chart.css",

      "assets/css/bootstrap-3.2.css",

      //page specifics...?
      // "assets/js/progress-bar/number-pb.css", //index
      // "assets/css/signin.css" //login
      // 'assets/**/*.css'
    ];
    // cssFilesToInject = cssFilesToInject.map(function (path) {
    //   return path;
    // });
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      concat: {
        // js: {
        //   src: jsFilesToInject,
        //   dest: '.tmp/public/concat/production.js'
        // },
        css: {
          src: cssFilesToInject,
          dest: 'assets/css/apricot.css',
          separator: ';'
        }
      },
      cssmin: {
        dist: {
          src: ['assets/css/apricot.css'],
          dest: 'assets/css/apricot.min.css'
        }
      }

    });

    // grunt.loadNpmTasks('grunt-contrib-uglify');
    // grunt.loadNpmTasks('grunt-contrib-jshint');
    // grunt.loadNpmTasks('grunt-contrib-qunit');
    // grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // grunt.registerTask('test', ['jshint', 'qunit']);

    grunt.registerTask('default', ['concat']);
    grunt.registerTask('compile', ['concat','cssmin']);
}