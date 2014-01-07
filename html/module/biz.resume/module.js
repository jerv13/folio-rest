angular.module('jfolio.module.biz.resume', ['ngSanitize','jfolio.http'])

    .directive('moduleBizResumeInclude', ['coreHttp', function(coreHttp) {

        return {
            restrict: 'A',
            //template : '',
            templateUrl: '../module/biz.resume/module.tpl',

            link: function(scope, element, attrs, ngModel) {

                console.log("Include module.res1");
                var success = function(data, config) {

                    scope.resume = data;
                    scope.loading = false;
                };

                var fail = function(exception) {
                    console.log("@todo - real error moduleResumeBizInclude");
                    console.log(exception);
                    scope.loading = false;
                };

                var url = coreHttp.buildUrl('content.resume.php');
                console.log("URL: " + url);
                scope.loading = true;
                coreHttp.get(url, {key: 'resume'}, success, fail);

            }
        };
    }
]);