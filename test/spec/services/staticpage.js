'use strict';

describe('Service: staticPage', function () {

  // load the service's module
  beforeEach(module('tumblrApp'));

  // instantiate service
  var staticPage;
  beforeEach(inject(function (_staticPage_) {
    staticPage = _staticPage_;
  }));

  it('should do something', function () {
    expect(!!staticPage).toBe(true);
  });

});
