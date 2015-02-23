'use strict';

/**
 * @ngdoc service
 * @name tumblrApp.blog
 * @description
 * # blog
 * Factory in the tumblrApp.
 */
angular.module('Tumblr.services')
  .factory('blogService', function ($q, $http, TUMBLR_API_CONFIG) {
    return {
      getBlogPosts: function ($offset) {
        var deferred = $q.defer();
        var req = {
            params  : {
                'callback'  :   'JSON_CALLBACK',
                'api_key'   :   TUMBLR_API_CONFIG.api_key,
                'limit'     :   TUMBLR_API_CONFIG.paging_limit,
                'offset'    :   $offset
            }
        }

        var url = TUMBLR_API_CONFIG.url.get_blog;
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
