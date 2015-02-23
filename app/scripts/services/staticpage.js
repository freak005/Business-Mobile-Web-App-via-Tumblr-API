'use strict';

/**
 * @ngdoc service
 * @name tumblrApp.staticPage
 * @description
 * # staticPage
 * Factory in the tumblrApp.
 */
angular.module('Tumblr.services')
  .factory('staticPageService', function ($q, $http, TUMBLR_API_CONFIG) {
   // Public API here
    return {
      getPages: function () {
        var deferred = $q.defer();
        var req = {
            params  : {
                'callback'  :   'JSON_CALLBACK',
                'api_key'   :   TUMBLR_API_CONFIG.api_key
            }
        }

        var url = TUMBLR_API_CONFIG.url.get_pages;
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
      getPostById: function ($id) {
        var deferred = $q.defer();
        var req = {
            params  : {
                'callback'  :   'JSON_CALLBACK',
                'api_key'   :   TUMBLR_API_CONFIG.api_key,
                'id'        :   $id,
                'limit'     :   1
            }
        }

        var url = TUMBLR_API_CONFIG.url.get_post_by_id;
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
