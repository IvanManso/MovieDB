angular.module("moviedb").service("MovieService", ["$http", "$q", "apiPaths", "URL", function($http, $q, apiPaths, URL) {

    this.apiRequest = function(url) {

        //crear el objeto diferido
        var deferred = $q.defer();
        //hacer trabajo asíncrono
        $http.get(url)
            .then(function(response) {
                    //resolver la promesa
                    deferred.resolve(response.data);
                },

                function(response) {
                    //rechazar la promesa
                    deferred.reject(response.data);
                }
            );


        //devolver la promesa
        return deferred.promise;
    }

    this.getMovies = function() {

        //crear el objeto diferido
        var deferred = $q.defer();
        //hacer trabajo asíncrono
        $http.get(apiPaths.movies)
            .then(function(response) {
                    //resolver la promesa
                    deferred.resolve(response.data);
                },

                function(response) {
                    //rechazar la promesa
                    deferred.reject(response.data);
                }
            );


        //devolver la promesa
        return deferred.promise;
    };

    this.getMovie = function(movieId) {
        var url = URL.resolve(apiPaths.movieDetail, { id: movieId });
        return this.apiRequest(url);
    };
}]);