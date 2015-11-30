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
