/*global angular */
/*global console */

angular.module('app.signin', ['angular-md5', 'app.header'])

    .service('signinService', function ($rootScope, $http, md5) {
        'use strict';

        function create(user, preference) {
            user.password = md5.createHash(user.password);
            preference.animal = preference.animal ? 1 : 0;
            preference.smoke = preference.smoke ? 1 : 0;
            preference.withMusic = preference.withMusic ? 1 : 0;
            $http({
                method: 'POST',
                url: 'rest/user/signin',
                data: {user: user, preference: preference}
            })
                .success(function (data) {
                    data.id_user !== -1 ? $rootScope.$broadcast("signinSuccess") : $rootScope.$broadcast("signinFailed", data.usernameExist, data.emailExist);
                })
                .error(function () {
                    $rootScope.$broadcast("requestFailed");
                });

        }

        return {
            createUser: function (user, preference) {
                create(user, preference);
            }
        };
    });