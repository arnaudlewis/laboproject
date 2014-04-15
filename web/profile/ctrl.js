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
            alertService.showError($rootScope.translation.profile_UPDATE_FAILED);
        });

        $scope.$on('profileUpdateSUCCESS', function (event) {
            alertService.showSuccess($rootScope.translation.profile_UPDATE_SUCCESS);
            $timeout(function () {
                $state.go('main.home');
            }, 2000);
        });
    });

