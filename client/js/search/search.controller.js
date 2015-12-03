angular.module('search.controller', [])
.directive('showsPreview', function(){
	return {
		templateUrl: '../views/shows.preview.html'
	}
})
.controller('SearchController', function ($scope, SearchService) {
	$scope.search = function(){
		SearchService.query({q: $scope.keywords}, function(response){
			$scope.tvlist = response;
			console.log(response);
		});
	};
});
