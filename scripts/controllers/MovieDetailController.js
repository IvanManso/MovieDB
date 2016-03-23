angular.module("moviedb").controller("MovieDetailController", ["$scope", "$routeParams", "$location", "MovieService", "paths", function($scope, $routeParams, $location, MovieService, paths) {
    //Scope init
    $scope.model = {};
    $scope.uiState = "loading";

    //Controller init
    MovieService.getMovie($routeParams.id)
    	.then(function(movie){
    		//película encontrada
    		$scope.model = movie;
    		$scope.uiState = 'ideal';
    	},
    	function(error){
    		//película no encontrada
    		$location.url(paths.notFound);
    	}

    	);

}]);