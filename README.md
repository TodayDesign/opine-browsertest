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

### screenshots

The screenshot task needs some extra configuration.

    'screenshots': {
        'output': './test/output/screenshots',
        'base': 'http://www.google.com',
        'urls': [
          '/',
          '/intl/en/policies/privacy'
        ]
    }

The `base` parameter is not required, if omitted the urls in the list must be "full" URIs

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

- `browsertest`: it executes all the tests on all the capabilities.

- `browsertest-screenshots`: it creates screenshots of specified urls.

For both tasks it's possible to run on a single capability specifying a
`--cap` paramater with the name of the capability. e.g. `gulp browsertest --cap android`

## Fu(ea)ture(s)

- Selected capabilities: `gulp browsertest --cap ie9 ie10 firefox`
- Selected pages: `gulp browsertest --page home landing`
- Selected tests: `gulp browsertest clickButton`

[opine]: <https://github.com/StudioThick/gulp-opine>
[webdriver]: <http://webdriver.io/>
[browserstack]: <https://www.browserstack.com>
