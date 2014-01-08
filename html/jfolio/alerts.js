angular.module('jfolio.alert', ['jfolio.exception'])

    .factory('Alerts', ['Exception', function(Exception) {

        var Alerts = function(scope) {

            var self = this;
            self.displayTime = 4000;
            self.alerts = [];
            self.thrown = [];
            self.timeout;

            self.buildException = function(exception, alertType) {

                if (typeof(exception) !== 'object') {
                    exception = new Exception();
                }

                if (typeof(alertType) !== 'string') {
                    alertType = 'info';
                }
                exception.type = alertType;

                return exception;
            };

            self.thrwNew = function(exception, type) {

                self.thrown.push(self.buildException(exception, type));
                self.setThrownTimout();
            };

            self.add = function(exception, type) {

                self.alerts.push(self.buildException(exception, type));
            };

            self.thrw = function() {

                self.thrown = self.alerts;
                self.setThrownTimout(self.clearAlerts);
            };

            self.setThrownTimout = function(onClear) {

                if (self.displayTime > 0) {
                    if (self.timeout) {
                        clearTimeout(self.timeout);
                    }
                    self.timeout = window.setTimeout(function() {

                        scope.$apply(function() {
                            self.clearThrown();
                            if (typeof(onClear) === 'function') {
                                onClear();
                            }
                        });
                    }, self.displayTime);
                }
            };

            self.clearThrown = function() {

                console.log('clearThrown');
                self.thrown = [];
            };

            self.clearAlerts = function() {

                console.log('clearAlerts');
                self.alerts = [];
            };

            self.clearAll = function() {

                console.log('clearAll');
                if (self.timeout) {
                    clearTimeout(self.timeout);
                }
                self.clearThrown();
                self.clearAlerts();
            };
        };

        return Alerts;
    }])

    .directive('alertsInclude', ['resumeDataService', function(resumeDataService) {

        return {
            restrict: 'A',
            template: '<div class="alerts" ng-show="alerts.thrown.length > 0"><div ng-repeat="alert in alerts.thrown"><div class="alert {{alert.type}} number_{{alert.code}}"><div class="icon"><i class="fa fa-exclamation-triangle fa-2x"></i></div><div class="code">{{alert.code}}: </div><div class="message">{{alert.message}}</div><div></div></div></div></div>',
            scope: {
                alerts: '='
            },
            link: function(scope, element, attrs, ngModel) {

                console.log("Include module.res1");
            }
        };
    }
]);