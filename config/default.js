module.exports = {
  'opine': {
    'browsertest': {
      'wdio': {
        baseUrl: 'http://www.studiothick.com',
        outputPath: ['./test/output'],
        screenshotPath: './test/output/screenshots',
        'capabilities': [{
          'browserName': 'ie',
          'os': 'Windows',
          'browser': 'IE',
          'version': '9',
          'browserstack.debug': 'true'
        },{
          'browserName': 'ie10',
          'os': 'Windows',
          'browser': 'IE',
          'version': '10',
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
