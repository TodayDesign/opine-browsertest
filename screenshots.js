var gutil = require('gulp-util');
var gulp = require('gulp');
var PluginError = gutil.PluginError;
var BrowserStack = require('browserstack');
var es = require('event-stream');
var download = require('gulp-download-stream');

function waitForJobDone(screenshotClient, job, waitForJobDoneCallback) {

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
        waitForJobDoneCallback(jobStatus);
      }
    });
  };

  setTimeout(waitLoop, timeout);
}

function takeScreenshot(urlToShot, options, capabilities, callback) {
  var completedCallback = callback;
  var fullUrlToShot = options.base + urlToShot;

  gutil.log('Screenshotting', fullUrlToShot);

  var browserStackCredentials = {
    username: process.env.BROWSERSTACK_USERNAME,
    password: process.env.BROWSERSTACK_ACCESS_KEY
  };

  var screenshotClient = BrowserStack
      .createScreenshotClient(browserStackCredentials);

  // generate the screenshot
  screenshotClient.generateScreenshots({
    url: fullUrlToShot,
    browsers: capabilities
  }, function(error, job) {

    if (error) {
      gutil.log('Somethign went wrong for', gutil.colors.red(fullUrlToShot));
      throw new PluginError('browsertest-screenshots', error);
    }

    // loop for `wait_time` to see if the screenshot is ready
    waitForJobDone(screenshotClient, job, function(result) {
      // now I need to download every single image and pipe it
      // console.log(result);
      completedCallback(null, result);
    });

  });
}

function screenshot(options, capabilities) {

  if (!options) {
    throw new PluginError('browsertest-screenshots', 'Missing options!');
  }

  if (!capabilities) {
    throw new PluginError('browsertest-screenshots', 'Missing capabilities!');
  }

  var urlList = options.urls;

  return es.readArray(urlList).pipe(
    es.map(function(urlToShot, screenCallback) {
      takeScreenshot(urlToShot, options, capabilities, screenCallback);
    })
  ).pipe(
    es.map(function(result, parseCallback) {
      var toDownload = {
        job: result,
        urls: []
      };
      // need to pipe these bad boys for download
      for (var i = 0; i < result.screenshots.length; i++) {
        toDownload.urls.push(result.screenshots[i].thumb_url);
        toDownload.urls.push(result.screenshots[i].image_url);
      }
      parseCallback(null, toDownload);
    })
  ).pipe(
    es.map(function(data, downloadCallback) {
      var jobId = data.job.id;
      var stream = download(data.urls)
        .pipe(gulp.dest(options.output + '/' + jobId));
      stream.on('finish', downloadCallback);
    })
  );
}

module.exports = screenshot;
