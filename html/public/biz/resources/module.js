angular.module('biz.resources', ['jfolio.alert', 'jfolio.http'])

    .factory('resourcesDataService', ['CoreHttpService', function(CoreHttpService) {

        var resourcesDataService = new CoreHttpService('/ProfileContents/resources');

        return resourcesDataService;
    }])

    .directive('bizResourcesInclude', ['Alerts', 'resourcesDataService', function(Alerts, resourcesDataService) {

        return {
            restrict: 'A',
            //template : '',
            templateUrl: 'resources/module.tpl',
            link: function(scope, element, attrs, ngModel) {

                console.log("bizResourcesInclude");
                scope.resourcesDataAlerts = new Alerts(scope);
                scope.resourcesDataAlerts.displayTime = 0;
                scope.error = false;

                resourcesDataService.onExecuteStart = function() {

                    scope.resourcesDataAlerts.clearAll();
                    scope.error = false;
                };

                resourcesDataService.onSuccess = function() {

                    scope.resourcesDataAlerts.clearAll();
                    scope.error = false;
                };

                resourcesDataService.onFail = function(exception) {

                    console.log('resourcesDataService.onFail');
                    scope.resourcesDataAlerts.thrwNew(exception, 'error');
                    scope.error = true;
                };

                scope.resourcesDataService = resourcesDataService;
            }
        };
    }
]);
