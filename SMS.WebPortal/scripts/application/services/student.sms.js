var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var services;
(function (services) {
    var sms;
    (function (sms) {
        ;
        ;
        ;
        ;
        ;
        ;
        ;
        ;
        var JKCSService = (function (_super) {
            __extends(JKCSService, _super);
            function JKCSService($http) {
                _super.call(this, $http);
            }
            JKCSService.prototype.UpdateStudent = function (request) {
                return this.ServiceRequest('UpdateStudent', request);
            };
            JKCSService.prototype.DeleteStudent = function (request) {
                return this.ServiceRequest('DeleteStudent', request);
            };
            JKCSService.prototype.GetStudentDetails = function (request) {
                return this.ServiceRequest('GetStudentDetails', request);
            };
            JKCSService.prototype.GetAllStudent = function (request) {
                return this.ServiceRequest('GetAllStudent', request);
            };
            JKCSService.$inject = ['$http'];
            return JKCSService;
        }(services.BaseService));
        sms.JKCSService = JKCSService;
    })(sms = services.sms || (services.sms = {}));
})(services || (services = {}));
//# sourceMappingURL=student.sms.js.map