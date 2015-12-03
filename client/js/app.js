angular.module('app',
	['ngRoute', 'ngResource', 'search.controller', 'search.service', 'tvshow.controller', 'tvshow.service'])
.filter('trustHTML', function($sce) {return function(text){ return $sce.trustAsHtml(text);}})
.config(['$routeProvider', '$locationProvider',
	function ($routeProvider, $locationProvider) {

		$routeProvider
		.when('/', {
			templateUrl: 'views/search.html',
			controller: 'SearchController'
		})
		.when('/show/:id', {
			templateUrl: 'views/show.html',
			controller: 'TvshowController',
			resolve: {
				tvshow: function($route, TvshowService){
					return TvshowService.get({id: $route.current.params.id});
				}
			}
		})
		.otherwise({
			redirectTo: '/'
		});

		$locationProvider.html5Mode(true);
	}]);

