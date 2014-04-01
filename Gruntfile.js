// Generated by CoffeeScript 1.7.1
module.exports = function(grunt) {
  var fs, isModified;
  fs = require('fs');
  isModified = function(filepath) {
    var modified, now;
    now = new Date();
    modified = fs.statSync(filepath).mtime;
    return (now - modified) < 10000;
  };
  grunt.initConfig({
    coffee: {
      options: {
        sourceMap: true,
        bare: true,
        force: true
      },
      all: {
        expand: true,
        cwd: 'Scripts/coffee',
        src: '**/*.coffee',
        dest: 'js/compiled',
        ext: '.js'
      },
      modified: {
        expand: true,
        cwd: 'Scripts/coffee/',
        src: '**/*.coffee',
        dest: 'js/compiled',
        ext: '.js',
        filter: isModified
      }
    },
    coffeelint: {
      options: {
        force: true
      },
      all: {
        expand: true,
        cwd: 'Scripts/coffee/',
        src: '**/*.coffee'
      },
      modified: {
        expand: true,
        cwd: 'Scripts/coffee/',
        src: '**/*.coffee',
        filter: isModified
      }
    },
    watch: {
      coffeescript: {
        files: ['Scripts/**/*.coffee'],
        tasks: ['coffeelint:modified', 'coffee:modified']
      }
    },
    connect: {
      server: {
        options: {
          port: 9001,
          base: '.'
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-coffeelint');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.registerTask('default', ['coffeelint:all', 'coffee:all', 'watch']);
  return grunt.registerTask('server', ['connect:server:keepalive']);
};