angular.module('jfolio.http', ['jfolio.config'])

    .factory('coreHttp', ['$http', 'httpConfig', function($http, httpConfig) {

        var CoreHttp = function() {

            var self = this;
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

            self.buildUrl = function(filepath){

                return httpConfig.getFullUrl(filepath);
            };

            self.get = function(url, data, onSuccess, onFail, headers) {
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

                config.headers = self.buildHeaders(config.headers);

                $http(config).
                    success(function(data, status, headers, config) {

                    if (typeof(data) !== 'object' || typeof(data.code) === 'undefined' || typeof(data.message) === 'undefined' || typeof(data.data) === 'undefined') {

                        if (typeof(onFail) === 'function') {

                            onFail({code: 500, message: self.invalidDataMessage});
                        }
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
                        return;
                    }

                    if ((typeof(onSuccess) === 'function')) {

                        onSuccess(data.data, config);

                    }
                    return;
                }).
                    error(function(data, status, headers, config) {

                    console.log(data);
                    console.log(status);
                    if (typeof(onFail) === 'function') {

                        onFail({code: status, message: self.comErrorMessage});
                    }
                    return;
                });

            };
        };

        return new CoreHttp();
    }]);