'use strict';

/**
 * @ngdoc directive
 * @name tumblrApp.directive:tumblrVideo
 * @description
 * # tumblrVideo
 */
angular.module('Tumblr.directives')
  .directive('tumblrAudio', function ($timeout) {
    return {
      templateUrl: 'templates/directives/tumblr-audio.tmpl.html',
      restrict: 'E',
      controller: function($scope, $sce, $element, $attrs, $transclude) {
      	$scope.trustSource = function(source) {
      		return $sce.trustAsHtml(source);
      	}

      },
      link: function postLink(scope, element, attrs) {
       	$timeout(function(){
       	});
      }
    };
  });
