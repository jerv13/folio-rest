'use strict';

angular.module('biz.index', ['jfolio.exception','jfolio.alert','biz.nav', 'biz.resume']);

var bizPageController = function($scope, Exception, Alerts, resumeDataService) {

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

            //if (!resumeDataService.data) {

                console.log('resumeDataService.execute');
                resumeDataService.execute();
            //}
        }
    };

    ///* @debug test alerts
    $scope.alerts = new Alerts($scope);
    $scope.alerts.displayTime = 0;
    var ex = new Exception();
    var exx = new Exception();
    var exxx = new Exception();
    var exxxx = new Exception();
    $scope.alerts.add(ex,'info');
    $scope.alerts.add(exx,'notice');
    $scope.alerts.add(exxx,'warning');
    $scope.alerts.add(exxxx,'error');
    $scope.alerts.thrw();
    //$scope.alerts.thrwNew(ex,'info');
    //*/
};

bizPageController.$inject = ['$scope', 'Exception', 'Alerts', 'resumeDataService'];