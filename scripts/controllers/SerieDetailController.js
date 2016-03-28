angular.module("moviedb").controller("SerieDetailController", ["$scope", "$routeParams", "$location", "APIClient", "paths", function($scope, $routeParams, $location, APIClient, paths) {
    //Scope init
    $scope.model = {};
    $scope.uiState = "loading";

    //Controller init
    $scope.$emit("ChangeTitle", "Loading...");
    APIClient.getSerie($routeParams.id)
        .then(function(serie) {
                //película encontrada
                $scope.model = serie;
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
