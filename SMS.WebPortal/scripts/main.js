/// <reference path="typings/angularjs/angular.d.ts" />
/// <reference path="typings/angularjs/angular-route.d.ts" />
(function () {
    requirejs.config({
        baseUrl: "scripts/application",
        paths: {
            "jquery": "../jquery-2.2.3.min",
            "bootstrap": "bootstrap",
            "app": "./studentApp",
            "angular": "../angular",
            "ngRoute": "../angular-route",
            "ngSanitize": "../angular-sanitize",
            "mainCtrls": "./controllers/mainControllers",
            "ui.bootstrap": "../angular-ui/ui-bootstrap-tpls"
        },
        shim: {
            "ngRoute": ['angular'],
            "ngSanitize": ['angular'],
            "ui.bootstrap": ['angular'],
            "bootstrap": ['jquery']
        }
    });
    require(["app", "bootstrap", "angular", "ngRoute", "ngSanitize", "ui.bootstrap"], function (app) {
        var studentApp = new app.studentApp();
        angular.element(document).ready(function () {
            angular.bootstrap(document, ['studentApp']);
        });
    });
})();
//# sourceMappingURL=main.js.map