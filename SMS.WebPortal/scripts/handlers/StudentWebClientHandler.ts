module StudentWebClient {
    export class StudentWebClientHandler {

        // what ever is required at window ready, page ready can be hooked here and managed
        // This where all the services and controllers of an application as added to the application
        // ERROR handlilng also could be done here
        private StudentApp: ng.IModule;

        constructor() {
            this.Initialize();
        }

        public Initialize(): void {
            try {
                console.log('finally');
                angular.module('studentwebclient.services', []).service(services);

                angular.module('studentwebclient.controllers', []).controller(controllers);

                // can append custom directives as well
                this.StudentApp = angular.module('StudentApp',
                    [
                        'studentwebclient.services',
                        'studentwebclient.controllers'
                    ]);
            }
            catch (exception) {
            }
        }
    }
}