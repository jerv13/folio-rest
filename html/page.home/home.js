'use strict';

angular.module('page.home',['ngRoute','core','service.http','module.header']);

var homePageController = function($scope, coreHttp){

    $scope.moduleHeaderData = {
        data : {
            title: 'New <h1>Title</h1>',
            content: '<img src="" alt="some cool content" />',
            tagline: 'tagline'
        }
    };

    $scope.resume = null;

    var success = function(data, config){

        $scope.resume = data;
    };

    var fail = function(exception){

        $scope.resume = exception;
    };

    coreHttp.get('http://localhost/@folioREST/folioREST/server.php/resume.phpl', {key:'resume'}, success, fail);


};

homePageController.$inject = ['$scope', 'coreHttp'];