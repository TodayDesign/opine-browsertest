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
          'browser_version': '10.0',
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
          'browser_version': '45.0',
          'os' : 'Windows',
          'os_version' : '10',
          'browserstack.debug': 'true'
        },{
          'browserName' : 'chrome',
          'browser' : 'chrome',
          'browser_version': '50.0',
          'os' : 'Windows',
          'os_version' : '10',
          'browserstack.debug': 'true'
        },{
          'browserName' : 'chrome-mac',
          'browser' : 'chrome',
          'browser_version': '50.0',
          'os' : 'OS X',
          'os_version' : 'El Capitan',
          'browserstack.debug': 'true'
        },{
          'browserName' : 'firefox-mac',
          'browser' : 'firefox',
          'browser_version': '45.0',
          'os' : 'OS X',
          'os_version' : 'El Capitan',
          'browserstack.debug': 'true'
        },{
          'browserName' : 'safari',
          'browser' : 'safari',
          'browser_version': '9.1',
          'os' : 'OS X',
          'os_version' : 'El Capitan',
          'browserstack.debug': 'true'
        },{
          'browserName' : 'iPhone5',
          'os' : 'ios',
          'os_version': '7.0',
          'device' : 'iPhone 5S',
          'browserstack.debug': 'true'
        },{
          'browserName' : 'iPhone6',
          'os' : 'ios',
          'os_version': '8.3',
          'device' : 'iPhone 6',
          'browserstack.debug': 'true'
        },{
          'browserName' : 'iPad',
          'os' : 'ios',
          'os_version': '8.3',
          'device' : 'iPad Air',
          'browserstack.debug': 'true'
        },{
          'browserName' : 'android',
          'os' : 'android',
          'os_version': '5.0',
          'device' : 'Google Nexus 5',
          'browserstack.debug': 'true'
        },{
          'browserName' : 'android-tablet',
          'os' : 'android',
          'os_version': '4.4',
          'device' : 'Samsung Galaxy Tab 4 10.1',
          'browserstack.debug': 'true'
        }]
      },
      'browserstack': {
        'username': null,
        'accesskey': null
      },
      'screenshots': {
        'base': null,
        'urls': []
      }
    }
  }
};
