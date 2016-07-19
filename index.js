var gulp = require('gulp');
var opine = require('gulp-opine');
var gutil = require('gulp-util');
var webdriver = require('gulp-webdriver');
var del = require('del');
var module = opine.module('browsertest');

module.task(function() {

  gutil.log('Loading browsers stack access details');

  var browserstackConfig = module.getConfig('browserstack', {
    'username': process.env.BROWSERSTACK_USERNAME,
    'accesskey': process.env.BROWSERSTACK_ACCESS_KEY
  });

  process.env.BROWSERSTACK_USERNAME = browserstackConfig.username;
  process.env.BROWSERSTACK_ACCESS_KEY = browserstackConfig.accesskey;

  gutil.log('Loading browsers capabilities');

  var wdioConfig = module.getConfig('wdio', {});
  process.env.WDIO_CAPABILITIES = JSON.stringify(wdioConfig.capabilities);

  gutil.log(
    'Usgin browsersstack user',
    gutil.colors.magenta(browserstackConfig.username)
  );

  gutil.log('Clean output folder');
  del.sync(module.getConfig('outputPath', './test/output'));

  return gulp.src('wdio.conf.js').pipe(webdriver(wdioConfig));

});
