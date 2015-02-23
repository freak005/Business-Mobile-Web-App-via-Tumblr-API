'use strict';

/**
 * @ngdoc service
 * @name tumblrApp.contact
 * @description
 * # contact
 * Factory in the tumblrApp.
 */
angular.module('Tumblr.services')
  .factory('homeService', function ($q, $http, TUMBLR_API_CONFIG) {

    // Public API here
    return {
      getSlider : function () {

          var deferred = $q.defer();
          var req = {
              params  : {
                  'callback'  :   'JSON_CALLBACK',
                  'api_key'   :   TUMBLR_API_CONFIG.api_key,
                  'limit'     :   1
              }
          }

          var url = TUMBLR_API_CONFIG.url.get_slider;
          url     = url.replace('%blog_url%', TUMBLR_API_CONFIG.blog_url);

          $http.jsonp(url, req)
              .success(function (data) {
                  // console.log(data);
                  deferred.resolve(data);
              })
              .error(function (data) {
                  deferred.reject(data);
              });

          return deferred.promise;

      },
      getFeature: function () {
        var deferred = $q.defer();
        var req = {
            params  : {
                'callback'  :   'JSON_CALLBACK',
                'api_key'   :   TUMBLR_API_CONFIG.api_key,
                'limit'     :   TUMBLR_API_CONFIG.paging_limit
            }
        }

        var url = TUMBLR_API_CONFIG.url.get_feature;
        url     = url.replace('%blog_url%', TUMBLR_API_CONFIG.blog_url);

        $http.jsonp(url, req)
            .success(function (data) {
                // console.log(data);
                deferred.resolve(data);
            })
            .error(function (data) {
                deferred.reject(data);
            });

        return deferred.promise;
      },
      getContact: function () {
        var deferred = $q.defer();
        var req = {
            params  : {
                'callback'  :   'JSON_CALLBACK',
                'api_key'   :   TUMBLR_API_CONFIG.api_key,
                'limit'     :   1
            }
        }

        var url = TUMBLR_API_CONFIG.url.get_contact;
        url     = url.replace('%blog_url%', TUMBLR_API_CONFIG.blog_url);

        $http.jsonp(url, req)
            .success(function (data) {
                // console.log(data);
                deferred.resolve(data);
            })
            .error(function (data) {
                deferred.reject(data);
            });

        return deferred.promise;
      }
    };
  });
