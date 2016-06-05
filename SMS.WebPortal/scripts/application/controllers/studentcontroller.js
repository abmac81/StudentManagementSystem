var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var controllers;
(function (controllers) {
    var sms;
    (function (sms) {
        'use strict';
        var ActivityEntryController = (function (_super) {
            __extends(ActivityEntryController, _super);
            function ActivityEntryController($scope, JKCSService) {
                _super.call(this);
                this.$scope = $scope;
                this.JKCSService = JKCSService;
            }
            ActivityEntryController.$inject = ['$scope', 'JKCSService', '$attrs'];
            return ActivityEntryController;
        }(controllers.BaseController));
        sms.ActivityEntryController = ActivityEntryController;
    })(sms = controllers.sms || (controllers.sms = {}));
})(controllers || (controllers = {}));
//# sourceMappingURL=studentcontroller.js.map