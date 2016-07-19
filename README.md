# opine-browsertest

A [gulp-opine] [opine] module for browser automated testing with
[Webdriver.io] [webdriver] and [BrowserStack] [browserstack]

## configuration

The only required configuration are browser stack username and access key, and the base url.
Ideally the configuration should be in a `local.js` file in the config folder.

    module.exports = {
      'opine': {
        'browsertest': {
          'wdio': {
            baseUrl: 'http://www.studiothick.com'
          },
          'browserstack': {
            'username': 'username',
            'accesskey': 'key'
          }
        }
      }
    };

### capabilities

the default configuration has the following capabilities:

- desktop: ie9, ie10, ie11, edge, chrome, chrome-mac, firefox, firefox-mac, safari

- mobile: iPhone5, iPhone6, iPad, android, android-tablet

It's possible to override the default capabilities via config, like below

    module.exports = {
      'opine': {
        'browsertest': {
          'wdio': {
            baseUrl: 'http://www.studiothick.com',
            outputPath: ['./test/output'],
            screenshotPath: './test/output/screenshots',
            'capabilities': [...]

Capabilities settings for BrowserStack can be found at

[https://www.browserstack.com/automate/capabilities](https://www.browserstack.com/automate/capabilities)

## tasks

- `browsertest`: it executes all the tests on all the capabilities. It's possible
to run on a single capability specifying a `--cap` paramater with the name of the
capability. e.g. `gulp browsertest --cap android`

[opine]: <https://github.com/StudioThick/gulp-opine>
[webdriver]: <http://webdriver.io/>
[browserstack]: <https://www.browserstack.com>
