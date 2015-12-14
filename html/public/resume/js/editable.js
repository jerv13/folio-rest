angular.module('jervfolio.resume')
    .directive(
        "editable", function () {
            return {
                restrict: "A",
                require: ["ngModel"],
                link: function (scope, element, attrs, ngModel) {
                    attrs.$observe(
                        'editable',
                        function (val) {
                            attrs.$set('contenteditable', val);
                        }
                    );

                    function read() {
                        ngModel.$setViewValue(element.html());
                    }

                    ngModel.$render = function () {
                        console.log('rend');
                        element.html(ngModel.$viewValue || "");
                    };

                    element.bind(
                        "blur keyup change", function () {
                            scope.$apply(read);
                        }
                    );
                }
            };
        }
    );
