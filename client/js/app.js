angular.module('app',
	['ngRoute', 'ngResource'])
.config(['$routeProvider', '$locationProvider',
	function ($routeProvider, $locationProvider) {

		$routeProvider
		.when('/', {
			templateUrl: 'views/userinfo.html'
		})
		.when('/register', {
			templateUrl: 'views/register.html'
		})
		.when('/contact', {
			templateUrl: 'views/contact.html'
		})
		.when('/payment', {
			templateUrl: 'views/payment.html'
		})
		.otherwise({
			redirectTo: '/'
		});

		$locationProvider.html5Mode(true);
	}]);

