angular.module("moviedb").controller("AppController", ["$scope", "$location", "paths", function($scope, $location, paths) {
    var controller = this;
    //Controller properties
    controller.titles = {}
    controller.titles[paths.movies] = "Movies List";
    controller.titles[paths.series] = "Series List";
    controller.titles[paths.people] = "People List";
    controller.titles[paths.newMovie] = "Movie Form";


    //Model init
    $scope.model = {
        title: ""
    };

    //Scope event listener
    //capturar evento con $on
    $scope.$on("$locationChangeSuccess", function(evt, currentRoute) {
        $scope.model.title = controller.titles[$location.path()] || "404 Not found";
    });

    $scope.$on("ChangeTitle", function(evt, title) {
        $scope.model.title = title;
    });

}]);
