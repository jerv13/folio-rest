angular.module('jervfolio.resume')
    .controller(
        'jervfolio.resume.resume.controller', [
            '$scope', 'ProfileContent',
            function ($scope, ProfileContent) {
                $scope.resume = ProfileContent.resume();
                $scope.loading = false;
                $scope.alerts = [];
                $scope.editing = false;
            }
        ]
    );
