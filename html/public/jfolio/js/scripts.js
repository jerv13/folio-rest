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
                
                self.clearThrown();
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
/* expects a global var: jfolioServerConfig */
angular.module('jfolio.config', [])

    .factory(
        'coreConfig', [
            function () {

            }
        ]
    )
    .factory(
        'httpConfig', [
            function () {

                var HttpConfig = function () {
                    var self = this;

                    self.url = {
                        scheme: "",
                        hostname: "",
                        port: "",
                        basepath: "api"
                    };

                    self.setUrl = function (url) {
                        if (typeof(url) === "object") {

                            self.url = url;
                        }
                    };

                    self.getFullUrl = function (filepath) {

                        var url =  (self.url.scheme.length > 0 ? self.url.scheme + "://" : "")
                            + (self.url.hostname.length > 0 ? self.url.hostname : "")
                            + (self.url.port.length > 0 ? ":"+ self.url.port : "")
                            + (self.url.basepath.length > 0 ? "/" + self.url.basepath : "")
                            + ((typeof(filepath) === "string") ? filepath : "");
                        console.log('Full Url: ' + url);
                        return url;
                    };
                };

                var httpConfig = new HttpConfig();

                if (typeof jfolioServerConfig !== 'undefined' && jfolioServerConfig.httpConfig && jfolioServerConfig.httpConfig.url) {
                    httpConfig.setUrl(jfolioServerConfig.httpConfig.url);
                } else {
                    console.log("Server config not available, using default");
                }

                return httpConfig;
            }
        ]
    );

'use strict';

angular.module('jfolio.core', [])

    // Content Editable
    .directive('contenteditable', function($sce) {
    return {
        restrict: 'A', // only activate on element attribute
        require: 'ngModel', // get a hold of NgModelController

        link: function(scope, elm, attrs, ctrl) {
            // view -> model //keyup change
            elm.on('blur', function() {
                var html = elm.html();
                scope.$apply(function() {
                    ctrl.$setViewValue(html);
                });
            });

            // model -> view
            ctrl.$render = function() {
                var html = $sce.trustAsHtml(ctrl.$viewValue);
                elm.html(html);
            };
        }
    };
})

    .filter('unsafe', function($sce) {
    return function(val) {
        return $sce.trustAsHtml(val);
    };
});
angular.module('jfolio.exception', [])

    .factory('Exception', function() {

    var Exception = function() {
        var self = this;
        self.code = 500;
        self.message = 'Unknown Exception';
    };

    return Exception;
});
/**
 * jfolio.http
 */
angular.module('jfolio.http', ['jfolio.config'])

    .factory(
        'coreHttp', [
            '$http', 'httpConfig', function ($http, httpConfig) {

                /**
                 * CoreHttp
                 * @constructor
                 */
                var CoreHttp = function () {

                    var self = this;
                    self.loading = false;
                    self.defaultHeaders = {};
                    self.defaultMessage = 'An unknown error has occurred.';
                    self.invalidDataMessage = 'Server data was not return in a valid format.';
                    self.comErrorMessage = 'There was an error talking to the server.';

                    self.buildHeaders = function (headers) {

                        if (typeof(headers) === 'undefined') {

                            return self.defaultHeaders;
                        }

                        return headers;
                    };

                    self.buildUrl = function (filepath) {

                        return httpConfig.getFullUrl(filepath);
                    };

                    self.get = function (url, data, onSuccess, onFail, headers) {
                        self.loading = true;

                        var config = {
                            method: 'GET',
                            url: url,
                            params: data,
                            headers: self.buildHeaders(headers)
                        };

                        self.execute(config, onSuccess, onFail);
                    };

                    self.post = function (url, data, onSuccess, onFail, headers) {
                        //@todo
                    };

                    self.put = function (url, data, onSuccess, onFail, headers) {
                        //@todo
                    };

                    self.del = function (url, data, onSuccess, onFail, headers) {
                        //@todo
                    };

                    self.execute = function (config, onSuccess, onFail) {

                        self.loading = true;
                        config.headers = self.buildHeaders(config.headers);

                        $http(config).
                        success(
                            function (data, status, headers, config) {
                                console.log('CoreHttp.success', data);
                                if (typeof(data) !== 'object') {

                                    if (typeof(onFail) === 'function') {
                                        onFail(
                                            {
                                                code: 500,
                                                message: self.invalidDataMessage
                                            }
                                        );
                                    }

                                    self.loading = false;
                                    return;
                                }

                                if (status !== 200) {

                                    if (typeof data !== 'object' || data === null) {
                                        data = {};
                                    }

                                    if (!data.error) {
                                        data.error = {
                                            status: status,
                                            message: self.defaultMessage
                                        }
                                    }

                                    if (typeof(onFail) === 'function') {
                                        onFail(
                                            {
                                                code: data.error.status,
                                                message: data.error.message
                                            }
                                        );
                                    }

                                    self.loading = false;
                                    return;
                                }

                                if ((typeof(onSuccess) === 'function')) {
                                    onSuccess(data, config);
                                }

                                self.loading = false;
                                return;
                            }
                        ).
                        error(
                            function (data, status, headers, config) {
                                console.log('CoreHttp.error');
                                console.log(data);
                                console.log(status);
                                if (typeof(onFail) === 'function') {
                                    onFail(
                                        {
                                            code: status,
                                            message: self.comErrorMessage
                                        }
                                    );
                                }

                                self.loading = false;
                                return;
                            }
                        );
                    };
                };

                return new CoreHttp();
            }
        ]
    )

    .factory(
        'CoreHttpService', [
            'coreHttp', function (coreHttp) {

                /**
                 * CoreHttpService
                 * @param url
                 * @param reqData
                 * @param onSuccess
                 * @param onFail
                 * @constructor
                 */
                var CoreHttpService = function (url, reqData, onSuccess, onFail) {

                    var self = this;
                    self.url = null;
                    self.reqData = null;

                    self.onInitComplete = null;
                    self.onExecuteStart = null;
                    self.onSuccess = null;
                    self.onFail = null;

                    self.loading = true;
                    self.data = null;
                    self.exception = null;

                    self.init = function (url, reqData, onSuccess, onFail) {

                        self.url = coreHttp.buildUrl(url);
                        self.reqData = reqData;
                        self.onSuccess = onSuccess;
                        self.onFail = onFail;
                        if ((typeof(self.onInitComplete) === 'function')) {

                            self.onInitComplete(self);
                        }
                    };

                    self.execute = function () {
                        console.log('CoreHttpService.execute');

                        if ((typeof(self.onExecuteStart) === 'function')) {

                            self.onExecuteStart(self);
                        }

                        self.loading = true;

                        var onSuccess = function (data, config) {

                            console.log('CoreHttpService.onSuccess');
                            if ((typeof(self.onSuccess) === 'function')) {

                                self.onSuccess(data, config);
                            }
                            self.data = data;
                            self.loading = false;
                        };

                        var onFail = function (exception) {

                            console.log('CoreHttpService.onFail');
                            if ((typeof(self.onFail) === 'function')) {

                                self.onFail(exception);
                            }
                            self.exception = exception;
                            self.loading = false;
                        };

                        coreHttp.get(self.url, self.reqData, onSuccess, onFail);
                    };

                    self.init(url, reqData, onSuccess, onFail);

                };

                return CoreHttpService;
            }
        ]
    );
