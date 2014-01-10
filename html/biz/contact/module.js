angular.module('biz.contact', ['jfolio.alert', 'jfolio.http'])

 .factory('contactDataService', ['CoreHttpService', function(CoreHttpService) {

        var contactDataService = new CoreHttpService('user.profile.professional.contact.php');

        return contactDataService;
    }])

 .directive('bizContactInclude', ['Alerts', 'contactDataService', function(Alerts, contactDataService) {

        return {
            restrict: 'A',
            //template : '',
            templateUrl: 'contact/module.tpl',
            link: function(scope, element, attrs, ngModel) {

                console.log("bizContactInclude");
                scope.contactDataAlerts = new Alerts(scope);
                scope.contactDataAlerts.displayTime = 0;
                scope.error = false;

                contactDataService.onExecuteStart = function() {

                    scope.contactDataAlerts.clearAll();
                    scope.error = false;
                };

                contactDataService.onSuccess = function() {

                    scope.contactDataAlerts.clearAll();
                    scope.error = false;
                };

                contactDataService.onFail = function(exception) {

                    console.log('contactDataService.onFail');
                    scope.contactDataAlerts.thrwNew(exception, 'error');
                    scope.error = true;
                };

                scope.contactDataService = contactDataService;

                scope.bizContactFormVisible = false;
                scope.toggleBizContactForm = function() {

                    if (!contactDataService.data && !scope.bizContactFormVisible) {

                        console.log('contactDataService.execute');
                        contactDataService.execute();
                    }
                    
                    scope.bizContactFormVisible = !scope.bizContactFormVisible;
                };
            }
        };
    }
]);