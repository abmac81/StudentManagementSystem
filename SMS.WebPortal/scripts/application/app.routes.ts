/// <reference path="../typings/angularjs/angular.d.ts" />
/// <reference path="../typings/angularjs/angular-route.d.ts" />

module StudentManagementSystem {
    export class Routes {
        static $inject = ["$routeProvider"];
        static configureRoutes($routeProvider: ng.route.IRouteProvider) {
            $routeProvider.when("/home", { controller: "StudentManagementSystem.controllers.StudentController", templateUrl: "/app/views/playlist.html", controllerAs: "playList" });
            $routeProvider.otherwise({ redirectTo: "/home" });
        }
    }
}