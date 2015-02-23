'use strict';

angular.module('tumblrConfig', [])

	.constant('TUMBLR_API_CONFIG', {
	  		'blog_url'		:	'mobile-business-app.tumblr.com',
	        'api_key'		: 	'SdN1SYWaD21YCFvsHHWmoDCdEZoVRBq1D5JIsuDn2XyBQi0u6o',
	    	'paging_limit' 	: 	10,
	      	'url' :
	      	{
	      		'get_slider'	: 	'http://api.tumblr.com/v2/blog/%blog_url%/posts/photo?tag=slider',
	      		'get_feature' 	: 	'http://api.tumblr.com/v2/blog/%blog_url%/posts?tag=feature',
	      		'get_contact' 	: 	'http://api.tumblr.com/v2/blog/%blog_url%/posts/chat?tag=contact',
	      		'get_avatar' 	: 	'http://api.tumblr.com/v2/blog/%blog_url%/avatar',
	      		'get_info' 		: 	'http://api.tumblr.com/v2/blog/%blog_url%/info',
	      		'get_gallery' 	: 	'http://api.tumblr.com/v2/blog/%blog_url%/posts?tag=gallery',
	      		'get_pages' 	: 	'http://api.tumblr.com/v2/blog/%blog_url%/posts?tag=static_page',
	      		'get_post_by_id': 	'http://api.tumblr.com/v2/blog/%blog_url%/posts',
	      		'get_blog'		: 	'http://api.tumblr.com/v2/blog/%blog_url%/posts?tag=blog'
	      	}
	});