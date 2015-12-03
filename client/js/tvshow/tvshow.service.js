angular.module('tvshow.service', [])
	.factory('TvshowService', function ($resource) {
		return $resource('/api/show/:id');
	});