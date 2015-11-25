angular.module('biz.about', ['jfolio.alert', 'jfolio.http'])

    .factory('aboutDataService', ['CoreHttpService', function(CoreHttpService) {

        var aboutDataService = new CoreHttpService('/ProfileContents/personal');

        return aboutDataService;
    }])

    .directive('bizAboutInclude', ['Alerts', 'aboutDataService', function(Alerts, aboutDataService) {

        return {
            restrict: 'A',
            //template : '',
            templateUrl: 'about/module.tpl',
            link: function(scope, element, attrs, ngModel) {

                console.log("bizAboutInclude");
                scope.aboutDataAlerts = new Alerts(scope);
                scope.aboutDataAlerts.displayTime = 0;
                scope.error = false;

                aboutDataService.onExecuteStart = function() {
                    console.log('aboutDataService.onExecuteStart');
                    scope.aboutDataAlerts.clearAll();
                    scope.error = false;
                };

                aboutDataService.onSuccess = function() {
                    console.log('aboutDataService.onSuccess');
                    scope.aboutDataAlerts.clearAll();
                    scope.error = false;
                };

                aboutDataService.onFail = function(exception) {

                    console.log('aboutDataService.onFail');
                    scope.aboutDataAlerts.thrwNew(exception, 'error');
                    scope.error = true;
                };

                scope.aboutDataService = aboutDataService;
            }
        };
    }
]);
