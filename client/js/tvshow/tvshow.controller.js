angular.module('tvshow.controller', [])
	.directive('castPreview', function(){
		return {
			restrict: 'EA',
			scope: {
				cast : '='
			},
			templateUrl: '../views/cast.preview.html'
		}
	})
	.controller('TvshowController', function ($scope, tvshow) {
		$scope.tvshow = tvshow;
});