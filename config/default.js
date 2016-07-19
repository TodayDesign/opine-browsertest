module.exports = {
  'opine': {
    'browsertest': {
      'wdio': {
        baseUrl: 'http://www.studiothick.com',
        outputPath: ['./test/output'],
        screenshotPath: './test/output/screenshots',
        'capabilities': [{
          'name': 'ie-windows',
          'platform' : 'WINDOWS',
          'browserName' : 'internet explorer',
          'browserstack.debug': 'true'
        }, {
          'name': 'firefox-windows',
          'platform' : 'WINDOWS',
          'browserName' : 'firefox',
          'browserstack.debug': 'true'
        }, {
          'name': 'chrome-windows',
          'platform' : 'WINDOWS',
          'browserName' : 'chrome',
          'browserstack.debug': 'true'
        }, {
          'name': 'firefox-mac',
          'platform' : 'MAC',
          'browserName' : 'firefox',
          'browserstack.debug': 'true'
        }, {
          'name': 'chrome-mac',
          'platform' : 'MAC',
          'browserName' : 'chrome',
          'browserstack.debug': 'true'
        }, {
          'name': 'safari-mac',
          'platform' : 'MAC',
          'browserName' : 'safari',
          'browserstack.debug': 'true'
        }, {
          'name': 'iPad',
          'platform' : 'MAC',
          'browserName' : 'iPad',
          'browserstack.debug': 'true'
        }, {
          'name': 'iPhone',
          'platform' : 'MAC',
          'browserName' : 'iPhone',
          'browserstack.debug': 'true'
        }, {
          'name': 'android',
          'platform' : 'ANDROID',
          'browserName' : 'android',
          'browserstack.debug': 'true'
        }]
      },
      'browserstack': {
        'username': null,
        'accesskey': null
      }
    }
  }
};
