/// <reference path="../typings/angularjs/angular.d.ts" />
/// <reference path="../typings/angularjs/angular-route.d.ts" />
var StudentManagementSystem;
(function (StudentManagementSystem) {
    var Routes = (function () {
        function Routes() {
        }
        Routes.configureRoutes = function ($routeProvider) {
            $routeProvider.when("/home", { controller: "StudentManagementSystem.controllers.StudentController", templateUrl: "/app/views/playlist.html", controllerAs: "playList" });
            $routeProvider.otherwise({ redirectTo: "/home" });
        };
        Routes.$inject = ["$routeProvider"];
        return Routes;
    }());
    StudentManagementSystem.Routes = Routes;
})(StudentManagementSystem || (StudentManagementSystem = {}));
//# sourceMappingURL=app.routes.js.map