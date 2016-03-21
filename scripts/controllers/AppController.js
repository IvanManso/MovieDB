angular.module("moviedb").controller("AppController",
	["$scope", function($scope){

		//Model init
		$scope.model ={
			title: ""
		};

		//Scope event listener
		//capturar evento con $on
		$scope.$on("OnMenuChange", function(evt, data){
			$scope.model.title = data;
		});

	}]
	);