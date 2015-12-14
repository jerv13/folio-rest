'use strict';

angular.module('biz.index', ['ngRoute', 'jfolio.exception', 'jfolio.alert', 'biz.nav', 'biz.contact', 'biz.resume', 'biz.overview', 'biz.skills', 'biz.about', 'biz.resources']);

var bizPageController = function($scope, Exception, Alerts, overviewDataService, resumeDataService, skillsDataService, aboutDataService, resourcesDataService) {

    $scope.navitems = [
        "Overview",
        "Resume",
        "Skills",
        "About",
        "Resources"
    ];

    $scope.activenavsection = 0;
    console.log('INIT overviewDataService.execute');
    overviewDataService.execute();

    $scope.onnav = function(section) {
        console.log('onnav: ' + section);

        if (section === 0) {

            if (!overviewDataService.data) {

                console.log('overviewDataService.execute');
                overviewDataService.execute();
            }
            return;
        }

        if (section === 1) {

            if (!resumeDataService.data) {

                console.log('resumeDataService.execute');
                resumeDataService.execute();
            }
            return;
        }

        if (section === 2) {

            if (!skillsDataService.data) {

                console.log('skillsDataService.execute');
                skillsDataService.execute();
            }
            return;
        }

        if (section === 3) {

            if (!aboutDataService.data) {

                console.log('aboutDataService.execute');
                aboutDataService.execute();
            }
            return;
        }

        if (section === 4) {

            if (!resourcesDataService.data) {

                console.log('resourcesDataService.execute');
                resourcesDataService.execute();
            }
            return;
        }
    };

    /* @debug test alerts *
     $scope.alerts = new Alerts($scope);
     $scope.alerts.displayTime = 0;
     var msss = "Some really long message. Some really long message. Some really long message. Some really long message. Some really long message. Some really long message. Some really long message. Some really long message. Some really long message. Some really long message. Some really long message. Some really long message. ";
     var ex = new Exception();
     var exx = new Exception();
     var exxx = new Exception();
     var exxxx = new Exception();
     ex.message = msss;
     //exx.message = msss;
     exxx.message = msss;
     exxxx.message = msss;
     $scope.alerts.add(ex,'info');
     $scope.alerts.add(exx,'notice');
     $scope.alerts.add(exxx,'warning');
     $scope.alerts.add(exxxx,'error');
     $scope.alerts.thrw();
     //$scope.alerts.thrwNew(ex,'info');
     */
};

bizPageController.$inject = ['$scope', 'Exception', 'Alerts', 'overviewDataService', 'resumeDataService', 'skillsDataService', 'aboutDataService', 'resourcesDataService'];

angular.module('biz.index').config(
    function ($routeProvider, $locationProvider) {
        // @todo
        //$routeProvider
        //    .when(
        //        '/Overview', {
        //            templateUrl: '/biz/overview/page.html',
        //        }
        //    )
        //    .otherwise(
        //        '/Overview', {
        //            templateUrl: '/biz/overview/page.html',
        //        }
        //    );

        $locationProvider.html5Mode(true);
    }
);

angular.module('biz.about', ['jfolio.alert', 'jfolio.http'])

    .factory('aboutDataService', ['CoreHttpService', function(CoreHttpService) {

        var aboutDataService = new CoreHttpService('/ProfileContents/personal');

        return aboutDataService;
    }])

    .directive('bizAboutInclude', ['Alerts', 'aboutDataService', function(Alerts, aboutDataService) {

        return {
            restrict: 'A',
            //template : '',
            templateUrl: '/biz/about/module.tpl',
            link: function(scope, element, attrs, ngModel) {

                console.log("bizAboutInclude");
                scope.aboutDataAlerts = new Alerts(scope);
                scope.aboutDataAlerts.displayTime = 0;
                scope.error = false;

                aboutDataService.onExecuteStart = function() {
                    console.log('aboutDataService.onExecuteStart');
                    scope.aboutDataAlerts.clearAll();
                    scope.error = false;
                };

                aboutDataService.onSuccess = function() {
                    console.log('aboutDataService.onSuccess');
                    scope.aboutDataAlerts.clearAll();
                    scope.error = false;
                };

                aboutDataService.onFail = function(exception) {

                    console.log('aboutDataService.onFail');
                    scope.aboutDataAlerts.thrwNew(exception, 'error');
                    scope.error = true;
                };

                scope.aboutDataService = aboutDataService;
            }
        };
    }
]);

angular.module('biz.contact', ['jfolio.alert', 'jfolio.http'])

    .factory('contactDataService', ['CoreHttpService', function(CoreHttpService) {

        var contactDataService = new CoreHttpService('/ProfileContents/contact');

        return contactDataService;
    }])

    .factory('contactReCaptcha', [function() {

        return Recaptcha;
    }])

    .directive('bizContactInclude', ['Alerts', 'contactDataService', 'contactReCaptcha', function(Alerts, contactDataService, contactReCaptcha) {

        return {
            restrict: 'A',
            //template : '',
            templateUrl: '/biz/contact/module.tpl',
            link: function(scope, element, attrs, ngModel) {

                console.log("bizContactInclude");
                scope.contactDataAlerts = new Alerts(scope);
                scope.contactDataAlerts.displayTime = 0;
                scope.error = false;

                contactDataService.onExecuteStart = function() {

                    scope.contactDataAlerts.clearAll();
                    scope.error = false;
                };

                contactDataService.onSuccess = function() {

                    scope.contactDataAlerts.clearAll();
                    scope.error = false;
                };

                contactDataService.onFail = function(exception) {

                    console.log('contactDataService.onFail');
                    scope.contactDataAlerts.thrwNew(exception, 'error');
                    scope.error = true;
                };

                scope.contactDataService = contactDataService;

                scope.bizContactFormVisible = false;
                scope.toggleBizContactForm = function() {

                    if (!contactDataService.data && !scope.bizContactFormVisible) {

                        console.log('contactDataService.execute');
                        contactDataService.execute();
                    }

                    scope.bizContactFormVisible = !scope.bizContactFormVisible;
                };

                scope.buildReCaptcha = function(elm) {

                    console.log("reCAPTCHA");

                    contactReCaptcha.create("6Le9fu0SAAAAAAK27WxvBM23IvaeZ-fWJpIqkyRP",
                        elm,
                        {
                            theme: "clean",
                            callback: function(){ console.log("reCAPTCHA SHOWN")}
                        }
                    );
                };


            }
        };
    }
]);

angular.module('biz.nav', [])

    .directive('bizNavInclude', [function() {

        return {
            restrict: 'A',
            //template : '',
            templateUrl: '/biz/nav/module.tpl',
            scope: {
                navitems: '=',
                activenavsection: '=',
                onnav: '='
            },
            link: function(scope, element, attrs, ngModel) {

                console.log("Include module.biz.nav" + scope.activenavsection);

                var sectionsCount = scope.navitems.length;

                var isValidNavSection = function(section) {

                    if (section > (sectionsCount - 1) || section < 0) {
                        return false;
                    }

                    return true;
                };

                var onNav = function(section) {

                    if (typeof(scope.onnav) === 'function') {

                        scope.onnav(section);
                    }
                };

                //scope.activeNavSection = 0;

                scope.nav = function(section) {

                    if (isValidNavSection(section)) {
                        scope.activenavsection = section;
                        onNav(section);
                    }
                };

                scope.navPrev = function() {

                    var section = scope.activenavsection--;

                    if (!isValidNavSection(section)) {
                        section = 0;
                    }

                    scope.activenavsection = section;
                    onNav(section);
                };

                scope.navNext = function() {

                    var section = scope.activenavsection++;

                    if (!isValidNavSection(section)) {
                        section = 0;
                    }

                    scope.activenavsection = section;
                    onNav(section);
                };

            }
        };
    }
]);

angular.module('biz.overview', ['jfolio.alert', 'jfolio.http'])

    .factory('overviewDataService', ['CoreHttpService', function(CoreHttpService) {

        var overviewDataService = new CoreHttpService('/ProfileContents/overview');

        return overviewDataService;
    }])

    .directive('bizOverviewInclude', ['Alerts', 'overviewDataService', function(Alerts, overviewDataService) {

        return {
            restrict: 'A',
            //template : '',
            templateUrl: '/biz/overview/module.tpl',
            link: function(scope, element, attrs, ngModel) {

                console.log("bizOverviewInclude");
                scope.overviewDataAlerts = new Alerts(scope);
                scope.overviewDataAlerts.displayTime = 0;
                scope.error = false;

                overviewDataService.onExecuteStart = function() {

                    scope.overviewDataAlerts.clearAll();
                    scope.error = false;
                };

                overviewDataService.onSuccess = function() {

                    scope.overviewDataAlerts.clearAll();
                    scope.error = false;
                };

                overviewDataService.onFail = function(exception) {

                    console.log('overviewDataService.onFail');
                    scope.overviewDataAlerts.thrwNew(exception, 'error');
                    scope.error = true;
                };

                scope.overviewDataService = overviewDataService;
            }
        };
    }
]);

angular.module('biz.resources', ['jfolio.alert', 'jfolio.http'])

    .factory('resourcesDataService', ['CoreHttpService', function(CoreHttpService) {

        var resourcesDataService = new CoreHttpService('/ProfileContents/resources');

        return resourcesDataService;
    }])

    .directive('bizResourcesInclude', ['Alerts', 'resourcesDataService', function(Alerts, resourcesDataService) {

        return {
            restrict: 'A',
            //template : '',
            templateUrl: '/biz/resources/module.tpl',
            link: function(scope, element, attrs, ngModel) {

                console.log("bizResourcesInclude");
                scope.resourcesDataAlerts = new Alerts(scope);
                scope.resourcesDataAlerts.displayTime = 0;
                scope.error = false;

                resourcesDataService.onExecuteStart = function() {

                    scope.resourcesDataAlerts.clearAll();
                    scope.error = false;
                };

                resourcesDataService.onSuccess = function() {

                    scope.resourcesDataAlerts.clearAll();
                    scope.error = false;
                };

                resourcesDataService.onFail = function(exception) {

                    console.log('resourcesDataService.onFail');
                    scope.resourcesDataAlerts.thrwNew(exception, 'error');
                    scope.error = true;
                };

                scope.resourcesDataService = resourcesDataService;
            }
        };
    }
]);

angular.module('biz.resume', ['ngSanitize', 'jfolio.alert', 'jfolio.http'])

    .factory('resumeDataService', ['CoreHttpService', function(CoreHttpService) {

        var resumeDataService = new CoreHttpService('/ProfileContents/resume');

        return resumeDataService;
    }])

    .directive('bizResumeInclude', ['Alerts', 'resumeDataService', function(Alerts, resumeDataService) {

        return {
            restrict: 'A',
            //template : '',
            templateUrl: '/biz/resume/module.tpl',
            link: function(scope, element, attrs, ngModel) {

                console.log("Include module.res1");
                scope.bizResumeAlerts = new Alerts(scope);
                scope.bizResumeAlerts.displayTime = 0;
                scope.error = false;

                resumeDataService.onExecuteStart = function() {

                    scope.bizResumeAlerts.clearAll();
                    scope.error = false;
                };

                resumeDataService.onSuccess = function() {

                    scope.bizResumeAlerts.clearAll();
                    scope.error = false;
                };

                resumeDataService.onFail = function(exception) {

                    console.log('resumeDataService.onFail');
                    scope.bizResumeAlerts.thrwNew(exception, 'error');
                    scope.error = true;
                };

                scope.resumeDataService = resumeDataService;
            }
        };
    }
]);

angular.module('biz.skills', ['jfolio.alert', 'jfolio.http'])

    .factory(
        'skillsDataService', [
            'CoreHttpService', function (CoreHttpService) {

                var skillsDataService = new CoreHttpService('/ProfileContents/skills');

                return skillsDataService;
            }
        ]
    )

    .directive(
        'bizSkillsInclude', [
            'Alerts', 'skillsDataService', function (Alerts, skillsDataService) {

                return {
                    restrict: 'A',
                    //template : '',
                    templateUrl: '/biz/skills/module.tpl',
                    link: function (scope, element, attrs, ngModel) {

                        console.log("bizSkillsInclude");
                        scope.skillsDataAlerts = new Alerts(scope);
                        scope.skillsDataAlerts.displayTime = 0;
                        scope.error = false;

                        skillsDataService.onExecuteStart = function () {

                            scope.skillsDataAlerts.clearAll();
                            scope.error = false;
                        };

                        skillsDataService.onSuccess = function (data) {
                            angular.forEach(
                                data,
                                function (value) {
                                    var dateSince = new Date(value.dateSince);
                                    var dateLastUsed = new Date();
                                    if (value.dateLastUsed) {
                                        dateLastUsed = new Date(value.dateLastUsed);
                                    }

                                    value.yearsexperience = Math.ceil(dateLastUsed.getFullYear() - dateSince.getFullYear());
                                }
                            );

                            scope.skillsDataAlerts.clearAll();
                            scope.error = false;
                        };

                        skillsDataService.onFail = function (exception) {

                            console.log('skillsDataService.onFail');
                            scope.skillsDataAlerts.thrwNew(exception, 'error');
                            scope.error = true;
                        };

                        scope.skillsDataService = skillsDataService;
                    }
                };
            }
        ]
    )
    .filter(
        'skillLevel', function () {

            var skillLevelMap = {
                0: "None",
                1: "Beginner",
                2: "Intermediate",
                3: "Advanced",
                4: "Expert"
            };

            return function (input) {

                if (typeof(skillLevelMap[input]) !== 'undefined') {

                    return skillLevelMap[input];
                }
                return skillLevelMap[0];
            };
        }
    );
