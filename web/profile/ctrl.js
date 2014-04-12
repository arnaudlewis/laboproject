/*global angular*/
/*global console*/
/*global window */

angular.module('app.profile')
    .controller('profileCtrl', function ($rootScope, $scope, profileService, $sce) {
        'use strict';
        console.log("le module PROFIL vient d etre execute");
        $scope.submit = function () {
            console.log("la fonction SUBMIT du module PROFIL vient d etre execute");
            profileService.createProfileUser($scope.sex, $scope.hobby, $scope.music, $scope.animal, $scope.smoke, $scope.moreInfo); // souci variable text area à résoudre
        };

        $scope.iconProfile = $sce.trustAsHtml($rootScope.icon.PROFILE);
        $scope.user = window.localStorage;
        $scope.iconSex = $scope.user.sex ? $sce.trustAsHtml($rootScope.icon.FEMALE) : $sce.trustAsHtml($rootScope.icon.MALE);
    });