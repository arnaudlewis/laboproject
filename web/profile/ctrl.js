/*global angular*/
/*global console*/
/*global window */
/*global $*/

angular.module('app.profile')
    .controller('profileCtrl', function ($rootScope, $scope, profileService, $sce, $state, alertService, $timeout) {
        'use strict';
        function initProfile() {
            $scope.iconProfile = $sce.trustAsHtml($rootScope.icon.PROFILE);
            $scope.user = JSON.parse(window.localStorage.user);
            $scope.iconSex = $scope.user.sex ? $sce.trustAsHtml($rootScope.icon.FEMALE) : $sce.trustAsHtml($rootScope.icon.MALE);
        }

        initProfile();
        console.log("le module PROFIL vient d etre execute");
        $scope.submit = function () {
            console.log("la fonction SUBMIT du module PROFIL vient d etre execute");
            profileService.createProfileUser($scope.user); // souci variable text area à résoudre
        };

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

            if ($scope.user.moreInfo.length > 0 && $scope.user.hobby.length > 0 && $scope.user.music.length > 0) {
                btnProfile.removeAttr('disabled');
                btnProfile.removeClass('disabled');
            } else {
                btnProfile.prop('disabled', true);
                btnProfile.addClass('disabled');
            }
        };
    });

