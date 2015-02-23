'use strict';

/**
 * @ngdoc function
 * @name tumblrApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the tumblrApp
 */
angular.module('Tumblr.controllers')
  .controller('BlogCtrl', function ($scope, $http, TUMBLR_API_CONFIG, blogService, $ionicPopup, $filter) {

    	$scope.blogPosts = [];
    	$scope.noMoreItemsAvailable = false;
    	$scope.postOffset = 0;
    	$scope.total_posts = 0;
    	$scope.last_posts = 0;

    	/*load first data*/
    	var loadPost = function($offset){
    		console.log("==> " +$offset);
    		// console.dir($scope.blogPosts);

  	    blogService.getBlogPosts($offset).then(function (items) {

  	    	angular.forEach(items.response.posts, function (item) {
  	    		$scope.blogPosts.push(item);
  	    	});

  			$scope.total_posts = items.response.total_posts;

  			$scope.last_offset  = $scope.postOffset - items.response.total_posts;

  			$scope.$broadcast('scroll.infiniteScrollComplete');
  	    });
      }

      loadPost($scope.postOffset);

    	/*infiniteScroll*/
    	$scope.loadMore = function() {
    		console.log("total_posts:"+$scope.total_posts + " postOffset:" +$scope.postOffset);
    		console.log("last_offset:"+$scope.last_offset + " " +"paging_limit:"+TUMBLR_API_CONFIG.paging_limit);

    		//if last_offset > paging limit, terminate scroll
          if($scope.last_offset > TUMBLR_API_CONFIG.paging_limit && $scope.last_offset > 0){
          	$scope.noMoreItemsAvailable = true;
          	$scope.$broadcast('scroll.infiniteScrollComplete');
          	return;
          }

          if($scope.postOffset > 0){
    			loadPost($scope.postOffset);
    		}

    		$scope.postOffset += TUMBLR_API_CONFIG.paging_limit;

    	}

    	$scope.$on('$stateChangeSuccess', function() {
    		if($scope.postOffset > 0){
    			$scope.loadMore();
    		}
    	});

  });
