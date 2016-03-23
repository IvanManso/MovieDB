//Creamos un módulo de angular ("URL", [])
angular.module("URL", []).service("URL", ["$log", function($log) {
    //params es un dicionario
    this.resolve = function(url, params) {
        var finalURL = [];
            var urlParts = url.split("/");
        for (var i in urlParts) {
            var urlPart = urlParts[i];
            if (urlPart.substr(0, 1) == ":") {
                var paramName = urlPart.substr(1);
                var paramValue = params[paramName] || null;
                if (paramValue == null) {
                    $log.error("URL.resolve error:", paramValue, "not found in params dict. Check your 'params' value bro.");
                    return;
                }
                finalURL.push(paramValue);
                //lo añadimos al array de url
            } else {
                finalURL.push(urlPart);
            }
        }
        return finalURL.join("/");
    };

}]);