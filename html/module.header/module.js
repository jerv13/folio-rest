angular.module('module.header', ['ngRoute','core'])

    .directive('moduleHeaderInclude', ['$compile', function($sce) {

        return {
            restrict: 'A',
            //template : '',
            templateUrl: '../module.header/module.tpl',
            scope: {
                data: '='
            },
            link: function(scope, element, attrs, ngModel) {
                console.log("Recognized the directive usage");
                scope.editable = true;
                scope.editing = false;
                scope.toggleEdit = function() {
                    scope.editing = !scope.editing;
                    console.log(scope.editing);
                };
            }
        };
    }
]);