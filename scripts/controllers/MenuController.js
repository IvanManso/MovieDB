//En el  módulo moviedb, defino el controlador
angular.module("moviedb").controller("MenuController", ["$scope", function($scope) {
    //Scope init
    $scope.model = {
        selectedItem: "movies"
    };

    //Scope methods
    $scope.setSelectedItem = function(item) {
        $scope.model.selectedItem = item;
    };

    $scope.getClassForItem = function(item) {
        if ($scope.model.selectedItem == item) {
            return "active";
        } else {
            return "";
        }
    };

    //Scope Watchers
    $scope.$watch("model.selectedItem", function(newValue, oldValue) {
    	//emitimos un evento para que se entere AppControllers del cambios de opción del menú
    	$scope.$emit("OnMenuChange", newValue);
    });

}]);