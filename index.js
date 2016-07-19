var gulp = require('gulp');
var opine = require('gulp-opine');
var gutil = require('gulp-util');
var webdriver = require('gulp-webdriver');
var del = require('del');
var module = opine.module('browsertest');
var minimist = require('minimist');
var screenshots = require('./screenshots');

var knownOptions = {
  string: 'cap',
  default: { cap: null }
};

var options = minimist(process.argv.slice(2), knownOptions);
var wdioConfig = module.getConfig('wdio', {});

function loadBrowserstackAuthDetails() {
  gutil.log('Loading browsers stack access details');

  var browserstackConfig = module.getConfig('browserstack', {
    'username': process.env.BROWSERSTACK_USERNAME,
    'accesskey': process.env.BROWSERSTACK_ACCESS_KEY
  });

  process.env.BROWSERSTACK_USERNAME = browserstackConfig.username;
  process.env.BROWSERSTACK_ACCESS_KEY = browserstackConfig.accesskey;
}

function loadCapabities() {
  gutil.log('Loading browsers capabilities');

  var capabilities = wdioConfig.capabilities;
  if(options.cap) {
    // leave in capabilitied only selected
    capabilities = capabilities.filter(function(obj){
      return obj.browserName.toLowerCase() === options.cap.toLowerCase();
    });
  }

  if(capabilities.length === 0) {
    throw new gutil.PluginError({
      plugin: 'browsertest',
      message: 'Capability "' + options.cap + '" not found'
    });
  }

  process.env.WDIO_CAPABILITIES = JSON.stringify(capabilities);
  return capabilities;
}

module.task(function() {

  gutil.log('Sit back and relax...');

  loadBrowserstackAuthDetails();
  loadCapabities();

  gutil.log(
    'Usgin browsersstack user',
    gutil.colors.magenta(browserstackConfig.username)
  );

  gutil.log('Clean output folder');
  del.sync(module.getConfig('outputPath', './test/output'));

  return gulp.src('wdio.conf.js').pipe(webdriver(wdioConfig));

});

// It integrates with screenshots api. It creates amazing screenshots
// full page with no extra coding
gulp.task('browsertest-screenshots', function() {

  loadBrowserstackAuthDetails();

  gutil.log('Clean output folder');
  del.sync(module.getConfig('outputPath', './test/output'));

  return screenshots(
    module.getConfig('screenshots', {
      'base': null,
      'urls': []
    }),
    loadCapabities()
  );

});
