'use strict';

angular.module('page.biz', ['jfolio.module.biz.nav', 'jfolio.module.biz.resume']);

var bizPageController = function($scope) {

   $scope.navitems = [
        "Overview",
        "Resume",
        "Skills",
        "About",
        "Resources"
   ];

   $scope.activenavsection = 0;

};

bizPageController.$inject = ['$scope'];