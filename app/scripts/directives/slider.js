'use strict';

/**
 * @ngdoc directive
 * @name tumblrApp.directive:slider
 * @description
 * # slider
 */
angular.module('Tumblr.directives')
.directive('sliderPost', ['$rootScope', '$ionicModal', '$ionicSlideBoxDelegate', function(){
	// Runs during compile
	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		// scope: {}, // {} = isolate, true = child, false/undefined = no change
		controller: function($scope, $element, $attrs, $transclude, $ionicModal, $ionicSlideBoxDelegate) {
	        /*
	        * Popup Photo Modal
	        */
	        $ionicModal.fromTemplateUrl('image-modal.html', {
	          scope: $scope,
	          animation: 'slide-in-up'
	        }).then(function(modal) {
	          $scope.modal = modal;
	        });

	        $scope.openModal = function(photos) {
	          $scope.modalPhotos = photos;
	          $scope.modal.show();
	          // Important: This line is needed to update the current ion-slide's width
	          // Try commenting this line, click the button and see what happens
	          $ionicSlideBoxDelegate.update();
	        };

	        $scope.closeModal = function() {
	          $scope.modal.hide();
	        };

	        // Cleanup the modal when we're done with it!
	        $scope.$on('$destroy', function() {
	          $scope.modal.remove();
	        });
		},
		require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
		// template: [
		// 	"<div class=\"card\">",

		// 		  "<div class='item item-body'>",
		// 		    "<ion-slide-box show-pager='true' ng-if='(post.photos.length-1)'>",
		// 		      "<ion-slide ng-repeat='image in post.photos'>",
		// 		        "<img class='full-image' ng-src='{{image.original_size.url}}'  ng-click='openModal(post.photos)'>",
		// 		      "</ion-slide>",
		// 		    "</ion-slide-box>",

		// 		    "<ion-slide-box show-pager='false' ng-if='!(post.photos.length-1)'>",
		// 		      "<ion-slide ng-repeat='image in post.photos'>",
		// 		        "<img class='full-image' ng-src='{{image.original_size.url}}'  ng-click='openModal(post.photos)'>",
		// 		      "</ion-slide>",
		// 		    "</ion-slide-box>",

		// 		    "<div ng-bind-html='post.caption'></div>",
		// 		    "<tumblr-tags ng-model='post'></tumblr-tags>",
		// 		  "</div>",

		// 		  "<script id='image-modal.html' type='text/ng-template'>",
		// 		    "<div class='modal image-modal transparent' ng-click='closeModal()'>",

		// 		      "<ion-slide-box show-pager='false' ng-if='(modalPhotos.length-1)'>",
		// 		        "<ion-slide ng-repeat='image in modalPhotos'>",
		// 		          "<img ng-src='{{image.original_size.url}}' class='fullscreen-image' />",
		// 		        "</ion-slide>",
		// 		      "</ion-slide-box>",

		// 		      "<ion-slide-box show-pager='false' ng-if='!(modalPhotos.length-1)'>",
		// 		        "<ion-slide>",
		// 		          "<img ng-src='{{modalPhotos[0].original_size.url}}' class='fullscreen-image' />",
		// 		        "</ion-slide>",
		// 		      "</ion-slide-box>",

		// 		    "</div>",
		// 		  "</script>",

		// 		"</div>"
		// ].join(""),
		templateUrl: "templates/directives/slider.tmpl.html",
		// replace: true,
		// transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		link: function($scope, iElm, iAttrs, controller) {

		}
	};
}]);
