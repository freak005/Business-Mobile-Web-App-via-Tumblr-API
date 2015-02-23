'use strict';

/**
 * @ngdoc directive
 * @name tumblrApp.directive:photosetGrid
 * @description
 * # photosetGrid
 */
angular.module('Tumblr.directives')
  .directive('photosetGrid', function ($timeout) {
    return {
      template: [
      				'<div class="card">'
      				,'<div class="item item-divider">'
	      				,'<div id="photoGallery" class="photoset-grid-basic" style="visibility: hidden;" ng-repeat="photo in post.photos">'
					  		,'<img ng-src="{{photo.alt_sizes[0].url}}" data-highres="{{photo.original_size.url}}">'
						,'</div>'
					,'</div>'
					,'<div class="item item-text-wrap" ng-bind-html="post.caption"></div>'
					,'</div>'
				].join(""),
      restrict: 'E',
      controller: function($scope){
      	// console.log($scope.post);
      	$scope.photoSwipeArray = [];
      	for (var i = $scope.post.photos.length - 1; i >= 0; i--) {
      		var photosData = $scope.post.photos[i].alt_sizes[0];
      		var photoArray = {
					src : photosData.url,
					w 	: photosData.width,
					h 	: photosData.height,
					title : $scope.post.photos[i].caption
      		};

      		$scope.photoSwipeArray[i] = photoArray;
      	};
      },
      link: function postLink($scope, element, attrs ) {
			var $photoCount = $scope.post.photos.length;
			var $layoutTemplate = [];
				$layoutTemplate['1']  = ['1'];
				$layoutTemplate['2']  = ['11'];
				$layoutTemplate['3']  = ['12','21'];
				$layoutTemplate['4']  = ['121','211', '112', '211'];
				$layoutTemplate['5']  = ['122','131', '221', '212'];
				$layoutTemplate['6']  = ['222','231', '123', '132'];
				$layoutTemplate['7']  = ['232','223','232', '322'];
				$layoutTemplate['8']  = ['233','332','422', '224'];
				$layoutTemplate['9']  = ['333','324','423', '432'];
				$layoutTemplate['10'] = ['433','343','334', '3232'];

			var randomLayout = $layoutTemplate[$photoCount];
				randomLayout = randomLayout[Math.floor(Math.random()*randomLayout.length)];

	      	var $gutter = (attrs.gutter) ? attrs.gutter : '0px';
	      	var $layout = (attrs.layout) ? attrs.layout : randomLayout;
	      	var $highresLinks = (attrs.highresLinks) ? attrs.highresLinks : true;


			//photo viewer
			var openPhotoSwipe = function() {
			    var pswpElement = document.querySelectorAll('.pswp')[0];

			    // build items array
			    var items = $scope.photoSwipeArray;

			    // define options (if needed)
			    var options = {
					// history & focus options are disabled on CodePen
			      	// history: false,
			      	// focus: false,

			        showAnimationDuration: 0,
			        hideAnimationDuration: 0

			    };

			    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
			    gallery.init();
			};

	      	//load photo to grid
	      	$timeout(function(){


	      		element.photosetGrid({
					  // Set the gutter between columns and rows
					  gutter: $gutter,
					  // Manually set the grid layout
					  layout: $layout,
					  // Wrap the images in links
					  highresLinks: $highresLinks,
					  // Asign a common rel attribute
					  rel: 'withhearts-gallery',

					  onInit: function(){},
					  onComplete: function(){
					    // Show the grid after it renders
					    $('.photoset-grid-basic').attr('style', '');
					    $('.photoset-grid-basic a').click(function(){
					    	openPhotoSwipe();
					    	return false;
					    });
					}
				});

		    });


      }
    };
  });
