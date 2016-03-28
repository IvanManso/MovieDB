angular.module("moviedb").directive("mediaItemList", function(){
	return{
		restrict: "AE",
		scope: {
			model: "=items",
			getDetailUrl: "&"
		},
		templateUrl: "views/mediaItemList.html"
	};
});