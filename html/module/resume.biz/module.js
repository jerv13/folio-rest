angular.module('module.resume.biz', ['ngRoute', 'jfolio.http'])

    .directive('moduleResumeBizInclude', ['coreHttp', function(coreHttp) {

        return {
            restrict: 'A',
            //template : '',
            templateUrl: '../module/resume.biz/module.tpl',

            link: function(scope, element, attrs, ngModel) {

                console.log("Include module.res1");
                var success = function(data, config) {

                    scope.resume = data;
                };

                var fail = function(exception) {
                    console.log("@todo - real error moduleResumeBizInclude");
                    console.log(exception);
                };

                var url = coreHttp.buildUrl('resume.php');
                console.log("URL: " + url);
                coreHttp.get(url, {key: 'resume'}, success, fail);

            }
        };
    }
]);