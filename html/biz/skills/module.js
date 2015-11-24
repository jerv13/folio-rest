angular.module('biz.skills', ['jfolio.alert', 'jfolio.http'])

    .factory('skillsDataService', ['CoreHttpService', function(CoreHttpService) {

        var skillsDataService = new CoreHttpService('/ProfileContents/skills');

        return skillsDataService;
    }])

    .directive('bizSkillsInclude', ['Alerts', 'skillsDataService', function(Alerts, skillsDataService) {

        return {
            restrict: 'A',
            //template : '',
            templateUrl: 'skills/module.tpl',
            link: function(scope, element, attrs, ngModel) {

                console.log("bizSkillsInclude");
                scope.skillsDataAlerts = new Alerts(scope);
                scope.skillsDataAlerts.displayTime = 0;
                scope.error = false;

                skillsDataService.onExecuteStart = function() {

                    scope.skillsDataAlerts.clearAll();
                    scope.error = false;
                };

                skillsDataService.onSuccess = function() {

                    scope.skillsDataAlerts.clearAll();
                    scope.error = false;
                };

                skillsDataService.onFail = function(exception) {

                    console.log('skillsDataService.onFail');
                    scope.skillsDataAlerts.thrwNew(exception, 'error');
                    scope.error = true;
                };

                scope.skillsDataService = skillsDataService;
            }
        };
    }
])
    .filter('skillLevel', function() {

    var skillLevelMap = {
        0: "None",
        1: "Beginner",
        2: "Intermediate",
        3: "Advanced",
        4: "Expert"
    };

    return function(input) {

        if (typeof(skillLevelMap[input]) !== 'undefined') {

            return skillLevelMap[input];
        }
        return skillLevelMap[0];
    };
});
