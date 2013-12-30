angular.module('module.res1', ['ngRoute', 'jfolio.http'])

    .directive('moduleRes1Include', ['coreHttp', function(coreHttp) {

        return {
            restrict: 'A',
            //template : '',
            templateUrl: '../module.res/module.tpl',

            link: function(scope, element, attrs, ngModel) {

                console.log("Include module.res1");
                var success = function(data, config) {

                    scope.resume = data;
                };

                var fail = function(exception) {
                    console.log("@todo - real error");
                    console.log(exception);
                };

                var url = coreHttp.buildUrl('resume.php');
                coreHttp.get(url, {key: 'resume'}, success, fail);

            }
        };
    }
]);