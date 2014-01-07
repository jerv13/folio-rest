angular.module('jfolio.http', ['jfolio.config'])

    .factory('coreHttp', ['$http', 'httpConfig', function($http, httpConfig) {

        var CoreHttp = function() {

            var self = this;
            self.loading = false;
            self.defaultHeaders = {};
            self.defaultMessage = 'An unknown error has occurred.';
            self.invalidDataMessage = 'Server data was not return in a valid format.';
            self.comErrorMessage = 'There was an error talking to the server.';

            self.buildHeaders = function(headers) {

                if (typeof(headers) === 'undefined') {

                    return self.defaultHeaders;
                }

                return headers;
            };

            self.buildUrl = function(filepath) {

                return httpConfig.getFullUrl(filepath);
            };

            self.get = function(url, data, onSuccess, onFail, headers) {

                self.loading = true;

                var config = {
                    method: 'GET',
                    url: url,
                    params: data,
                    headers: self.buildHeaders(headers)
                };

                self.execute(config, onSuccess, onFail);
            };

            self.post = function(url, data, onSuccess, onFail, headers) {
                //@todo
            };

            self.put = function(url, data, onSuccess, onFail, headers) {
                //@todo
            };

            self.del = function(url, data, onSuccess, onFail, headers) {
                //@todo
            };

            self.execute = function(config, onSuccess, onFail) {

                self.loading = true;
                config.headers = self.buildHeaders(config.headers);

                $http(config).
                    success(function(data, status, headers, config) {

                    if (typeof(data) !== 'object' || typeof(data.code) === 'undefined' || typeof(data.message) === 'undefined' || typeof(data.data) === 'undefined') {

                        if (typeof(onFail) === 'function') {

                            onFail({code: 500, message: self.invalidDataMessage});
                        }

                        self.loading = false;
                        return;
                    }

                    if (data.code !== 200 || status !== 200) {

                        if (!data.message) {

                            data.message = self.defaultMessage;
                        }

                        if (!data.code) {

                            data.code = status;
                        }

                        if (typeof(onFail) === 'function') {
                            onFail({code: data.code, message: data.message});
                        }

                        self.loading = false;
                        return;
                    }

                    if ((typeof(onSuccess) === 'function')) {

                        onSuccess(data.data, config);

                    }

                    self.loading = false;
                    return;
                }).
                    error(function(data, status, headers, config) {

                    console.log(data);
                    console.log(status);
                    if (typeof(onFail) === 'function') {

                        onFail({code: status, message: self.comErrorMessage});
                    }

                    self.loading = false;
                    return;
                });

            };
        };

        return new CoreHttp();
    }])

    .factory('CoreHttpService', ['coreHttp', function(coreHttp) {

        var CoreHttpService = function(url, reqData, success, fail) {

            var self = this;
            self.url = null;
            self.reqData = null;
            self.success = null;
            self.fail = null;

            self.loading = true;
            self.data = null;
            self.exception = null;

            self.init = function(url, reqData, success, fail) {

                self.url = coreHttp.buildUrl(url);
                self.reqData = reqData;
                self.success = function(data, config) {

                    console.log('CoreHttpService.success');
                    if ((typeof(success) === 'function')) {

                        success(data, config);
                    }
                    self.data = data;
                    self.loading = false;
                };

                self.fail = function(exception) {

                    console.log('CoreHttpService.fail');
                    if ((typeof(fail) === 'function')) {

                        fail(exception);
                    }
                    self.exception = exception;
                    self.loading = false;
                };
            };

            self.execute = function() {
                console.log('CoreHttpService.execute');
                self.loading = true;
                coreHttp.get(self.url, self.reqData, self.success, self.fail);
            };

            self.init(url, reqData, success, fail);

        };

        return CoreHttpService;
    }
]);