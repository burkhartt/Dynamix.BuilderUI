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

    handlebars:
      compile:
        options:
          namespace: "Templates",
          processName: (filePath) ->
            pieces = filePath.split("/")
            fileName = pieces[pieces.length - 1]
            return fileName.substring(0, fileName.length - 4)
        files:
          "js/templates.js": ["Scripts/**/*.hbs"]

    uglify:
      options:
        mangle: false
      my_target:
        files:
          'js/dynamixui.min.js': ['js/compiled/*.js']
   

    watch:
      coffeescript:
        files: ['Scripts/**/*.coffee', 'Scripts/**/*.hbs']
        tasks: ['coffeelint:modified', 'coffee:modified', 'handlebars', 'uglify']

    connect:
      server:
        options: 
          port: 9001
          base: '.'

    

  grunt.loadNpmTasks 'grunt-coffeelint'
  grunt.loadNpmTasks 'grunt-contrib-coffee'
  grunt.loadNpmTasks 'grunt-contrib-watch'
  grunt.loadNpmTasks 'grunt-contrib-connect'
  grunt.loadNpmTasks 'grunt-contrib-handlebars'
  grunt.loadNpmTasks 'grunt-contrib-uglify'

  grunt.registerTask 'default', ['coffeelint:all', 'coffee:all', 'watch']
  grunt.registerTask 'server', ['connect:server:keepalive']