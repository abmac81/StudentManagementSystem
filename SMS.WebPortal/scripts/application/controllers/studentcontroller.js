var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var controllers;
(function (controllers) {
    'use strict';
    var StudentController = (function (_super) {
        __extends(StudentController, _super);
        function StudentController($scope) {
            _super.call(this);
            $scope.name = "Ameen";
            $scope.lastname = "Abdeen";
            console.log('Hi');
        }
        StudentController.$inject = ['$scope'];
        return StudentController;
    }(controllers.BaseController));
    controllers.StudentController = StudentController;
})(controllers || (controllers = {}));
//# sourceMappingURL=studentcontroller.js.map