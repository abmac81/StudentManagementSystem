﻿module StudentWebClient {
    export class StudentWebClientHandler {

        // what ever is required at window ready, page ready can be hooked here and managed
        // This where all the services and controllers of an application as added to the application
        // ERROR handlilng also could be done here

        constructor() {
            this.Initialize();
        }

        public Initialize(): void {
            try {
                angular.module('studentwebclient.services', []).service(services);

                angular.module('studentwebclient.controllers', []).controller(controllers);

                // can append custom directives as well
                angular.module('StudentApp',
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