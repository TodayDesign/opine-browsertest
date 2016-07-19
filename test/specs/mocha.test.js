var assert = require('assert');

describe('studiothick.com page', function() {

  it('should have the right title', function () {

    var title = browser
      .url('/')
      .getTitle();

    assert.equal(
      title,
      'Thick | Service Design & UX Agency, Melbourne, Australia'
    );

  });

});
