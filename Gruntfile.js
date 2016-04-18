module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jade: {
      compile: {
        options: {
          data: {
            debug: false,
            hotels: grunt.file.readJSON('hotels.json'),
            conf_info: grunt.file.readJSON('conf-info.json'),
            agenda: grunt.file.readJSON('agenda-final.json'),
            news: grunt.file.readJSON('news.json')
          }
        },
        files: {
          'dist/index.html': ['pug/pages/index.pug'],
          'dist/news/index.html': ['pug/pages/news.pug'],
          'dist/hotels.html': ['pug/pages/hotels.pug'],
          'dist/support.html': ['pug/pages/support.pug'],
          'dist/index2.html': ['pug/pages/index2.pug']
        }
      }
    },

    stylus: {
      compile: {
        options: {
          paths: ['styl'], // source files folder
          urlfunc: 'url', // dataURI
          'include css': true
        },
        files: {
          'dist/index.css': 'styl/index.styl'
        }
      }
    },

    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['js/jquery.js', 'js/app.js'],
        dest: 'dist/app.js'
      }
    },

    uglify: {
      my_target: {
        files: {
          'dist/app.js': ['dist/app.js']
        }
      }
    },

    watch: {
      src: {
        files: ['pug/**/**.pug', 'pug/**/**.jade', 'styl/*.styl', 'js/*.js'],
        tasks: ['build']
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('build', ['jade:compile', 'stylus:compile', 'concat:dist']);
  // grunt.registerTask('deploy', ['jade:compile', 'stylus:compile', 'concat:dist', 'uglify:my_target', 's3:upload']);

};