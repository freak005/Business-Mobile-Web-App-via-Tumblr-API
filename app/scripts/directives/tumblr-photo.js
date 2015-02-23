'use strict';

/**
 * @ngdoc directive
 * @name tumblrApp.directive:tumblrPhoto
 * @description
 * # tumblrPhoto
 */
angular.module('Tumblr.directives')
  .directive('tumblrPhoto', function () {
    return {
      template: '<photoset-grid ng-model="post" gutter="0px"></photoset-grid>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
      }
    };
  });
