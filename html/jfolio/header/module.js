angular.module('module.header', ['ngRoute','jfolio.core'])

    .directive('moduleHeaderInclude', [function() {

        return {
            restrict: 'A',
            //template : '',
            templateUrl: '../module/header/module.tpl',
            scope: {
                data: '='
            },
            link: function(scope, element, attrs, ngModel) {
                console.log("Include module.header");
                scope.editable = true;
                scope.editing = false;
                scope.toggleEdit = function() {
                    scope.editing = !scope.editing;
                    console.log(scope.data);
                };
            }
        };
    }
]);