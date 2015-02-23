'use strict';

/**
 * @ngdoc directive
 * @name tumblrApp.directive:tumblrQuote
 * @description
 * # tumblrQuote
 */
angular.module('Tumblr.directives')
  .directive('tumblrLink', function () {
    return {
		require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		restrict: 'EA', // E = Element, A = Attribute, C = Class, M = Comment
		// template: '',
		templateUrl: "templates/directives/tumblr-link.tmpl.html",
		link: function postLink(scope, element, attrs) {}
    };
  });
