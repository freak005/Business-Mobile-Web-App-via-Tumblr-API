'use strict';

/**
 * @ngdoc directive
 * @name tumblrApp.directive:tumblrVideo
 * @description
 * # tumblrVideo
 */
angular.module('Tumblr.directives')
  .directive('tumblrVideo', function ($timeout) {
    return {
      templateUrl: 'templates/directives/tumblr-video.tmpl.html',
      restrict: 'E',
      controller: function($scope, $sce, $element, $attrs, $transclude) {
      	$scope.trustSource = function(source) {
      		return $sce.trustAsResourceUrl(source);
      	}

      },
      link: function postLink(scope, element, attrs) {
       	$timeout(function(){
       		$('video, audio').mediaelementplayer(/* Options */);
       	});
      }
    };
  });
