module.exports = function(grunt) {
  grunt.initConfig({
    
    concat: {
      
      dist: {
        src: ['styles/variables.scss', 'styles/reset.scss', 'styles/mixins.scss', 'styles/style.scss'],
        dest: 'styles/main.scss'
      },
    },
      uglify: {
     dist:{
         src: ['js/dist/script.min.js'],
         dest:'js/dist/script.min.js'
     }
    },
      watch: {
    sass: {
     
      files: ['styles/*.scss'],
      tasks: ['concat','sass'],
    }},
      
    
    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: 'styles',
          src: ['main.scss'],
          dest: 'styles',
          ext: '.css'
        }]
      }
    }   
  });
    grunt.loadNpmTasks('grunt-contrib-concat');
     grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
  
  
  
 


 grunt.registerTask('default', [ 'concat', 'uglify', 'sass']);
};