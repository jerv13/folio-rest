angular.module('biz.overview', ['jfolio.alert', 'jfolio.http'])

    .factory('overviewDataService', ['CoreHttpService', function(CoreHttpService) {

        var overviewDataService = new CoreHttpService('user.profile.professional.overview.php');

        return overviewDataService;
    }])

    .directive('bizOverviewInclude', ['Alerts', 'overviewDataService', function(Alerts, overviewDataService) {

        return {
            restrict: 'A',
            //template : '',
            templateUrl: 'overview/module.tpl',
            link: function(scope, element, attrs, ngModel) {

                console.log("bizOverviewInclude");
                scope.overviewDataAlerts = new Alerts(scope);
                scope.overviewDataAlerts.displayTime = 0;
                scope.error = false;

                overviewDataService.onExecuteStart = function() {

                    scope.overviewDataAlerts.clearAll();
                    scope.error = false;
                };

                overviewDataService.onSuccess = function() {

                    scope.overviewDataAlerts.clearAll();
                    scope.error = false;
                };

                overviewDataService.onFail = function(exception) {

                    console.log('overviewDataService.onFail');
                    scope.overviewDataAlerts.thrwNew(exception, 'error');
                    scope.error = true;
                };

                scope.overviewDataService = overviewDataService;
            }
        };
    }
]);