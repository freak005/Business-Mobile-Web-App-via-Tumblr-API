'use strict';

describe('Directive: feature', function () {

  // load the directive's module
  beforeEach(module('tumblrApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<feature></feature>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the feature directive');
  }));
});
