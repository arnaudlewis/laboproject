/*global angular*/
/*global console*/
/*global window*/

angular.module('app.profile', ['app.toggle-switch'])

    .service('profileService', function ($http, $rootScope, $state) {
        'use strict';
        function createProfile(user) {
            user.driverPreferences.animal = user.driverPreferences.animal ? 1 : 0;
            user.driverPreferences.smoke = user.driverPreferences.smoke ? 1 : 0;
            $http({
                method: 'POST',
                url: 'rest/user/profile',
                data: {user: user}
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
