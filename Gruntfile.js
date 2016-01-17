module.exports = function(grunt) {

  grunt.config('browserify', {
    dist: {
      files: {
        './bundle.js': ['app.js']
      }
  	}
  });


  grunt.loadNpmTasks('grunt-browserify');

  grunt.registerTask('default', ['browserify']);

};