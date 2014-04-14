/*global angular*/
/*global console*/
/*global window*/

angular.module('app.profile', ['app.toggle-switch'])

    .service('profileService', function ($http, $rootScope, $state) {
        'use strict';
        function createProfile(user) {
            var id_user = JSON.parse(window.localStorage.user).id_user;
            $http({
                method: 'POST',
                url: 'rest/user/profile',
                data: {id_user: id_user, hobby: user.hobby, music: user.music, animal: user.animal, smoke: user.smoke, moreInfo: user.moreInfo}
            })
                .success(function (data) {
                    window.localStorage.user = JSON.stringify(user);
                    $rootScope.$broadcast('profileUpdateSUCCESS');

                })
                .error(function (status) {
                    console.log("Profile creation FAILED");
                    $rootScope.$broadcast('profileUpdateFAILED');
                });


        }

        return {
            createProfileUser: function (user) {
                createProfile(user);
            }
        };
    });
