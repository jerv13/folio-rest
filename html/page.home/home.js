'use strict';

angular.module('page.home',['ngRoute','core','module.header']);

var homePageController = function($scope){

    $scope.moduleHeaderData = {
        data : {
            title: 'New <h1>Title</h1>',
            content: '<img src="" alt="some cool content" />',
            tagline: 'tagline'
        },
        view : {
            type : ''
        }
    };
};

homePageController.$inject = ['$scope'];