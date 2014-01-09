'use strict';

angular.module('biz.index', ['jfolio.exception','jfolio.alert','biz.nav', 'biz.resume', 'biz.overview', 'biz.skills']);

var bizPageController = function($scope, Exception, Alerts, overviewDataService, resumeDataService, skillsDataService) {

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


    };

    /* @debug test alerts
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

bizPageController.$inject = ['$scope', 'Exception', 'Alerts', 'overviewDataService', 'resumeDataService', 'skillsDataService'];