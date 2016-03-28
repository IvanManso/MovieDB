angular.module("moviedb").controller("SeriesListController", ["$scope", "$log", "APIClient", "URL", "paths", function($scope, $log, APIClient, URL, paths) {

    //Scope init
    $scope.model = [];
    $scope.uiState = "loading";

    //Scope methods
    $scope.getSerieDetailURL = function(serie){
        return URL.resolve(paths.serieDetail, {id: serie.id});
    };


    //Controller start
    APIClient.getSeries()
        .then(
            //promesa resuelta
            function(data) {
                $log.log("SUCCESS", data);
                $scope.model = data;
                if ($scope.model.length == 0) {
                    $scope.uiState = "blank";
                } else {
                    $scope.uiState = "ideal";
                }
            },
            //promesa rechazada
            function(data) {
                $log.error("Error", data);
                $scope.uiState = "error";
            }
        );

}]);