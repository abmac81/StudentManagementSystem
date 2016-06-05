module controllers.sms {
    'use strict';

    export interface IStudentScope extends IBaseScope {

    }

    export class ActivityEntryController extends BaseController {

        static $inject = ['$scope', 'JKCSService', '$attrs'];

        constructor(private $scope: IStudentScope,
            private JKCSService: services.sms.JKCSService) {

            super();
        }
    }
}