/*global angular*/
/*global console*/

angular.module('app.profile')
    .controller('profileCtrl', function ($scope, profileService) {
        'use strict';
        console.log("le module PROFIL vient d etre execute");
        $scope.submit = function () {
            console.log("la fonction SUBMIT du module PROFIL vient d etre execute");
            profileService.createProfileUser($scope.sex, $scope.hobby, $scope.music, $scope.animal, $scope.smoke, $scope.moreInfo); // souci variable text area à résoudre
        };
    });