angular.module("moviedb").controller("AppController",
	["$scope", "$location", function($scope, $location){
		var controller = this;
		//Controller properties
		controller.titles = {
			"/movies" : "Movies List",
			"/series" : "Series List",
			"/people" : "People List"
		}

		//Model init
		$scope.model ={
			title: ""
		};

		//Scope event listener
		//capturar evento con $on
		$scope.$on("$locationChangeSuccess", function(evt, currentRoute){
			$scope.model.title = controller.titles[$location.path()] || "404 Not found";
			});

	}]
	);