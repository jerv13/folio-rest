'use strict';

angular.module('biz.index', ['biz.nav', 'biz.resume']);

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