var Stream = require('stream');
var gutil = require('gulp-util');
var PluginError = gutil.PluginError;

function screenshot(urls, capabilities) {

  if (!urls) {
    throw new PluginError(PLUGIN_NAME, 'Missing urls!');
  }

  if (!capabilities) {
    throw new PluginError(PLUGIN_NAME, 'Missing capabilities!');
  }

  var outputStream = new Stream();
  return outputStream;
}

module.exports = screenshot;
