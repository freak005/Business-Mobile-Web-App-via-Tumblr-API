'use strict';

/**
 * @ngdoc directive
 * @name tumblrApp.directive:tumblrText
 * @description
 * # tumblrText
 */
angular.module('Tumblr.directives')
  .directive('tumblrText', function () {
    return {
      // template: '<div></div>',
      templateUrl: "templates/directives/tumblr-text.tmpl.html",
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        // console.log(scope.post);
      }
    };
  });