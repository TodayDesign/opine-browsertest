module.exports = {
  'opine': {
    'browsertest': {
      'wdio': {
        baseUrl: 'http://www.studiothick.com',
        outputPath: ['./test/output'],
        screenshotPath: './test/output/screenshots',
        'capabilities': [{
          'browserName': 'ie9',
          'browser' : 'ie',
          'browser_version' : '9.0',
          'os' : 'Windows',
          'os_version' : '7',
          'browserstack.debug': 'true'
        },{
          'browserName': 'ie10',
          'os': 'Windows',
          'os_version' : '7',
          'browser' : 'ie',
          'browser_version': '10',
          'browserstack.debug': 'true'
        },{
          'browserName': 'ie11',
          'os': 'Windows',
          'os_version' : '10',
          'browser' : 'ie',
          'browser_version' : '11.0',
          'browserstack.debug': 'true'
        },{
          'browserName': 'edge',
          'browser' : 'edge',
          'browser_version' : '13.0',
          'os' : 'Windows',
          'os_version' : '10',
          'browserstack.debug': 'true'
        },{
          'browserName' : 'firefox',
          'browser' : 'firefox',
          'os' : 'Windows',
          'os_version' : '10',
          'browserstack.debug': 'true'
        },{
          'browserName' : 'chrome',
          'browser' : 'chrome',
          'os' : 'Windows',
          'os_version' : '10',
          'browserstack.debug': 'true'
        },{
          'browserName' : 'chrome-mac',
          'browser' : 'chrome',
          'os' : 'OS X',
          'os_version' : 'El Capitan',
          'browserstack.debug': 'true'
        },{
          'browserName' : 'firefox-mac',
          'browser' : 'firefox',
          'os' : 'OS X',
          'os_version' : 'El Capitan',
          'browserstack.debug': 'true'
        },{
          'browserName' : 'safari',
          'browser' : 'safari',
          'os' : 'OS X',
          'os_version' : 'El Capitan',
          'browserstack.debug': 'true'
        },{
          'browserName' : 'iPhone5',
          'os' : 'ios',
          'device' : 'iPhone 5S',
          'browserstack.debug': 'true'
        },{
          'browserName' : 'iPhone6',
          'os' : 'ios',
          'device' : 'iPhone 6S',
          'browserstack.debug': 'true'
        },{
          'browserName' : 'iPad',
          'os' : 'ios',
          'device' : 'iPad Pro',
          'browserstack.debug': 'true'
        },{
          'browserName' : 'android',
          'os' : 'android',
          'device' : 'Google Nexus 5',
          'browserstack.debug': 'true'
        },{
          'browserName' : 'android-tablet',
          'os' : 'android',
          'device' : 'Samsung Galaxy Tab 4 10.1',
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
