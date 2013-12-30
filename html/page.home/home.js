'use strict';

angular.module('page.home',['ngRoute','jfolio.core','jfolio.http','module.header', 'module.resume.biz']);

var homePageController = function($scope){

    $scope.moduleHeaderData = {
        data : {
            title: 'New <h1>Title</h1>',
            content: '<img src="" alt="some cool content" />',
            tagline: 'tagline'
        }
    };
};

homePageController.$inject = ['$scope'];