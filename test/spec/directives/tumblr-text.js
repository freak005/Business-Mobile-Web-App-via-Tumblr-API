'use strict';

describe('Directive: tumblrText', function () {

  // load the directive's module
  beforeEach(module('tumblrApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<tumblr-text></tumblr-text>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the tumblrText directive');
  }));
});
