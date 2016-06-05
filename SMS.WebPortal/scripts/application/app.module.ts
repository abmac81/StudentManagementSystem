/// <reference path="../typings/angularjs/angular.d.ts" />

((): void => {
    var app = angular.module("studentManagementModule", ['ngRoute']);
    app.config(StudentManagementSystem.Routes.configureRoutes);
})() 