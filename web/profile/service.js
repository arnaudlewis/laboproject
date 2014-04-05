/*global angular*/
/*global console*/

angular.module('app.profile', [])

    .service('profileService', function ($http, $rootScope) {
        'use strict';
        function createProfile(sex, hobby, music, animal, smoke, moreInfo) {
            $http({
                method: 'POST',
                url: 'rest/user/profile',
                data: {sex: sex, hobby: hobby, music: music, animal: animal, smoke: smoke, moreInfo: moreInfo}
            })
                .success(function (status) {
                    console.log("Profile creation SUCCESS");
                    $rootScope.$broadcast('profileCreated');
                })
                .error(function (status) {
                    console.log("Profile creation FAILED");
                });
        }

        return {
            createProfileUser: function (sex, hobby, music, animal, smoke, moreInfo) {
                createProfile(sex, hobby, music, animal, smoke, moreInfo);
            }
        };
    });