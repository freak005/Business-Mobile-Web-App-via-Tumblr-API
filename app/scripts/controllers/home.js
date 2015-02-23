'use strict';

/**
 * @ngdoc function
 * @name tumblrApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the tumblrApp
 */
angular.module('Tumblr.controllers')
  .controller('HomeCtrl', function ($scope, homeService) {

    /*
    * get homepage data
    */
    var getHomepageData = function() {

      homeService.getSlider().then(function (posts) {
        $scope.sliders = posts;

      });

      homeService.getFeature().then(function (posts) {
        $scope.features = posts;
      });

      homeService.getContact().then(function (posts) {
        //console.log(posts);
        $scope.contact = posts;
      });

    }

    getHomepageData();

  });
