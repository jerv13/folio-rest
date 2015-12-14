angular.module('jervfolio.resume')
    .controller(
        'jervfolioResumeLoginController', [
            '$scope', 'AuthService', '$state',
            function ($scope, AuthService, $state) {
                $scope.user = {
                    email: '',
                    password: ''
                };

                $scope.login = function () {
                    AuthService.login($scope.user.email, $scope.user.password)
                        .then(
                            function () {
                                $state.go('edit-resume');
                            }
                        );
                };

                AuthService.logout()
                    .then(
                        function () {
                            $state.go('view-resume');
                        }
                    );
            }
        ]
    );
