/*global angular */
/*global console */
/*global $ */

angular.module('app.signin')

    .controller('signinCtrl', function (md5, $timeout, $rootScope, signinService, $scope, headerService, alertService, $state, $sce) {
        'use strict';

        function initSignin() {
            $scope.user = {};
            $scope.user.firstname = $scope.user.lastname = $scope.user.email = $scope.user.username = $scope.user.password = $scope.user.hobby = $scope.user.music = '';
            $scope.user.sex = false;

            $scope.preference = {};
            $scope.preference.animal = false;
            $scope.preference.smoke = false;
            $scope.preference.withMusic = false;

            $scope.iconMale = $sce.trustAsHtml($rootScope.icon.MALE);
            $scope.iconFemale = $sce.trustAsHtml($rootScope.icon.FEMALE);
        }

        initSignin();

        $scope.submit = function () {
            $scope.user.creationDate = new Date();
            signinService.createUser($scope.user, $scope.preference);
        };

        $scope.$on('requestFailed', function (event) {
            alertService.showAlert($rootScope.translation.account_CREATION_FAILED);
        });

        $scope.$on('signinSuccess', function (event) {
            alertService.showSuccess($rootScope.translation.account_CREATION_SUCCESS);
            $timeout(function () {
                $state.go('login');
            }, 2000);
        });

        $scope.$on('signinFailed', function (event, usernameExist, emailExist) {

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

            if ($scope.user.firstname.length > 0 && $scope.user.lastname.length > 0 && $scope.user.email.length > 0
                && $scope.user.username.length > 0 && $scope.user.password.length > 0) {
                btnSignup.removeAttr('disabled');
                btnSignup.removeClass('disabled');
            } else {
                btnSignup.prop('disabled', true);
                btnSignup.addClass('disabled');
            }
        };
        $scope.selectSex = function (sexValue) {
            $scope.user.sex = sexValue;
            if (sexValue) {
                $('.female').addClass('active');
                $('.male').removeClass('active');
            } else {
                $('.male').addClass('active');
                $('.female').removeClass('active');
            }
        };
    });