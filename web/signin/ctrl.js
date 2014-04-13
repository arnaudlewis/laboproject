/*global angular */
/*global console */

angular.module('app.signin')

    .controller('signinCtrl', function (md5, $timeout, $rootScope, signinService, $scope, headerService, alertService, $state) {
        'use strict'; // pour JSLint
        $scope.submit = function () {
            console.log('submit vient d etre execute');
            var creationDate = new Date();
            signinService.createUser(creationDate, $scope.sex, $scope.lastname, $scope.firstname, $scope.email, $scope.birthday, $scope.username, $scope.password);
        };

        $scope.$on('requestFailed', function (event) {
            alertService.showAlert('Echec de la creation de compte');
        });

        $scope.$on('signinSuccess', function (event) {
            alertService.showSuccess('Creation de compte reussi');
            $timeout(function () {
                $state.go('login');
            }, 2000);
        });

        $scope.$on('signinFailed', function (event, usernameExist, emailExist) {
            // ternaire // {{emailExist ? (usernameExist ? "l'email et l'identifiant existent" : "l'émail existe") : "le username existe"}}

            var alertUsername = $('#username'),
                alertEmail = $('#email');

            $('input').removeClass();

            if (usernameExist && emailExist) {
                alertService.showError($rootScope.translation.duplicate_USERNAME_EMAIL);
                alertUsername.addClass('alert_error');
                alertEmail.addClass('alert_error');
            } else if (usernameExist) {
                alertService.showError($rootScope.translation.duplicate_USERNAME);
                alertUsername.addClass('alert_error');
            } else if (emailExist)
                alertService.showError($rootScope.translation.duplicate_EMAIL);
            alertEmail.addClass('alert_error');
        });


        $scope.formValidation = function () {
            var btnSignup = $('#btn-signup');

            if ($scope.firstname.length > 0 && $scope.lastname.length > 0 && $scope.email.length > 0
                && $scope.username.length > 0 && $scope.password.length > 0) {
                btnSignup.removeAttr('disabled');
                btnSignup.removeClass('disabled');
            } else {
                btnSignup.prop('disabled', true);
                btnSignup.addClass('disabled');
            }
        };
        $scope.firstname = $scope.lastname = $scope.email = $scope.username = $scope.password = '';

        headerService.setup('BACK', $rootScope.translation.signin_TITLE, 'MENU');

    });