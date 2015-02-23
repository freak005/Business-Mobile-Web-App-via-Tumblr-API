'use strict';

/**
 * @ngdoc directive
 * @name tumblrApp.directive:feature
 * @description
 * # feature
 */
angular.module('Tumblr.directives')
	.directive('featurePost', ['$rootScope', function(){
	    return {
	      	require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
			restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
			// template: 	["<div class=\"card\">",

			// 				"<div class=\"item item-divider\">",
			// 					"{{post.title}}",
			// 				"</div>",

			// 				"<div class=\"item item-text-wrap\" ng-bind-html=\"post.body\"></div>",

			// 			"</div>"].join("")
			templateUrl: "templates/directives/feature.tmpl.html"
	    };
	}]);
