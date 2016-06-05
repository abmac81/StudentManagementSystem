var StudentWebClient;
(function (StudentWebClient) {
    var StudentWebClientHandler = (function () {
        function StudentWebClientHandler() {
            this.Initialize();
        }
        StudentWebClientHandler.prototype.Initialize = function () {
            try {
                console.log('finally');
                angular.module('studentwebclient.services', []).service(services);
                angular.module('studentwebclient.controllers', []).controller(controllers);
                // can append custom directives as well
                this.StudentApp = angular.module('StudentApp', [
                    'studentwebclient.services',
                    'studentwebclient.controllers'
                ]);
            }
            catch (exception) {
            }
        };
        return StudentWebClientHandler;
    }());
    StudentWebClient.StudentWebClientHandler = StudentWebClientHandler;
})(StudentWebClient || (StudentWebClient = {}));
//# sourceMappingURL=StudentWebClientHandler.js.map