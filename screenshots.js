var gutil = require('gulp-util');
var PluginError = gutil.PluginError;
var BrowserStack = require('browserstack');
var es = require('event-stream');
var File = require('vinyl');
var request = require('request');
var through2 = require('through2');

function waitForJobDone(screenshotClient, job, callback) {

  var timeout = job.wait_time * 1000;

  var waitLoop = function() {
    screenshotClient.getJob(job.job_id, function(error, jobStatus){
      if (error) {
        throw new PluginError('browsertest-screenshots', error);
      }
      gutil.log('Job', job.job_id, 'state', jobStatus.state);
      if(jobStatus.state !== 'done') {
        setTimeout(waitLoop, timeout);
      } else {
        callback(jobStatus);
      }
    });
  };

  setTimeout(waitLoop, timeout);
}

function screenshot(options, capabilities) {

  if (!options) {
    throw new PluginError('browsertest-screenshots', 'Missing options!');
  }

  if (!capabilities) {
    throw new PluginError('browsertest-screenshots', 'Missing capabilities!');
  }

  var browserStackCredentials = {
    username: process.env.BROWSERSTACK_USERNAME,
    password: process.env.BROWSERSTACK_ACCESS_KEY
  };

  var urls = options.urls;

  return es
    .readArray(urls)
    .pipe(
      es.map(
        function(data, cb) {
          var url = options.base + data;

          gutil.log('Screenshotting', url);

          var screenshotClient = BrowserStack
            .createScreenshotClient(browserStackCredentials);

          // generate the screenshot
          screenshotClient.generateScreenshots({
            url: url,
            browsers: capabilities
          }, function(error, job) {

            if (error) {
              throw new PluginError('browsertest-screenshots', error);
            }

            // loop for `wait_time` to see if the screenshot is ready
            waitForJobDone(screenshotClient, job, function(result){


              // now I need to download every single image and pipe it
              console.log(result);
              cb(null, null);

            });

          });
        }
      )
    );
}

module.exports = screenshot;
