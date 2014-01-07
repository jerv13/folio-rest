angular.module('biz.resume', ['ngSanitize', 'jfolio.http'])

    .factory('resumeDataService', ['CoreHttpService', function(CoreHttpService) {

        var resumeDataService = new CoreHttpService('content.resume.php');

        return resumeDataService;
    }])

    .directive('moduleBizResumeInclude', ['resumeDataService', function(resumeDataService) {

        return {
            restrict: 'A',
            //template : '',
            templateUrl: 'resume/module.tpl',
            link: function(scope, element, attrs, ngModel) {

                console.log("Include module.res1");
                scope.resumeDataService = resumeDataService;
            }
        };
    }
]);