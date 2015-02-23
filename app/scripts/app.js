'use strict';
// Ionic Starter App, v0.9.20

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('Tumblr.controllers', []);
angular.module('Tumblr.services', []);
angular.module('Tumblr.directives', []);
angular.module('Tumblr', ['ionic', 'tumblrConfig', 'Tumblr.controllers', 'Tumblr.services', 'Tumblr.directives', 'videosharing-embed'])

.run(function($ionicPlatform, $rootScope, $ionicLoading) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });

  //bind global event: show loading
  $rootScope.$on('loading:show', function() {
    $ionicLoading.show({
      template: 'loading...',
      showBackdrop: false,
      animation: 'fade-in'
    });
  });

  //bind global event: hide loading
  $rootScope.$on('loading:hide', function() {
    $ionicLoading.hide();
  });
})

.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
  //ionic loading
  $httpProvider.interceptors.push(function($rootScope, $timeout) {
    return {
      request: function(config) {
        $rootScope.$broadcast('loading:show');
        return config;
      },
      response: function(response) {
        $timeout(function(){
          $rootScope.$broadcast('loading:hide');
        }, 1000);
        return response;
      }
    }
  })

  //route my app
  $stateProvider

    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'templates/menu.html',
      controller: 'AppCtrl'
    })

    .state('app.home', {
      url: '/home',
      views: {
        'menuContent' :{
          templateUrl: 'templates/home.html',
          controller: 'HomeCtrl'
        }
      }
    })

    .state('app.page', {
      url: '/page/:postId/:postSlug',
      views: {
        'menuContent' :{
          templateUrl: 'templates/page.html',
          controller: 'PageCtrl'
        }
      }
    })

    .state('app.gallery', {
      url: '/gallery',
      views: {
        'menuContent' :{
          templateUrl: 'templates/gallery.html',
          controller: 'GalleryCtrl'
        }
      }
    })

    .state('app.gallery-detail', {
      url: '/gallery/detail/:postId',
      views: {
        'menuContent' :{
          templateUrl: 'templates/gallery-detail.html',
          controller: 'GalleryDetailCtrl'
        }
      }
    })

    .state('app.blog', {
      url: '/blog',
      views: {
        'menuContent' :{
          templateUrl: 'templates/blog.html',
          controller: 'BlogCtrl'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});

angular.element(document).ready(function() {
    angular.bootstrap(document, ['Tumblr']);
  });
