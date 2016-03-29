angular.module("moviedb").directive("badwords", function() {
    return {
        require: "ngModel",
        link: function($scope, elem, attrs, ctrl) {
            var badwords = ["fuck", "shit"];
            ctrl.$validators.badwords = function(modelValue, viewValue) {
                var rawWords = modelValue || "";
                var words = rawWords.split(" ");
                for (var i in badwords) {
                    var badword = badwords[i];
                    if (words.indexOf(badword) >= 0) {
                        ctrl.badword = badword;
                        return false;
                    }
                }
                ctrl.badword = "";
                return true;
            }
        }
    };
});
