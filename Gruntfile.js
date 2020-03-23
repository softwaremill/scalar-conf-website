module.exports = function(grunt) {

  var marked = require('marked');
  var renderer = new marked.Renderer();
  var execSync = require('child_process').execSync;
  renderer.code = function(code, lexer) {
    if(!lexer) lexer = 'text';
    var result = execSync("pygmentize -l " + lexer + " -f html", { input: code });
    return result.toString();
  }

  marked.setOptions({
    renderer: renderer
  });
    

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    pug: {
      compile: {
        options: {
          data: {
            debug: false
          }
        },
        files: {
          'dist/index.html': ['pug/index.pug'],
          'dist/news.html': ['pug/news.pug'],
          'dist/blog.html': ['pug/blog.pug'],
          'dist/hotels.html': ['pug/hotels.pug'],
          'dist/support.html': ['pug/support.pug'],
          'dist/events-2020.html': ['pug/events-2020.pug'],
          'dist/2020-workshop.html': ['pug/2020-workshop.pug']
        },
        filters: {
          marked: marked
        }
      }
    },

    stylus: {
      compile: {
        options: {
          paths: ['styl'], // folder, where files to be imported are located
          urlfunc: 'url', // use embedurl('test.png') in our code to trigger Data URI embedding
          'include css': true
        },
        files: {
          'dist/index.css': 'styl/index.styl' // 1:1 compile
        }
      }
    },

    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['js/vendor/jquery.js', 'js/app.js'],
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
        files: ['pug/*.jade', 'pug/*.pug', 'pug/news-posts/*.jade', 'pug/blog-posts/*.jade', 'styl/*.styl', 'js/*.js'],
        tasks: ['build']
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-pug');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('build', ['pug:compile', 'stylus:compile', 'concat:dist']);
  // grunt.registerTask('deploy', ['jade:compile', 'stylus:compile', 'concat:dist', 'uglify:my_target', 's3:upload']);

};
