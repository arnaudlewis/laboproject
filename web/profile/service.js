/*global angular*/
/*global console*/
/*global window*/

angular.module('app.profile', ['app.toggle-switch'])

    .service('profileService', function ($http, $rootScope, $state) {
        'use strict';
        function createProfile(sex, hobby, music, animal, smoke, moreInfo) {
            var id_user = window.localStorage.id_user;
            $http({
                method: 'POST',
                url: 'rest/user/profile',
                data: {id_user: id_user, sex: sex, hobby: hobby, music: music, animal: animal, smoke: smoke, moreInfo: moreInfo}
            })
                .success(function (status) {
                    console.log("Profile creation SUCCESS");
                    $rootScope.$broadcast('profileUpdateSUCCESS');

                })
                .error(function (status) {
                    console.log("Profile creation FAILED");
                    $rootScope.$broadcast('profileUpdateFAILED');
                });
        }

        return {
            createProfileUser: function (sex, hobby, music, animal, smoke, moreInfo) {
                createProfile(sex, hobby, music, animal, smoke, moreInfo);
            }
        };
    });