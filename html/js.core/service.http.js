angular.module('service.http', ['$http'])
    .factory('service.http', function($http) {

    var Http = function() {

        var self = this;
        self.defaultHeaders = {};
        self.defaultMessage = 'An unknown error has occurred.';

        self.buildHeaders = function(headers) {

            if (typeof(headers) === 'undefined') {

                return self.defaultHeaders;
            }

            return headers;
        };

        self.get = function(url, data, onSucces, onFail, headers) {
            //@todo
        };

        self.post = function() {
            //@todo
        };

        self.put = function() {
            //@todo
        };

        self.del = function() {
            //@todo
        };

        self.execute = function(config, onSuccess, onFail) {

            config.headers = self.buildHeaders(config.headers);

            $http(config).
                success(function(data, status, headers, config) {

                if (typeof(data) !== 'object' || typeof(data.code) === 'undefined' || typeof(data.message) === 'undefined' || typeof(data.data) === 'undefined') {

                    if (typeof(onFail) === 'function') {

                        onFail({code: 500, message: 'Server data was not return in a valid format.'});
                    }
                    return;
                }

                if (data.code > 0) {

                    if(!data.message){

                        data.message = self.defaultMessage
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

                if (typeof(onFail) === 'function') {

                    onFail({code: status, message: 'There was an error talking to the server.'});
                }
                return;
            });

        };
    };
});