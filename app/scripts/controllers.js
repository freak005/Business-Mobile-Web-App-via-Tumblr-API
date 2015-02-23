'use strict';
angular.module('Tumblr.controllers')

.controller('AppCtrl', function($scope, $rootScope, $ionicModal, $timeout, blogService, staticPageService, galleryService) {

  /** Menu functions **/

  //get  page data
  blogService.getBlogPosts().then(function (posts) {
    $scope.blogPostsCount = posts.response.total_posts;
  });

  //get static page data
  staticPageService.getPages().then(function (posts) {
    $scope.pages = posts;
    $rootScope.static_pages = posts;
  });

  //get data
  galleryService.getGallery().then(function(res){
    // console.log(res);
    $rootScope.gallery_data = res;
    $scope.haveGallery      = false;
    if(typeof res.response.posts === 'undefined'){
      //do nothing
    }else{
      $scope.haveGallery = res.response.posts.length;
    }
    $rootScope.haveGallery  = $scope.haveGallery;

  });

  /** End Menu functions **/

})

.controller('GalleryCtrl', function($scope, $rootScope, $stateParams, galleryService) {

    /*
    * Access rootScope, if having data, get data in rootScope
    * Otherwise, ajax get post detail by postId
    */
    if($rootScope.haveGallery){
      $scope.photos = $rootScope.gallery_data;
    }else{
      galleryService.getGallery().then(function(res){
          $scope.photos = res;
      });
    }

})

.controller('GalleryDetailCtrl', function($scope, $rootScope, $stateParams, staticPageService) {

    staticPageService.getPostById($stateParams.postId).then(function (posts) {
        $scope.posts = posts;
    });

})

.controller('PageCtrl', function($scope, $rootScope, $stateParams, staticPageService) {
  //get static page data
  var getPageDetail = function() {

    /*
    * Access rootScope, if having data, get data in rootScope
    * Otherwise, ajax get post detail by postId
    */
    if(typeof $rootScope.static_pages === "undefined"){
      staticPageService.getPostById($stateParams.postId).then(function (posts) {
        for (var i = posts.response.posts.length - 1; i >= 0; i--) {
          $scope.post_title = posts.response.posts[i].title;
          $scope.post_body  = posts.response.posts[i].body;
        };
      });
    }else{
      var $posts = $rootScope.static_pages.response.posts;
      for (var i = $posts.length - 1; i >= 0; i--) {
        if($posts[i].id == $stateParams.postId){
          $scope.post_title = $posts[i].title;
          $scope.post_body  = $posts[i].body;

          break;
        }
      };
    }

  }
  getPageDetail();
});
