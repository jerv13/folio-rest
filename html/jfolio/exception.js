angular.module('jfolio.exception', [])

    .factory('Exception', function() {

    var Exception = function() {
        var self = this;
        self.code = 500;
        self.message = 'Unknown Exception';
    };

    return Exception;
});