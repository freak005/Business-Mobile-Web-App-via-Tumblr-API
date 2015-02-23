'use strict';

describe('Directive: tumblrAudio', function () {

  // load the directive's module
  beforeEach(module('tumblrApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<tumblr-audio></tumblr-audio>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the tumblrAudio directive');
  }));
});
