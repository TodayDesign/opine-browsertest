var gulp = require('gulp');
var opine = require('gulp-opine');
var gutil = require('gulp-util');
var module = opine.module('nightwatch');

module.task(function() {
  gutil.log('stuff happened', 'Really it did', gutil.colors.magenta('123'));
});
