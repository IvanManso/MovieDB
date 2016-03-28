angular.module("moviedb").controller("MovieDetailController", ["$scope", "$routeParams", "$location", "MovieService", "paths", function($scope, $routeParams, $location, MovieService, paths) {
    //Scope init
    $scope.model = {};
    $scope.uiState = "loading";

    //Controller init
    $scope.$emit("ChangeTitle", "Loading...");
    MovieService.getMovie($routeParams.id)
        .then(function(movie) {
                //película encontrada
                $scope.model = movie;
                $scope.uiState = 'ideal';
                //Desde un hijo al padre
                $scope.$emit("ChangeTitle", $scope.model.title);
            },
            function(error) {
                //película no encontrada
                $location.url(paths.notFound);
            }

        );

}]);
