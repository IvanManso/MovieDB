angular.module("moviedb").service("MovieService",
		 ["$q", "$timeout", function($q, $timeout){

        var movies = [];

        this.getMovies = function(){
        //creamos el objeto diferido
        var deferred = $q.defer();
        //asincronía
        $timeout(function() {
            if (Math.round(Math.random() * 10) % 2 == 0) {
                //resolvermos la promesa
                deferred.resolve(movies);
            } else {
                //rechazamos la promesa
                deferred.reject({error: "Forbidden"});

            }
        }, 500);

        //devolvemos la promesa del objeto diferido
        return deferred.promise;

    };
}]);