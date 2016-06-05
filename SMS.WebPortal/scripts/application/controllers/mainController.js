define(["require", "exports"], function (require, exports) {
    "use strict";
    var mainController = (function () {
        function mainController() {
            var app = angular.module("mainController", []);
            app.controller('MainController', function ($scope, $location) {
                $scope.name = "John";
                $scope.lastName = "Doe";
            });
        }
        return mainController;
    }());
    exports.mainController = mainController;
});
//# sourceMappingURL=mainController.js.map