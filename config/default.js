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
        }]
      },
      'browserstack': {
        'username': null,
        'accesskey': null
      }
    }
  }
};
