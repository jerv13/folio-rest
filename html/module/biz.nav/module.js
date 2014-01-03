angular.module('jfolio.module.biz.nav', [])

    .directive('moduleBizNavInclude', [function() {

        return {
            restrict: 'A',
            //template : '',
            templateUrl: '../module/biz.nav/module.tpl',
            scope: {
                navitems: '=',
                activenavsection: '='
            },
            link: function(scope, element, attrs, ngModel) {

                console.log("Include module.biz.nav"+scope.activenavsection);

                var sectionsCount = scope.navitems.length;

                var isValidNavSection = function(section) {

                    if (section > (sectionsCount - 1) || section < 0) {
                        return false;
                    }

                    return true;
                };

                //scope.activeNavSection = 0;

                scope.nav = function(section) {

                    if (isValidNavSection(section)) {
                        scope.activenavsection = section;
                    }
                };

                scope.navPrev = function() {

                    var section = scope.activenavsection--;

                    if (isValidNavSection(section)) {
                        scope.activenavsection = section;
                    } else {
                        scope.activenavsection = 0;
                    }
                };

                scope.navNext = function() {

                    var section = scope.activenavsection++;

                    if (isValidNavSection(section)) {
                        scope.activenavsection = section;
                    } else {
                        scope.activenavsection = 0;
                    }
                };

            }
        };
    }
]);