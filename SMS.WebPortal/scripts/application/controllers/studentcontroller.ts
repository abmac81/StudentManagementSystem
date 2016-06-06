module controllers {
    'use strict';

    export interface IStudentScope extends IBaseScope
    {
        name: string;
        lastname: string;
    }

    export class StudentController extends BaseController{
        static $inject = ['$scope'];

        constructor($scope: IStudentScope) {
            super();

            $scope.name = "Ameen";
            $scope.lastname = "Abdeen";
            console.log('Hi');
        }
    }
}