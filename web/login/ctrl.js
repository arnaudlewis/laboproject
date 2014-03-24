/*global angular */
/*global $ */

angular.module('app.login')

    .controller('loginCtrl', ['loginService', 'alertService', '$scope', '$rootScope', '$sce', '$state', function (loginService, alertService, $scope, $rootScope, $sce, $state) {
        'use strict';

        $scope.submit = function () {
            loginService.login($scope.username, $scope.password);
        };

        $scope.redirect = function () {
            $state.go('main.signin');
        };

        $scope.formValidation = function () {
            var btnLogin = $('#btn-login');

            if ($scope.username.length > 0 && $scope.password.length > 0) {
                btnLogin.removeAttr('disabled');
                btnLogin.removeClass('disabled');
            } else {
                btnLogin.prop('disabled', true);
                btnLogin.addClass('disabled');
            }
        };

        $scope.$on('loginFailed', function (event) {
            alertService.showAlert('Echec de login');
        });

        $scope.$on('loggedUser', function(event) {
            $state.go('main.signin');
        })

        $scope.iconUser = $sce.trustAsHtml($rootScope.icon.USER);
        $scope.username = $scope.password = '';

    }]);