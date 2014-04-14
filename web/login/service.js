/*global angular */
/*global window */

angular.module('app.login', ['angular-md5'])

    .service('loginService', ['$rootScope', '$http', 'md5', function ($rootScope, $http, md5) {
        'use strict';

        function write(data) {
            window.localStorage.user = JSON.stringify(data);

        }

        function loginRequestServer(username, password) {
            $http({
                method: 'POST',
                url: "rest/user/connect",
                data: {username: username, password: md5.createHash(password)}
            })
                .success(function (data) {
                    $rootScope.connect = data.connect;
                    if (data.username !== null) {
                        write(data);
                        $rootScope.$broadcast('loggedUser');
                    } else {
                        $rootScope.$broadcast('loginFailed');
                    }
                })

                .error(function (data, status, headers, config) {
                    $rootScope.$broadcast('loginFailed');
                });
        }

        return {
            login: function (username, password) {
                loginRequestServer(username, password);
            }
        };
    }]);