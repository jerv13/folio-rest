angular.module('biz.resume', ['ngSanitize', 'jfolio.alert', 'jfolio.http'])

    .factory('resumeDataService', ['CoreHttpService', function(CoreHttpService) {

        var resumeDataService = new CoreHttpService('content.resume.php');

        return resumeDataService;
    }])

    .directive('bizResumeInclude', ['Alerts', 'resumeDataService', function(Alerts, resumeDataService) {

        return {
            restrict: 'A',
            //template : '',
            templateUrl: 'resume/module.tpl',
            link: function(scope, element, attrs, ngModel) {

                console.log("Include module.res1");
                scope.bizResumeAlerts = new Alerts(scope);
                scope.bizResumeAlerts.displayTime = 0;
                scope.error = false;

                resumeDataService.onExecuteStart = function() {

                    scope.bizResumeAlerts.clearAll();
                    scope.error = false;
                };

                resumeDataService.onSuccess = function() {

                    scope.bizResumeAlerts.clearAll();
                    scope.error = false;
                };

                resumeDataService.onFail = function(exception) {

                    console.log('resumeDataService.onFail');
                    scope.bizResumeAlerts.thrwNew(exception, 'error');
                    scope.error = true;
                };

                scope.resumeDataService = resumeDataService;
            }
        };
    }
]);