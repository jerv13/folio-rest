'use strict';

angular.module('core', [])

// Content Editable
    .directive('contenteditable', function($sce) {
    return {
        restrict: 'A', // only activate on element attribute
        require: 'ngModel', // get a hold of NgModelController

        link: function(scope, elm, attrs, ctrl) {
            // view -> model //keyup change
            elm.on('blur', function() {
                var html = elm.html();
                scope.$apply(function() {
                    ctrl.$setViewValue(html);
                });
            });

            // model -> view
            ctrl.$render = function() {
                var html = $sce.trustAsHtml(ctrl.$viewValue);
                elm.html(html);
            };
        }
    };
})

.filter('unsafe', function($sce) {
    return function(val) {
        return $sce.trustAsHtml(val);
    };
});