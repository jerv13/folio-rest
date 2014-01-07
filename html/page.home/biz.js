'use strict';

angular.module('page.biz', ['jfolio.module.biz.nav', 'jfolio.module.biz.resume']);

var bizPageController = function($scope, resumeDataService) {

    $scope.navitems = [
        "Overview",
        "Resume",
        "Skills",
        "About",
        "Resources"
    ];

    $scope.activenavsection = 0;

    $scope.onnav = function(section) {
        console.log('onnav: ' + section);
        if (section === 1) {

            if (!resumeDataService.data) {

                console.log('resumeDataService.execute');
                resumeDataService.execute();
            }
        }
    };

};

bizPageController.$inject = ['$scope', 'resumeDataService'];