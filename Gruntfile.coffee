module.exports = (grunt) ->
  fs = require 'fs'
  isModified = (filepath) ->
    now = new Date()
    modified =  fs.statSync(filepath).mtime
    return (now - modified) < 10000

  grunt.initConfig

    coffee:
      options:
        sourceMap: true
        bare: true
        force: true # needs to be added to the plugin
      all:
        expand: true
        cwd: 'Scripts/coffee'
        src: '**/*.coffee'
        dest: 'js/compiled'
        ext: '.js'
      modified:
        expand: true
        cwd: 'Scripts/coffee/'
        src: '**/*.coffee'
        dest: 'js/compiled'
        ext: '.js'
        filter: isModified

    coffeelint:
      options:
        force: true
      all:
        expand: true
        cwd: 'Scripts/coffee/'
        src: '**/*.coffee'
      modified:
        expand: true
        cwd: 'Scripts/coffee/'
        src: '**/*.coffee'
        filter: isModified

    watch:
      coffeescript:
        files: ['Scripts/**/*.coffee']
        tasks: ['coffeelint:modified', 'coffee:modified']

    connect:
      server:
        options: 
          port: 9001
          base: '.'

  grunt.loadNpmTasks 'grunt-coffeelint'
  grunt.loadNpmTasks 'grunt-contrib-coffee'
  grunt.loadNpmTasks 'grunt-contrib-watch'
  grunt.loadNpmTasks 'grunt-contrib-connect'

  grunt.registerTask 'default', ['coffeelint:all', 'coffee:all', 'watch']
  grunt.registerTask 'server', ['connect:server:keepalive']