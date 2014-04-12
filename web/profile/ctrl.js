/*global angular*/
/*global console*/
/*global window */
/*global $*/

angular.module('app.profile')
    .controller('profileCtrl', function ($rootScope, $scope, profileService, $sce, $state, alertService, $timeout) {
        'use strict';
        console.log("le module PROFIL vient d etre execute");
        $scope.submit = function () {
            console.log("la fonction SUBMIT du module PROFIL vient d etre execute");
            profileService.createProfileUser($scope.sex, $scope.hobby, $scope.music, $scope.animal, $scope.smoke, $scope.moreInfo); // souci variable text area à résoudre
        };

        $scope.iconProfile = $sce.trustAsHtml($rootScope.icon.PROFILE);
        $scope.user = window.localStorage;
        $scope.iconSex = $scope.user.sex ? $sce.trustAsHtml($rootScope.icon.FEMALE) : $sce.trustAsHtml($rootScope.icon.MALE);

        $scope.$on('profileUpdateFAILED', function (event) {
            alertService.showError("Profile Update failed");
        });

        $scope.$on('profileUpdateSUCCESS', function (event) {
            alertService.showSuccess("Profile Update SUCCESS");
            $timeout(function () {
                $state.go('main.home');
            }, 2000);
        });

        $scope.formValidation = function () {
            var btnProfile = $('#btn-profile');

            if ($scope.moreInfo.length > 0 && $scope.hobby.length > 0 && $scope.music.length > 0) {
                btnProfile.removeAttr('disabled');
                btnProfile.removeClass('disabled');
            } else {
                btnProfile.prop('disabled', true);
                btnProfile.addClass('disabled');
            }
        };
        $scope.moreInfo = $scope.hobby = $scope.music = '';
    });