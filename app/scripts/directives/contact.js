'use strict';

/**
 * @ngdoc directive
 * @name tumblrApp.directive:contact
 * @description
 * # contact
 */
angular.module('Tumblr.directives')
  .directive('contactPost', function () {
    return {
	      	require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
			restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
			template: 	[

							"<span href=\"#\" class=\"item\" ng-repeat=\"d in post.dialogue\">",
								"<strong>{{d.label}}</strong> {{d.phrase}}",
							"</span>"

						].join("")
			// templateUrl: "scripts/directives/feature.tmpl.html"
	    };
  });
