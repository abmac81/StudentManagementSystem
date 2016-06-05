var services;
(function (services) {
    var BaseService = (function () {
        function BaseService($http) {
            this.httpService = $http;
        }
        BaseService.prototype.ServiceRequest = function (serviceUrl, request) {
            // can hold information in cookies and retrieve them using the configuration provider in order to append those information to each call here
            var serviceHostUrl = 'http://localhost:4094/StudentService.svc/';
            return this.httpService
                .post(serviceHostUrl + serviceUrl, request)
                .then(function (result) {
                // if required an alert can be displayed here if there is an error
                //if (result.data.IsError)
                //    alert(result.data.ErrorMessage);
                //else
                return result.data;
            }, function (exception) {
                alert("Connection Error");
            });
        };
        return BaseService;
    }());
    services.BaseService = BaseService;
})(services || (services = {}));
//# sourceMappingURL=services.baseservice.js.map