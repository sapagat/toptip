var config = require('./config')

exports.config = {
  services: ['selenium-standalone'],
  specs: [
  './test/e2e/**/*.spec.js'
  ],

  maxInstances: 10,
  capabilities: [{
      maxInstances: 5,
      browserName: 'chrome',
      chromeOptions: {
        args: ['--headless']
      }
    }],
  sync: true,
  logLevel: 'info',
  coloredLogs: true,
  bail: 0,
  screenshotPath: './.tmp/errorShots/',
  baseUrl: 'http://localhost:' + (process.env.PORT || config.dev.port),
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  framework: 'mocha',
  mochaOpts:{
    ui: 'bdd'
  },
  reporters: ['spec']
}
