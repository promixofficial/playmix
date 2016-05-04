module.exports = function(config) {
  config.set({
    hostname: process.env.IP,
    port: process.env.PORT,
    
    frameworks: ['jasmine'],
    browsers: ['PhantomJS'],
    
    files: [
      '../public/vendors/js/angular/angular.min.js',
      '../public/vendors/js/angular/angular-mock.js',
      '../public/vendors/**/*.js',
      
      '../public/js/scripts.js',
      
      './unit/**/*-spec.js'
    ],
    
    phantomjsLauncher: {
      // Have phantomjs exit if a ResourceError is encountered (useful if karma exits without killing phantom)
      exitOnResourceError: true
    }
  })
}