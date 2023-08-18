export default function(config) {
  config.set({
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('@angular-devkit/build-angular/plugins/karma'),
      require('karma-coverage'),  // Agrega el plugin de cobertura
      require('karma-istanbul-reporter') // Agrega el plugin de informe de cobertura
    ],
    // ... otras configuraciones ...

    reporters: ['progress', 'coverage', 'istanbul'], // Agrega los reporteros

    coverageReporter: {
      type: 'html',
      dir: 'coverage/',
      reporters: [
        { type: 'html', subdir: 'html' },
        { type: 'lcov', subdir: 'lcov' },
      ],
    },

    istanbulReporter: {
      reports: ['html'],
    },

    // ... más configuraciones ...
  });
};
