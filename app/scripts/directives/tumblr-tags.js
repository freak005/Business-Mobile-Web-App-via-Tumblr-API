'use strict';

/**
 * @ngdoc directive
 * @name tumblrApp.directive:tumblrTags
 * @description
 * # tumblrTags
 */
angular.module('Tumblr.directives')
  .directive('tumblrTags', function () {
    return {
      	require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		restrict: 'EA', // E = Element, A = Attribute, C = Class, M = Comment
		template: '<p class="padding-top"><small class="padding-right" ng-repeat="tag in post.tags" ng-if="tag != \'blog\'">#{{tag}}</small></p>',
		link: function postLink(scope, element, attrs) {
		}
    };
  });
