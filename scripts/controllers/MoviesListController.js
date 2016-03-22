angular.module("moviedb").controller("MoviesListController", ["$scope", "$log", "MovieService", function($scope, $log, MovieService) {

    //Scope init
    $scope.model = [];
    $scope.uiState = "loading";


    //Controller start
    MovieService.getMovies()
        .then(
            //promesa resuelta
            function(response) {
                $log.log("SUCCESS", response.data);
                $scope.model = response.data;
                if ($scope.model.length == 0) {
                    $scope.uiState = "blank";
                } else {
                    $scope.uiState = "ideal";
                }
            },
            //promesa rechazada
            function(response) {
                $log.error("Error", response);
                $scope.uiState = "error";
            }
        );

}]);